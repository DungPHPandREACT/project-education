import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { RequestCustom } from '../types/express.type';
import { UserPayload } from '../types/user.type';

// Middleware xác thực tùy chọn - không bắt buộc đăng nhập
export const optionalAuthMiddleware = (
	req: RequestCustom,
	res: Response,
	next: NextFunction
): any => {
	const token = req.headers['authorization']?.split(' ')[1];

	// Nếu không có token, tiếp tục mà không gán user
	if (!token) {
		req.user = undefined;
		return next();
	}

	try {
		const decoded = jwt.verify(token, config.JWT_SECRET);
		req.user = decoded as UserPayload;
		next();
	} catch (error) {
		// Nếu token không hợp lệ, vẫn tiếp tục nhưng không gán user
		req.user = undefined;
		next();
	}
};
