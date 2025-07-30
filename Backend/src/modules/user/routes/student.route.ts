import express from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import roleMiddleware from '../../../middleware/role.middleware';
import { getAllStudents } from '../controllers/student.controller';

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware(['admin']), getAllStudents);

export default router;
