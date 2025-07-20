import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { RequestCustom } from '../types/express.type';
import { UserPayload } from '../types/user.type';


export const optionalAuthMiddleware = (
	req: RequestCustom,
	res: Response,
	next: NextFunction
): any => {
	const token = req.headers['authorization']?.split(' ')[1];

	
	if (!token) {
		req.user = undefined;
		return next();
	}

	try {
		const decoded = jwt.verify(token, config.JWT_SECRET);
		req.user = decoded as UserPayload;
		next();
	} catch (error) {

		req.user = undefined;
		next();
	}
};
