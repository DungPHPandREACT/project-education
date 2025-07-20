
import { Request, Response } from "express";
import mongoose from "mongoose";
import { RequestCustom } from "../../../types/express.type";
import User from "../models/user.model";

export const getSystemStats = async (
  req: RequestCustom,
  res: Response
) => {
  try {
    const [students, teachers, courses, reviews] = await Promise.all([
      User.countDocuments({ role: "student" }),
      User.countDocuments({ role: "teacher" }),
      mongoose.model("Course").countDocuments(),
      mongoose.model("Review").countDocuments(),
    ]);

    res.json({
      totalStudents: students,
      totalTeachers: teachers,
      totalCourses: courses,
      totalReviews: reviews,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
