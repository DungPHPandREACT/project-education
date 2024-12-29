import express from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import roleMiddleware from '../../../middleware/role.middleware';
import {
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory,
} from '../controllers/category.controller';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', authMiddleware, roleMiddleware(['admin']), createCategory);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateCategory);
router.delete(
	'/:id',
	authMiddleware,
	roleMiddleware(['admin']),
	deleteCategory
);


export default router;