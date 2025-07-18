import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { RequestCustom } from "../types/express.type";
import { UserPayload } from "../types/user.type";

const authMiddleware = (
  req: RequestCustom,
  res: Response,
  next: NextFunction
): any => {
  console.log("start");

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Vui lòng đăng nhập để thực hiện chức năng này",
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);

    console.log("decoded: ", decoded);
    req.user = decoded as UserPayload;
    next();
  } catch (error) {
    console.log("error: ", error);
    return res.status(403).json({
      message: "Token không hợp lệ",
    });
  }
};

export default authMiddleware;
