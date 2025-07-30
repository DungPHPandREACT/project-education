import express from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import { getSystemStats } from '../controllers/system.controller';
import {
	getAllTeachers,
	getTopTeachers,
} from '../controllers/teacher.controller';

const router = express.Router();

// Public
router.get('/stats', getSystemStats);

// Protected
router.get('/', authMiddleware, getAllTeachers);
router.get('/top', getTopTeachers);

export default router;
