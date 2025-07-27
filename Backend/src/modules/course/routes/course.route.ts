import express from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import { optionalAuthMiddleware } from '../../../middleware/optional-auth.middleware';
import roleMiddleware from '../../../middleware/role.middleware';
import {
	handleCreateCourse,
	handleDeleteCourse,
	handleEnrollCourse,
	handleGetAllCourses,
	handleGetCourseById,
	handleGetCoursesByCategory,
	handleGetCoursesByMe,
	handleGetPopularCourses,
	handleGetPopularCoursesSortedByReviews,
	handleUnenrollCourse,
	handleUpdateCourse,
} from '../controllers/course.controller';

const router = express.Router();
router.get(
	'/me',
	authMiddleware,
	roleMiddleware(['student']),
	handleGetCoursesByMe
);
router.post(
	'/enroll/:id',
	authMiddleware,
	roleMiddleware(['student']),
	handleEnrollCourse
);
router.delete(
	'/unenroll/:id',
	authMiddleware,
	roleMiddleware(['student']),
	handleUnenrollCourse
);

router.post(
	'/',
	authMiddleware,
	roleMiddleware(['admin', 'teacher']),
	handleCreateCourse
);

router.put(
	'/:id',
	authMiddleware,
	roleMiddleware(['admin', 'teacher']),
	handleUpdateCourse
);
router.delete(
	'/:id',
	authMiddleware,
	roleMiddleware(['admin', 'teacher']),
	handleDeleteCourse
);
router.get('/category', handleGetCoursesByCategory);
router.get('/', handleGetAllCourses);
router.get('/popular', handleGetPopularCourses);
router.get('/popular-by-reviews', handleGetPopularCoursesSortedByReviews);
router.get('/:id', handleGetCourseById);
export default router;
