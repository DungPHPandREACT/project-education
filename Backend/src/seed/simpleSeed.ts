import mongoose from 'mongoose';
import config from '../config/config';

// Import models
import User from '../modules/user/models/user.model';
import Category from '../modules/category/models/category.model';
import Course from '../modules/course/models/course.model';
import Lesson from '../modules/lesson/models/lesson.model';
import Quiz from '../modules/quizz/models/quizz.model';
import Question from '../modules/question/models/question.model';
import Review from '../modules/review/models/review.model';
import Discussion from '../modules/discussion/models/discussion.model';
import Schedule from '../modules/schedule/models/schedule.model';
import UsersQuizzes from '../modules/users_quizzes/models/users_quizzes.model';

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

		// Create seed data with valid ObjectIds
		console.log('Creating seed data...');
		
		// Create users
		const users = [
			{
				email: "admin@example.com",
				password: "hashed_password",
				fullName: "Admin User",
				role: "admin",
				courses: [],
				avatar: "https://avatar.example.com/admin.png"
			},
			{
				email: "teacher1@example.com", 
				password: "hashed_password",
				fullName: "Giảng viên Nguyễn Văn A",
				role: "teacher",
				courses: [],
				avatar: "https://avatar.example.com/teacher1.png"
			},
			{
				email: "teacher2@example.com",
				password: "hashed_password", 
				fullName: "Giảng viên Trần Thị B",
				role: "teacher",
				courses: [],
				avatar: "https://avatar.example.com/teacher2.png"
			},
			{
				email: "student1@example.com",
				password: "hashed_password",
				fullName: "Học viên Lê Văn C", 
				role: "student",
				courses: [],
				avatar: "https://avatar.example.com/student1.png"
			},
			{
				email: "student2@example.com",
				password: "hashed_password",
				fullName: "Học viên Phạm Thị D",
				role: "student", 
				courses: [],
				avatar: "https://avatar.example.com/student2.png"
			},
			{
				email: "student3@example.com",
				password: "hashed_password",
				fullName: "Học viên Hoàng Văn E",
				role: "student", 
				courses: [],
				avatar: "https://avatar.example.com/student3.png"
			}
		];

		console.log('Seeding users...');
		const createdUsers = await User.insertMany(users);
		console.log(`✓ Created ${createdUsers.length} users`);

		// Create categories
		const categories = [
			{
				title: "Lập trình Web",
				description: "Các khóa học về phát triển web frontend và backend"
			},
			{
				title: "Lập trình Mobile", 
				description: "Các khóa học về phát triển ứng dụng di động"
			},
			{
				title: "Data Science",
				description: "Các khóa học về khoa học dữ liệu và machine learning"
			},
			{
				title: "DevOps",
				description: "Các khóa học về DevOps và cloud computing"
			}
		];

		console.log('Seeding categories...');
		const createdCategories = await Category.insertMany(categories);
		console.log(`✓ Created ${createdCategories.length} categories`);

		// Create courses
		const teacher1 = createdUsers.find(u => u.email === 'teacher1@example.com')!;
		const teacher2 = createdUsers.find(u => u.email === 'teacher2@example.com')!;
		const student1 = createdUsers.find(u => u.email === 'student1@example.com')!;
		const student2 = createdUsers.find(u => u.email === 'student2@example.com')!;

		const webCategory = createdCategories.find(c => c.title === 'Lập trình Web')!;
		const dataCategory = createdCategories.find(c => c.title === 'Data Science')!;

		const courses = [
			{
				title: "Khóa học JavaScript cơ bản",
				description: "Học JavaScript từ cơ bản đến nâng cao",
				instructorId: teacher1._id,
				lessons: [],
				resources: ["https://example.com/js-resource1", "https://example.com/js-resource2"],
				reviews: [],
				quizzes: [],
				category: webCategory.title,
				users: [student1._id, student2._id]
			},
			{
				title: "Khóa học React.js",
				description: "Xây dựng ứng dụng web với React.js",
				instructorId: teacher1._id,
				lessons: [],
				resources: ["https://example.com/react-resource1"],
				reviews: [],
				quizzes: [],
				category: webCategory.title, 
				users: [student1._id]
			},
			{
				title: "Khóa học Node.js",
				description: "Phát triển backend với Node.js",
				instructorId: teacher2._id,
				lessons: [],
				resources: ["https://example.com/node-resource1"],
				reviews: [],
				quizzes: [],
				category: webCategory.title,
				users: [student2._id]
			},
			{
				title: "Khóa học Python cơ bản",
				description: "Học Python từ cơ bản đến nâng cao",
				instructorId: teacher2._id,
				lessons: [],
				resources: ["https://example.com/python-resource1"],
				reviews: [],
				quizzes: [],
				category: dataCategory.title,
				users: []
			}
		];

		console.log('Seeding courses...');
		const createdCourses = await Course.insertMany(courses);
		console.log(`✓ Created ${createdCourses.length} courses`);

		// Update user courses
		await User.findByIdAndUpdate(student1._id, {
			courses: [createdCourses[0]._id, createdCourses[1]._id]
		});
		await User.findByIdAndUpdate(student2._id, {
			courses: [createdCourses[0]._id, createdCourses[2]._id]
		});

		// Create lessons
		const jsCourse = createdCourses.find(c => c.title.includes('JavaScript'))!;
		const reactCourse = createdCourses.find(c => c.title.includes('React'))!;
		const nodeCourse = createdCourses.find(c => c.title.includes('Node'))!;

		const lessons = [
			{
				title: "Giới thiệu về JavaScript",
				content: "Nội dung bài học về JavaScript cơ bản. JavaScript là ngôn ngữ lập trình phổ biến nhất hiện nay.",
				courseId: jsCourse._id,
				resources: ["https://example.com/lesson1-resource"]
			},
			{
				title: "Biến và kiểu dữ liệu",
				content: "Học về biến và các kiểu dữ liệu trong JavaScript: string, number, boolean, object, array.",
				courseId: jsCourse._id,
				resources: ["https://example.com/lesson2-resource"]
			},
			{
				title: "Hàm trong JavaScript",
				content: "Tìm hiểu về cách khai báo và sử dụng hàm trong JavaScript.",
				courseId: jsCourse._id,
				resources: ["https://example.com/lesson3-resource"]
			},
			{
				title: "Giới thiệu về React",
				content: "Nội dung bài học về React cơ bản. React là thư viện JavaScript để xây dựng giao diện người dùng.",
				courseId: reactCourse._id,
				resources: ["https://example.com/react-lesson1-resource"]
			},
			{
				title: "Components trong React",
				content: "Học cách tạo và sử dụng components trong React.",
				courseId: reactCourse._id,
				resources: ["https://example.com/react-lesson2-resource"]
			},
			{
				title: "Giới thiệu về Node.js",
				content: "Node.js là runtime environment cho JavaScript phía server.",
				courseId: nodeCourse._id,
				resources: ["https://example.com/node-lesson1-resource"]
			}
		];

		console.log('Seeding lessons...');
		const createdLessons = await Lesson.insertMany(lessons);
		console.log(`✓ Created ${createdLessons.length} lessons`);

		// Create quizzes
		const quizzes = [
			{
				title: "Quiz JavaScript cơ bản",
				description: "Kiểm tra kiến thức JavaScript cơ bản",
				courseId: jsCourse._id,
				questions: [],
				duration: 30,
				level: 1,
				category: webCategory._id
			},
			{
				title: "Quiz React cơ bản",
				description: "Kiểm tra kiến thức React cơ bản",
				courseId: reactCourse._id,
				questions: [],
				duration: 25,
				level: 2,
				category: webCategory._id
			}
		];

		console.log('Seeding quizzes...');
		const createdQuizzes = await Quiz.insertMany(quizzes);
		console.log(`✓ Created ${createdQuizzes.length} quizzes`);

		// Create questions
		const jsQuiz = createdQuizzes.find(q => q.title.includes('JavaScript'))!;
		const reactQuiz = createdQuizzes.find(q => q.title.includes('React'))!;

		const questions = [
			{
				questionText: "JavaScript là gì?",
				answers: [
					{ answerText: "Ngôn ngữ lập trình", isCorrect: true },
					{ answerText: "Thư viện CSS", isCorrect: false },
					{ answerText: "Framework PHP", isCorrect: false },
					{ answerText: "Database", isCorrect: false }
				],
				quizId: jsQuiz._id,
				questionType: ["single_choice"]
			},
			{
				questionText: "Cách khai báo biến trong JavaScript?",
				answers: [
					{ answerText: "var myVar", isCorrect: false },
					{ answerText: "let myVar", isCorrect: false },
					{ answerText: "const myVar", isCorrect: false },
					{ answerText: "Tất cả đều đúng", isCorrect: true }
				],
				quizId: jsQuiz._id,
				questionType: ["single_choice"]
			},
			{
				questionText: "React được phát triển bởi?",
				answers: [
					{ answerText: "Google", isCorrect: false },
					{ answerText: "Facebook", isCorrect: true },
					{ answerText: "Microsoft", isCorrect: false },
					{ answerText: "Apple", isCorrect: false }
				],
				quizId: reactQuiz._id,
				questionType: ["single_choice"]
			}
		];

		console.log('Seeding questions...');
		const createdQuestions = await Question.insertMany(questions);
		console.log(`✓ Created ${createdQuestions.length} questions`);

		// Create reviews
		const reviews = [
			{
				courseId: jsCourse._id,
				userId: student1._id,
				rating: 5,
				comment: "Khóa học rất hay và bổ ích. Giảng viên dạy rất dễ hiểu."
			},
			{
				courseId: reactCourse._id,
				userId: student1._id,
				rating: 4,
				comment: "Nội dung khóa học phong phú, tuy nhiên cần thêm bài tập thực hành."
			},
			{
				courseId: nodeCourse._id,
				userId: student2._id,
				rating: 5,
				comment: "Tuyệt vời! Đây là khóa học tốt nhất tôi từng tham gia."
			}
		];

		console.log('Seeding reviews...');
		const createdReviews = await Review.insertMany(reviews);
		console.log(`✓ Created ${createdReviews.length} reviews`);

		// Create discussions
		const discussions = [
			{
				courseId: jsCourse._id,
				userId: student1._id,
				question: "Làm thế nào để tối ưu hóa performance của ứng dụng JavaScript?",
				answers: [
					{
						userId: teacher1._id,
						answer: "Bạn có thể sử dụng lazy loading, minify code, và optimize algorithms."
					}
				],
				isClose: false
			},
			{
				courseId: reactCourse._id,
				userId: student1._id,
				question: "Sự khác biệt giữa state và props trong React là gì?",
				answers: [
					{
						userId: teacher1._id,
						answer: "State là dữ liệu nội bộ của component, props là dữ liệu được truyền từ component cha."
					}
				],
				isClose: false
			}
		];

		console.log('Seeding discussions...');
		const createdDiscussions = await Discussion.insertMany(discussions);
		console.log(`✓ Created ${createdDiscussions.length} discussions`);

		// Create schedules
		const schedules = [
			{
				userCreated: teacher1._id,
				usersJoin: [
					{
						userId: student1._id,
						status: "confirmed"
					},
					{
						userId: student2._id,
						status: "pending"
					}
				],
				type: "online_meeting",
				link: "https://meet.google.com/abc-defg-hij",
				timeStart: new Date("2024-12-25T14:00:00.000Z"),
				timeEnd: new Date("2024-12-25T16:00:00.000Z")
			},
			{
				userCreated: teacher2._id,
				usersJoin: [
					{
						userId: student2._id,
						status: "confirmed"
					}
				],
				type: "consultation",
				link: "https://zoom.us/j/123456789",
				timeStart: new Date("2024-12-30T09:00:00.000Z"),
				timeEnd: new Date("2024-12-30T10:00:00.000Z")
			}
		];

		console.log('Seeding schedules...');
		const createdSchedules = await Schedule.insertMany(schedules);
		console.log(`✓ Created ${createdSchedules.length} schedules`);

		// Create users quizzes
		const usersQuizzes = [
			{
				userId: student1._id,
				quizId: jsQuiz._id,
				answers: [
					{
						questionId: createdQuestions[0]._id,
						answer: "Ngôn ngữ lập trình"
					},
					{
						questionId: createdQuestions[1]._id,
						answer: "Tất cả đều đúng"
					}
				],
				score: 100,
				feedback: "Xuất sắc! Bạn đã trả lời đúng tất cả các câu hỏi."
			},
			{
				userId: student1._id,
				quizId: reactQuiz._id,
				answers: [
					{
						questionId: createdQuestions[2]._id,
						answer: "Facebook"
					}
				],
				score: 100,
				feedback: "Hoàn hảo! Câu trả lời chính xác."
			}
		];

		console.log('Seeding users quizzes...');
		const createdUsersQuizzes = await UsersQuizzes.insertMany(usersQuizzes);
		console.log(`✓ Created ${createdUsersQuizzes.length} user quiz results`);

		console.log('\n🎉 Database seeded successfully!');
		
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