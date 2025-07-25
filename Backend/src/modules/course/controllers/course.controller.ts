import { Request, RequestHandler, Response } from 'express';
import mongoose from 'mongoose';
import { RequestCustom } from '../../../types/express.type';
import { CustomError } from '../../../utils/custom-error';
import {
	createCourse,
	deleteCourse,
	enrollCourse,
	getAllCourses,
	getCourseByIdWithEnrollmentStatus,
	getCoursesByCategory,
	getCoursesByMe,
	getPopularCourses,
	getPopularCoursesSortedByReviews,
	unenrollCourse,
	updateCourse,
} from '../services/course.service';

// Thêm interface cho request body
interface CourseRequest {
	body: any;
	params: {
		id?: string;
	};
}

export const handleCreateCourse: RequestHandler<
	{},
	any,
	CourseRequest['body']
> = async (req, res) => {
	try {
		const course = await createCourse(req.body);
		res.status(201).json({
			success: true,
			message: 'Tạo khóa học thành công',
			data: course,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleGetAllCourses: RequestHandler = async (req, res) => {
	try {
		const courses = await getAllCourses();
		res.status(200).json({
			success: true,
			message: 'Lấy danh sách khóa học thành công',
			data: courses,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleGetCourseById = async (
	req: RequestCustom,
	res: Response
) => {
	try {
		// Lấy userId từ token
		const userId = req.user?._id?.toString();

		const course = await getCourseByIdWithEnrollmentStatus(
			req.params.id,
			userId
		);
		if (!course) {
			throw new CustomError('Không tìm thấy khóa học', 404);
		}
		res.status(200).json({
			success: true,
			data: course,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleUpdateCourse: RequestHandler<
	{ id: string },
	any,
	CourseRequest['body']
> = async (req, res) => {
	try {
		const course = await updateCourse(req.params.id, req.body);
		if (!course) {
			throw new CustomError('Không tìm thấy khóa học', 404);
		}
		res.status(200).json({
			success: true,
			message: 'Cập nhật khóa học thành công',
			data: course,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleDeleteCourse: RequestHandler<{ id: string }> = async (
	req,
	res
) => {
	const course = await deleteCourse(req.params.id);
	if (!course) {
		throw new CustomError('Không tìm thấy khóa học', 404);
	}
	res.status(200).json({
		success: true,
		message: 'Xóa khóa học thành công',
	});
};
export const handleGetPopularCoursesSortedByReviews: RequestHandler = async (
	req,
	res
) => {
	try {
		const courses = await getPopularCoursesSortedByReviews();
		res.status(200).json({
			success: true,
			message: 'Lấy danh sách khóa học phổ biến thành công',
			data: courses,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleGetCoursesByCategory = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const category =
			typeof req.query.category === 'string'
				? req.query.category.trim()
				: undefined;

		const page =
			typeof req.query.page === 'string' ? parseInt(req.query.page, 10) : 1;
		const limit =
			typeof req.query.limit === 'string' ? parseInt(req.query.limit, 10) : 12;
		console.log(category, limit, page);

		if (!category) {
			throw new CustomError('Không tìm thấy khóa học', 404);
		}

		const courses = await getCoursesByCategory(category, page, limit);

		if (!courses) {
			throw new CustomError('Không tìm thấy khóa học', 404);
		}
		res.status(200).json({
			success: true,
			message: 'Lấy danh sách khóa học theo danh mục thành công',
			data: courses,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleGetPopularCourses: RequestHandler = async (req, res) => {
	try {
		const { limit, page, sort } = req.query;

		const options = {
			limit: limit ? parseInt(limit as string) : 10,
			page: page ? parseInt(page as string) : 1,
			sortBy: (sort as 'users' | 'reviews') || 'reviews',
		};

		// Validate limit values (only allow 3 or 10)
		if (options.limit !== 3 && options.limit !== 10) {
			options.limit = 10;
		}

		// Validate sortBy values
		if (options.sortBy !== 'users' && options.sortBy !== 'reviews') {
			options.sortBy = 'reviews';
		}

		const result = await getPopularCourses(options);

		res.status(200).json({
			success: true,
			message: 'Lấy danh sách khóa học phổ biến thành công',
			data: result.courses,
			pagination: result.pagination,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleGetCoursesByMe = async (
	req: RequestCustom,
	res: Response
): Promise<any> => {
	try {
		const userId = req.user?._id;

		if (!userId) {
			throw new CustomError('Không tìm thấy thông tin người dùng.', 404);
		}

		const courses = await getCoursesByMe(userId);

		res.status(200).json({
			success: true,
			message: 'Lấy danh sách khóa học đã tham gia thành công',
			data: courses,
		});
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleEnrollCourse = async (
	req: RequestCustom,
	res: Response
): Promise<any> => {
	try {
		const userId = req.user?._id;
		const courseId = req.params.id;

		if (!userId) {
			throw new CustomError('Không tìm thấy thông tin người dùng.', 404);
		}

		const result = await enrollCourse(
			userId,
			new mongoose.Types.ObjectId(courseId)
		);

		return res.status(201).json(result);
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};

export const handleUnenrollCourse = async (
	req: RequestCustom,
	res: Response
): Promise<any> => {
	try {
		const userId = req.user?._id;
		const courseId = req.params.id;

		if (!userId) {
			throw new CustomError('Không tìm thấy thông tin người dùng.', 404);
		}

		const result = await unenrollCourse(
			userId,
			new mongoose.Types.ObjectId(courseId)
		);

		return res.status(201).json(result);
	} catch (error) {
		if (error instanceof CustomError) {
			res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(500).json({
				success: false,
				message: 'Lỗi server',
				error: process.env.NODE_ENV === 'development' ? error : undefined,
			});
		}
	}
};
