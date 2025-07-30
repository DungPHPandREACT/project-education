import express from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import {
	getCurrentUser,
	loginUser,
	refresh,
	registerUser,
} from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh', refresh);
router.get('/me', authMiddleware, getCurrentUser);

export default router;
