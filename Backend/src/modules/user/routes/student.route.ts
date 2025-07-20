import express from "express";

import { getAllStudents } from "../controllers/student.controller";
import { getCurrentUser } from "../controllers/student.controller";
import authMiddleware from "../../../middleware/auth.middleware";
import roleMiddleware from "../../../middleware/role.middleware";

const router = express.Router();


router.get(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  getAllStudents
);
router.get("/users/me", authMiddleware, getCurrentUser);

export default router;
