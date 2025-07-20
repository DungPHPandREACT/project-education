import { NextFunction, Response } from 'express';
import { RequestCustom } from '../../../types/express.type';
import { CustomError } from '../../../utils/custom-error';
import * as reviewService from '../services/review.service';

export const createReview = async (
	req: RequestCustom,
	res: Response,
	next: NextFunction
) => {
	try {
		const { courseId, rating, comment } = req.body;
		const userId = req.user?._id;

		if (!userId) {
			res.status(401).json({
				message: 'Không tìm thấy thông tin người dùng',
			});
			return;
		}

		const review = await reviewService.createReview(
			courseId,
			userId.toString(),
			rating,
			comment
		);

		res.status(201).json({
			message: 'Đánh giá khóa học thành công',
			data: review,
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

export const getReviewsByCourse = async (req: RequestCustom, res: Response) => {
	try {
		const { courseId } = req.params;
		const reviews = await reviewService.getReviewsByCourse(courseId);

		res.status(200).json({
			message: 'Lấy danh sách đánh giá thành công',
			data: reviews,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Đã có lỗi xảy ra',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

export const updateReview = async (req: RequestCustom, res: Response) => {
	try {
		const { reviewId } = req.params;
		const { rating, comment } = req.body;
		const userId = req.user?._id;

		if (!userId) {
			res.status(401).json({
				message: 'Không tìm thấy thông tin người dùng',
			});
			return;
		}

		const review = await reviewService.updateReview(
			reviewId,
			userId.toString(),
			rating,
			comment
		);

		if (!review) {
			res.status(404).json({
				message: 'Không tìm thấy đánh giá hoặc bạn không có quyền chỉnh sửa',
			});
			return;
		}

		res.status(200).json({
			message: 'Cập nhật đánh giá thành công',
			data: review,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Đã có lỗi xảy ra',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

export const deleteReview = async (req: RequestCustom, res: Response) => {
	try {
		const { reviewId } = req.params;
		const userId = req.user?._id;

		if (!userId) {
			res.status(401).json({
				message: 'Không tìm thấy thông tin người dùng',
			});

			return;
		}

		const review = await reviewService.deleteReview(
			reviewId,
			userId.toString()
		);

		if (!review) {
			res.status(404).json({
				message: 'Không tìm thấy đánh giá hoặc bạn không có quyền xóa',
			});
			return;
		}

		res.status(200).json({
			message: 'Xóa đánh giá thành công',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Đã có lỗi xảy ra',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};
