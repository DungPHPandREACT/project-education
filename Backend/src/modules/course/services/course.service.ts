import mongoose from "mongoose";
import Course, { ICourse } from "../models/course.model";
import { CustomError } from "../../../utils/custom-error";
import User from "../../user/models/user.model";

export async function createCourse(courseData: Partial<ICourse>) {
  return await Course.create(courseData);
}

export async function getAllCourses() {
  return await Course.find()
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");
}

export async function getCourseById(id: string) {
  return await Course.findById(id)
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");
}

export async function updateCourse(id: string, updateData: Partial<ICourse>) {
  return await Course.findByIdAndUpdate(id, updateData, { new: true });
}

export async function deleteCourse(id: string) {
  return await Course.findByIdAndDelete(id);
}

export const getCoursesByCategory = async (
  category: string,
  page: number,
  limit: number
): Promise<{
  courses: ICourse[];
  totalCourses: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}> => {
  try {
    const skip = (page - 1) * limit;

    const courses: ICourse[] = await Course.find({
      category: { $regex: new RegExp(category, "i") },
    })
      .skip(skip)
      .limit(limit)
      .populate("instructorId", "email fullName avatar");

    const totalCourses = await Course.countDocuments({
      category: { $regex: new RegExp(category, "i") },
    });

    const totalPages = Math.ceil(totalCourses / limit);

    return { courses, totalCourses, totalPages, currentPage: page, limit };
  } catch (error) {
    throw new Error("Có lỗi khi lấy danh sách khóa học.");
  }
};

export const getCoursesByMe = async (
  userId: mongoose.Types.ObjectId
): Promise<ICourse[]> => {
  try {
    const courses = await Course.find({
      users: userId,
    });

    return courses;
  } catch (error) {
    throw new Error("Có lỗi khi lấy danh sách khóa học.");
  }
};

export const enrollCourse = async (
  userId: mongoose.Types.ObjectId,
  courseId: mongoose.Types.ObjectId
) => {
  try {
    const course = await Course.findOne({
      _id: courseId,
      users: userId,
    });

    if (course) {
      throw new CustomError("Bạn đã đăng ký khóa học này.", 409);
    }

    await Promise.all([
      Course.updateOne({ _id: courseId }, { $addToSet: { users: userId } }),
      User.updateOne({ _id: userId }, { $addToSet: { courses: courseId } }),
    ]);

    return {
      success: true,
      message: "Đăng ký khóa học thành công",
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }

    throw new Error("Có lỗi khi đăng ký khóa học.");
  }
};

export const unenrollCourse = async (
  userId: mongoose.Types.ObjectId,
  courseId: mongoose.Types.ObjectId
) => {
  try {
    const course = await Course.findOne({
      _id: courseId,
      users: userId,
    });

    if (!course) {
      throw new CustomError("Bạn chưa đăng ký khóa học này.", 409);
    }

    await Promise.all([
      Course.updateOne({ _id: courseId }, { $pull: { users: userId } }),
      User.updateOne({ _id: userId }, { $pull: { courses: courseId } }),
    ]);

    return {
      success: true,
      message: "Hủy đăng ký khóa học thành công",
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }

    throw new Error("Có lỗi khi hủy đăng ký khóa học.");
  }
};
