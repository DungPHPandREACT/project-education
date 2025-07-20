import express from "express";
import {
  handleCreateCourse,
  handleGetAllCourses,
  handleGetCourseById,
  handleUpdateCourse,
  handleDeleteCourse,
  handleGetCoursesByCategory,
  handleGetCoursesByMe,
  handleEnrollCourse,
  handleUnenrollCourse,
} from "../controllers/course.controller";
import authMiddleware from "../../../middleware/auth.middleware";
import roleMiddleware from "../../../middleware/role.middleware";

const router = express.Router();
router.get(
  "/me",
  authMiddleware,
  roleMiddleware(["student"]),
  handleGetCoursesByMe
);
router.post(
  "/enroll/:id",
  authMiddleware,
  roleMiddleware(["student"]),
  handleEnrollCourse
);
router.delete(
  "/unenroll/:id",
  authMiddleware,
  roleMiddleware(["student"]),
  handleUnenrollCourse
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  handleCreateCourse
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  handleUpdateCourse
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  handleDeleteCourse
);

router.get("/category", handleGetCoursesByCategory);
router.get("/", handleGetAllCourses);
router.get("/:id", handleGetCourseById);

export default router;
