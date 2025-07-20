import { RequestCustom } from "../../../types/express.type";
import { Response, NextFunction } from "express";
import User from "../models/user.model";
import Course from "../../course/models/course.model";


// controllers/teacher.controller.ts
export const getAllTeachers = async (
  req: RequestCustom,
  res: Response
) => {
  try {
    const teachers = await User.find({ role: 'teacher' })
      .select('-password -__v')
      .populate('courses', 'title');
    
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTeacherCourses = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    const courses = await Course.find({ instructorId: req.params.id });
    res.json(courses);
  } catch (error) {
    next(error);
  }
};
export const getTopTeachers = async (
  req: RequestCustom,
  res: Response
) => {
  try {
    const limit = parseInt(req.query.limit as string) || 3;
    const page = parseInt(req.query.page as string) || 1;

    const result = await User.aggregate([
      { $match: { role: "teacher" } },
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "instructorId",
          as: "teachingCourses",
        },
      },
      {
        $project: {
          fullName: 1,
          email: 1,
          avatar: 1,
          courseCount: { $size: "$teachingCourses" },
        },
      },
      { $sort: { courseCount: -1 } },
      { $skip: (page - 1) * limit },
      { $limit: limit },
    ]);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};