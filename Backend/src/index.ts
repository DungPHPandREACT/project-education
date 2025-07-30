import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import config from './config/config';
import connectDB from './config/db';
import categoryRoutes from './modules/category/routes/category.route';
import courseRoutes from './modules/course/routes/course.route';
import discussionRoutes from './modules/discussion/routes/discussion.route';
import lessonRoutes from './modules/lesson/routes/lesson.route';
import questionRoutes from './modules/question/routes/question.route';
import quizzRoutes from './modules/quizz/routes/quizz.route';
import reviewRoutes from './modules/review/routes/review.route';
import scheduleRoutes from './modules/schedule/routes/schedule.route';
import authRoutes from './modules/user/routes/auth.route';
import studentRoutes from './modules/user/routes/student.route';
import teacherRoutes from './modules/user/routes/teacher.route';
import usersQuizzesRoutes from './modules/users_quizzes/routes/users_quizzes.route';

const app = express();
const apiRouter = express.Router();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

// Đăng ký các routes với apiRouter
apiRouter.use('/auth', authRoutes);
apiRouter.use('/teachers', teacherRoutes);
apiRouter.use('/students', studentRoutes);
apiRouter.use('/categories', categoryRoutes);
apiRouter.use('/quizzes', quizzRoutes);
apiRouter.use('/courses', courseRoutes);
apiRouter.use('/lessons', lessonRoutes);
apiRouter.use('/reviews', reviewRoutes);
apiRouter.use('/schedules', scheduleRoutes);
apiRouter.use('/discussions', discussionRoutes);
apiRouter.use('/users-quizzes', usersQuizzesRoutes);
apiRouter.use('/questions', questionRoutes);

// Áp dụng prefix global
app.use('/api', apiRouter);

const PORT = config.PORT;

app.listen(PORT, () => {
	console.log(`Server đang được chạy trên: ${PORT}`);
});
