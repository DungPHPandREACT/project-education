
import { RequestCustom } from "../../../types/express.type";

import { Response, NextFunction } from "express";
import User from "../models/user.model";

export const getAllStudents = async (
  req: RequestCustom,
  res: Response
) => {
  try {
    const students = await User.find({ role: "student" })
      .select("-password -__v")
      .populate("courses", "title");

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCurrentUser = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      res.status(401).json({
        message: "Không tìm thấy thông tin người dùng",
      });
      return;
    }

    const user = await User.findById(userId)
      .select("-password -__v")
      .populate({
        path: "courses",
        select: "title instructorId",
        populate: {
          path: "instructorId",
          select: "fullName",
        },
      });

    if (!user) {
      res.status(404).json({
        message: "Không tìm thấy người dùng",
        solution: "1. Kiểm tra token 2. Xác minh người dùng tồn tại trong DB",
      });
      return;
    }

    res.status(200).json({
      message: "Lấy thông tin người dùng thành công",
      data: {
        ...user.toObject(),
        lastAccessed: new Date(),
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã có lỗi xảy ra",
      error: error instanceof Error ? error.message : "Unknown error",
      debug: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};