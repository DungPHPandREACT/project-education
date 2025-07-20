import express from "express";
import {
  handleCreateCourse,
  handleGetAllCourses,
  handleGetCourseById,
  handleUpdateCourse,
  handleDeleteCourse,
  handleGetPopularCoursesSortedByReviews,
  handleGetPopularCourses,
} from "../controllers/course.controller";
import { optionalAuthMiddleware } from "../../../middleware/optional-auth.middleware";

const router = express.Router();

router.post("/", handleCreateCourse);
router.get("/popular", handleGetPopularCourses);
router.get("/popular-by-reviews", handleGetPopularCoursesSortedByReviews);
router.get("/", handleGetAllCourses);
router.get("/:id", optionalAuthMiddleware, handleGetCourseById);
router.put("/:id", handleUpdateCourse);
router.delete("/:id", handleDeleteCourse);
export default router;
