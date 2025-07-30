
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
