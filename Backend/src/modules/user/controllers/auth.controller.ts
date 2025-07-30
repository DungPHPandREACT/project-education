import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config/config';
import { RequestCustom } from '../../../types/express.type';
import generateRefreshToken from '../../../utils/generateRefreshToken';
import generateToken from '../../../utils/generateToken';
import User, { IUser } from '../models/user.model';

export const registerUser = async (
	req: Request,
	res: Response
): Promise<any> => {
	console.log('req.body: ', req.body);

	const { email, password, fullName, role } = req.body;

	try {
		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({
				message: 'Người dùng đã tồn tại',
			});
		}

		user = new User({ email, password, fullName, role });

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		const token = generateToken(user);

		res.status(201).json({
			message: 'Đăng ký thành công',
			token,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: 'Email chưa tồn tại' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({
				message: 'Mật khẩu không trùng khớp',
			});
		}

		const data = {
			_id: user._id,
			email: user.email,
			fullName: user.fullName,
			role: user.role,
		} as IUser;

		const token = generateToken(data);
		const refreshToken = generateRefreshToken(data);

		res.cookie('token', token, {
			httpOnly: true,
			secure: false,
			maxAge: 3600 * 1000, // 1 hour
			sameSite: 'lax',
		});

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: false,
			maxAge: 3600 * 1000 * 72, // 72 hour
			sameSite: 'lax',
		});

		res.json({
			message: 'Đăng nhập thành công',
			data,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

export const refresh = async (req: Request, res: Response): Promise<any> => {
	const { refreshToken } = req.cookies;

	if (!refreshToken) {
		return res.status(403).json({
			message: 'Refresh token không hợp lệ',
		});
	}

	try {
		const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

		const newAccessToken = generateToken(decoded as IUser);

		res.cookie('token', newAccessToken, {
			httpOnly: true,
			secure: false,
			maxAge: 3600 * 1000, // 1 hour
			sameSite: 'lax',
		});

		res.json({
			message: 'Cấp phát access token thành công',
		});
	} catch (error) {
		console.log('error: ', error);
		return res.status(403).json({
			message: 'Refresh token hết hạn',
		});
	}
};

export const getCurrentUser = async (
	req: RequestCustom,
	res: Response,
	next: NextFunction
) => {
	try {
		const userId = req.user?._id;

		if (!userId) {
			res.status(401).json({
				message: 'Không tìm thấy thông tin người dùng',
			});
			return;
		}

		const user = await User.findById(userId)
			.select('-password -__v')
			.populate({
				path: 'courses',
				select: 'title instructorId',
				populate: {
					path: 'instructorId',
					select: 'fullName',
				},
			});

		if (!user) {
			res.status(404).json({
				message: 'Không tìm thấy người dùng',
				solution: '1. Kiểm tra token 2. Xác minh người dùng tồn tại trong DB',
			});
			return;
		}

		res.status(200).json({
			message: 'Lấy thông tin người dùng thành công',
			data: {
				...user.toObject(),
				lastAccessed: new Date(),
			},
		});
	} catch (error) {
		res.status(500).json({
			message: 'Đã có lỗi xảy ra',
			error: error instanceof Error ? error.message : 'Unknown error',
			debug: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};
