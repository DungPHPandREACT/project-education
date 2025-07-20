import express from "express";
import { getSystemStats } from "../controllers/system.controller";
import {
  getAllTeachers,
  getTopTeachers,
} from "../controllers/teacher.controller";
import { getAllStudents } from "../controllers/student.controller";
import { getCurrentUser } from "../controllers/student.controller";
import authMiddleware from "../../../middleware/auth.middleware";
import roleMiddleware from "../../../middleware/role.middleware";

const router = express.Router();

// Public
router.get("/stats", getSystemStats);

// Protected
router.get("/", authMiddleware, getAllTeachers);
router.get("/top", authMiddleware, getTopTeachers);


export default router;
