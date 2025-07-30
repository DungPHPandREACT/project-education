import express from 'express';
import {
	loginUser,
	refresh,
	registerUser,
} from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh', refresh);

export default router;
