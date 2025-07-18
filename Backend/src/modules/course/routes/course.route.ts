import express from "express";
import {
  handleCreateCourse,
  handleGetAllCourses,
  handleGetCourseById,
  handleUpdateCourse,
  handleDeleteCourse,
  handleGetCoursesByCategory,
  handleGetCoursesByMe,
} from "../controllers/course.controller";
import authMiddleware from "../../../middleware/auth.middleware";

const router = express.Router();
router.get("/me", authMiddleware, handleGetCoursesByMe);

router.post("/", handleCreateCourse);
router.get("/category", handleGetCoursesByCategory);
router.get("/", handleGetAllCourses);
router.get("/:id", handleGetCourseById);
router.put("/:id", handleUpdateCourse);
router.delete("/:id", handleDeleteCourse);

export default router;
