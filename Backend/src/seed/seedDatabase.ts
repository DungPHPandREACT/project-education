import mongoose from 'mongoose';
import config from '../config/config';

// Import models
import Category from '../modules/category/models/category.model';
import Course from '../modules/course/models/course.model';
import Discussion from '../modules/discussion/models/discussion.model';
import Lesson from '../modules/lesson/models/lesson.model';
import Question from '../modules/question/models/question.model';
import Quiz from '../modules/quizz/models/quizz.model';
import Review from '../modules/review/models/review.model';
import Schedule from '../modules/schedule/models/schedule.model';
import User from '../modules/user/models/user.model';
import UsersQuizzes from '../modules/users_quizzes/models/users_quizzes.model';

// Import seed data
import categoriesData from './categories.json';
import coursesData from './courses.json';
import discussionsData from './discussions.json';
import lessonsData from './lessons.json';
import questionsData from './questions.json';
import quizzesData from './quizzes.json';
import reviewsData from './reviews.json';
import schedulesData from './schedules.json';
import usersData from './users.json';
import usersQuizzesData from './usersquizzes.json';

const seedDatabase = async () => {
	try {
		// Connect to MongoDB
		await mongoose.connect(config.MONGODB_URI);
		console.log('Connected to MongoDB');

		// Clear existing data
		console.log('Clearing existing data...');
		await User.deleteMany({});
		await Category.deleteMany({});
		await Course.deleteMany({});
		await Lesson.deleteMany({});
		await Quiz.deleteMany({});
		await Question.deleteMany({});
		await Review.deleteMany({});
		await Discussion.deleteMany({});
		await Schedule.deleteMany({});
		await UsersQuizzes.deleteMany({});

		// Seed data in order (due to dependencies)
		console.log('Seeding users...');
		await User.insertMany(usersData);

		console.log('Seeding categories...');
		await Category.insertMany(categoriesData);

		console.log('Seeding courses...');
		await Course.insertMany(coursesData);

		console.log('Seeding lessons...');
		await Lesson.insertMany(lessonsData);

		console.log('Seeding quizzes...');
		await Quiz.insertMany(quizzesData);

		console.log('Seeding questions...');
		await Question.insertMany(questionsData);

		console.log('Seeding reviews...');
		await Review.insertMany(reviewsData);

		console.log('Seeding discussions...');
		await Discussion.insertMany(discussionsData);

		console.log('Seeding schedules...');
		await Schedule.insertMany(schedulesData);

		console.log('Seeding users quizzes...');
		await UsersQuizzes.insertMany(usersQuizzesData);

		console.log('Database seeded successfully!');

		// Display statistics
		const stats = {
			users: await User.countDocuments(),
			categories: await Category.countDocuments(),
			courses: await Course.countDocuments(),
			lessons: await Lesson.countDocuments(),
			quizzes: await Quiz.countDocuments(),
			questions: await Question.countDocuments(),
			reviews: await Review.countDocuments(),
			discussions: await Discussion.countDocuments(),
			schedules: await Schedule.countDocuments(),
			usersQuizzes: await UsersQuizzes.countDocuments(),
		};

		console.log('\n=== Database Statistics ===');
		Object.entries(stats).forEach(([key, value]) => {
			console.log(`${key}: ${value} records`);
		});
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await mongoose.disconnect();
		console.log('Disconnected from MongoDB');
		process.exit(0);
	}
};

// Run the seed function
seedDatabase();
