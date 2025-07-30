import jwt from 'jsonwebtoken';
import config from '../config/config';
import { IUser } from '../modules/user/models/user.model';

const generateRefreshToken = (user: IUser) => {
	return jwt.sign(
		{ userId: user._id, fullName: user.fullName, role: user.role },
		config.JWT_SECRET,
		{
			expiresIn: '72h',
		}
	);
};

export default generateRefreshToken;
