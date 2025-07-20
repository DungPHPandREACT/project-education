import mongoose from "mongoose";
import Review from "../models/review.model";
import { CustomError } from "../../../utils/custom-error";
import Course from "../../course/models/course.model";

export const createReview = async (
  courseId: string,
  userId: string,
  rating: number,
  comment: string
) => {
  const course = await Course.findOne({
    _id: courseId,
    users: userId,
  });

  if (!course) {
    throw new CustomError("Bạn không thể đánh giá khóa học chưa đăng ký.", 409);
  }
  return await Review.create({
    courseId: new mongoose.Types.ObjectId(courseId),
    userId: new mongoose.Types.ObjectId(userId),
    rating,
    comment,
  });
};

export const getReviewsByCourse = async (courseId: string) => {
  return await Review.find({ courseId: new mongoose.Types.ObjectId(courseId) })
    .populate("userId", "email fullName  avatar")
    .sort({ createdAt: -1 });
};

export const updateReview = async (
  reviewId: string,
  userId: string,
  rating: number,
  comment: string
) => {
  return await Review.findOneAndUpdate(
    { _id: reviewId, userId: userId },
    { rating, comment },
    { new: true }
  );
};

export const deleteReview = async (reviewId: string, userId: string) => {
  return await Review.findOneAndDelete({ _id: reviewId, userId: userId });
};
