import mongoose from "mongoose";
import Course, { ICourse } from "../models/course.model";

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
    console.error("Error in getCoursesByCategory: ", error);
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
    console.error("Error in getCoursesByCategory: ", error);
    throw new Error("Có lỗi khi lấy danh sách khóa học.");
  }
};
