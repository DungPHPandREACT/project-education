import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { connectDB } from "../config/db";

// Import models
import Category from "../modules/category/models/category.model";
import User from "../modules/user/models/user.model";
import Course from "../modules/course/models/course.model";
import Lesson from "../modules/lesson/models/lesson.model";
import Quiz from "../modules/quizz/models/quizz.model";
import Question from "../modules/question/models/question.model";
import Review from "../modules/review/models/review.model";
import Discussion from "../modules/discussion/models/discussion.model";
import Notification from "../modules/notification/models/notification.model";
import Schedule from "../modules/schedule/models/schedule.model";
import UsersQuizzes from "../modules/users_quizzes/models/users_quizzes.model";

const seedData = async () => {
  try {
    // Kết nối database
    await connectDB();
    console.log("🔗 Đã kết nối database");

    // Xóa dữ liệu cũ
    await Promise.all([
      Category.deleteMany({}),
      User.deleteMany({}),
      Course.deleteMany({}),
      Lesson.deleteMany({}),
      Quiz.deleteMany({}),
      Question.deleteMany({}),
      Review.deleteMany({}),
      Discussion.deleteMany({}),
      Notification.deleteMany({}),
      Schedule.deleteMany({}),
      UsersQuizzes.deleteMany({}),
    ]);
    console.log("🧹 Đã xóa dữ liệu cũ");

    // 1. Seed Categories
    const categories = await Category.insertMany([
      {
        title: "Lập trình Web",
        description: "Các khóa học về phát triển web frontend và backend",
      },
      {
        title: "Khoa học dữ liệu",
        description: "Machine learning, AI và phân tích dữ liệu",
      },
      {
        title: "Thiết kế UI/UX",
        description: "Thiết kế giao diện người dùng và trải nghiệm người dùng",
      },
      {
        title: "Mobile Development",
        description: "Phát triển ứng dụng di động iOS và Android",
      },
      {
        title: "DevOps",
        description: "Triển khai, quản lý hệ thống và CI/CD",
      },
      {
        title: "Blockchain",
        description: "Công nghệ blockchain và smart contracts",
      },
    ]);
    console.log("✅ Đã seed Categories");

    // 2. Seed Users
    const hashedPassword = await bcrypt.hash("123456", 12);

    const users = await User.insertMany([
      // Admin
      {
        email: "admin@edutech.vn",
        password: hashedPassword,
        fullName: "Quản trị viên hệ thống",
        role: "admin",
        avatar: "https://i.pravatar.cc/400?img=1",
      },
      // Teachers
      {
        email: "nguyenvana@edutech.vn",
        password: hashedPassword,
        fullName: "Nguyễn Văn An",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=2",
      },
      {
        email: "lethib@edutech.vn",
        password: hashedPassword,
        fullName: "Lê Thị Bình",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=3",
      },
      {
        email: "tranvanc@edutech.vn",
        password: hashedPassword,
        fullName: "Trần Văn Cường",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=4",
      },
      {
        email: "phamthid@edutech.vn",
        password: hashedPassword,
        fullName: "Phạm Thị Dung",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=5",
      },
      {
        email: "hoangvane@edutech.vn",
        password: hashedPassword,
        fullName: "Hoàng Văn Em",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=6",
      },
      // Students
      {
        email: "student1@gmail.com",
        password: hashedPassword,
        fullName: "Nguyễn Thị Hoa",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=10",
      },
      {
        email: "student2@gmail.com",
        password: hashedPassword,
        fullName: "Trần Văn Minh",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=11",
      },
      {
        email: "student3@gmail.com",
        password: hashedPassword,
        fullName: "Lê Thị Lan",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=12",
      },
      {
        email: "student4@gmail.com",
        password: hashedPassword,
        fullName: "Phạm Văn Nam",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=13",
      },
      {
        email: "student5@gmail.com",
        password: hashedPassword,
        fullName: "Vũ Thị Oanh",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=14",
      },
      {
        email: "student6@gmail.com",
        password: hashedPassword,
        fullName: "Đặng Văn Phúc",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=15",
      },
    ]);
    console.log("✅ Đã seed Users");

    // Lấy teachers và students
    const teachers = users.filter((user) => user.role === "teacher");
    const students = users.filter((user) => user.role === "student");

    // 3. Seed Courses
    const courses = await Course.insertMany([
      {
        title: "React.js Từ Cơ Bản Đến Nâng Cao",
        description:
          "Khóa học toàn diện về React.js, từ những khái niệm cơ bản đến các kỹ thuật nâng cao. Bạn sẽ học cách xây dựng ứng dụng web hiện đại với React.",
        instructorId: teachers[0]._id,
        category: "Lập trình Web",
        users: [students[0]._id, students[1]._id, students[2]._id],
        resources: [
          "https://reactjs.org/docs",
          "https://github.com/facebook/react",
          "React Developer Tools",
        ],
      },
      {
        title: "Python cho Khoa Học Dữ Liệu",
        description:
          "Học Python từ đầu với focus vào data science. Khóa học bao gồm pandas, numpy, matplotlib và machine learning cơ bản.",
        instructorId: teachers[1]._id,
        category: "Khoa học dữ liệu",
        users: [students[1]._id, students[2]._id, students[3]._id],
        resources: [
          "https://pandas.pydata.org/",
          "https://numpy.org/",
          "Jupyter Notebook",
        ],
      },
      {
        title: "Thiết kế UI/UX với Figma",
        description:
          "Khóa học thiết kế giao diện người dùng chuyên nghiệp với Figma. Từ wireframe đến prototype hoàn chỉnh.",
        instructorId: teachers[2]._id,
        category: "Thiết kế UI/UX",
        users: [students[0]._id, students[3]._id, students[4]._id],
        resources: [
          "https://figma.com",
          "Material Design Guidelines",
          "Apple Human Interface Guidelines",
        ],
      },
      {
        title: "Flutter - Phát triển App di động",
        description:
          "Xây dựng ứng dụng di động cho cả iOS và Android với Flutter. Từ cơ bản đến deploy lên store.",
        instructorId: teachers[3]._id,
        category: "Mobile Development",
        users: [students[2]._id, students[4]._id, students[5]._id],
        resources: [
          "https://flutter.dev/",
          "Dart Language Tour",
          "Firebase Documentation",
        ],
      },
      {
        title: "DevOps với Docker và Kubernetes",
        description:
          "Học cách containerize ứng dụng với Docker và orchestration với Kubernetes. Bao gồm CI/CD pipeline.",
        instructorId: teachers[4]._id,
        category: "DevOps",
        users: [students[1]._id, students[4]._id, students[5]._id],
        resources: [
          "https://docs.docker.com/",
          "https://kubernetes.io/docs/",
          "Jenkins Documentation",
        ],
      },
      {
        title: "Blockchain và Smart Contracts",
        description:
          "Tìm hiểu công nghệ blockchain, phát triển smart contracts với Solidity và xây dựng DApps.",
        instructorId: teachers[0]._id,
        category: "Blockchain",
        users: [students[0]._id, students[2]._id, students[5]._id],
        resources: [
          "https://ethereum.org/",
          "Solidity Documentation",
          "Web3.js Guide",
        ],
      },
    ]);
    console.log("✅ Đã seed Courses");

    // 4. Seed Lessons
    const lessons = [];

    // Lessons cho React.js course
    const reactLessons = await Lesson.insertMany([
      {
        title: "Giới thiệu về React.js",
        content:
          "React là một thư viện JavaScript để xây dựng giao diện người dùng. Trong bài học này, chúng ta sẽ tìm hiểu về lịch sử, ưu điểm và cách cài đặt React.",
        courseId: courses[0]._id,
        resources: ["Create React App", "Node.js và npm"],
      },
      {
        title: "JSX và Components",
        content:
          "JSX là cú pháp mở rộng của JavaScript cho phép viết HTML trong JavaScript. Components là khối xây dựng cơ bản của React.",
        courseId: courses[0]._id,
        resources: ["JSX In Depth", "Thinking in React"],
      },
      {
        title: "State và Props",
        content:
          "State và Props là hai khái niệm quan trọng trong React. State quản lý dữ liệu nội bộ, Props truyền dữ liệu giữa components.",
        courseId: courses[0]._id,
        resources: ["State and Lifecycle", "Props vs State"],
      },
      {
        title: "Event Handling",
        content:
          "Xử lý sự kiện trong React khác một chút so với DOM thuần. Tìm hiểu SyntheticEvent và cách bind methods.",
        courseId: courses[0]._id,
        resources: ["Handling Events", "SyntheticEvent"],
      },
    ]);

    // Lessons cho Python Data Science course
    const pythonLessons = await Lesson.insertMany([
      {
        title: "Python Cơ Bản cho Data Science",
        content:
          "Tổng quan về Python, cài đặt môi trường, và các library quan trọng trong data science.",
        courseId: courses[1]._id,
        resources: ["Python.org", "Anaconda Distribution"],
      },
      {
        title: "NumPy - Xử lý mảng số",
        content:
          "NumPy là thư viện cơ bản cho tính toán khoa học trong Python. Học cách làm việc với arrays và matrices.",
        courseId: courses[1]._id,
        resources: ["NumPy Quickstart", "Array Broadcasting"],
      },
      {
        title: "Pandas - Phân tích dữ liệu",
        content:
          "Pandas cung cấp cấu trúc dữ liệu và công cụ phân tích mạnh mẽ. DataFrame và Series là hai khái niệm chính.",
        courseId: courses[1]._id,
        resources: ["10 Minutes to Pandas", "Pandas Cookbook"],
      },
    ]);

    lessons.push(...reactLessons, ...pythonLessons);
    console.log("✅ Đã seed Lessons");

    // 5. Seed Quizzes
    const quizzes = await Quiz.insertMany([
      {
        title: "Kiểm tra React.js Cơ Bản",
        description: "Đánh giá kiến thức cơ bản về React.js, JSX và Components",
        courseId: courses[0]._id,
        duration: 30,
        level: 1,
        category: categories[0]._id,
      },
      {
        title: "Python NumPy Quiz",
        description: "Kiểm tra hiểu biết về NumPy arrays và operations",
        courseId: courses[1]._id,
        duration: 25,
        level: 2,
        category: categories[1]._id,
      },
      {
        title: "UI/UX Design Principles",
        description: "Đánh giá kiến thức về nguyên tắc thiết kế UI/UX",
        courseId: courses[2]._id,
        duration: 20,
        level: 1,
        category: categories[2]._id,
      },
    ]);
    console.log("✅ Đã seed Quizzes");

    // 6. Seed Questions
    const questions = await Question.insertMany([
      // Questions cho React quiz
      {
        questionText: "JSX là viết tắt của gì?",
        answers: [
          { answerText: "JavaScript XML", isCorrect: true },
          { answerText: "Java Syntax Extension", isCorrect: false },
          { answerText: "JavaScript eXtension", isCorrect: false },
          { answerText: "JSON XML", isCorrect: false },
        ],
        quizId: [quizzes[0]._id],
        questionType: ["single_choice"],
      },
      {
        questionText: "Component nào sau đây là functional component?",
        answers: [
          {
            answerText: "class MyComponent extends React.Component",
            isCorrect: false,
          },
          {
            answerText: "function MyComponent() { return <div></div> }",
            isCorrect: true,
          },
          {
            answerText: "const MyComponent = React.createClass()",
            isCorrect: false,
          },
          {
            answerText: "var MyComponent = new React.Component()",
            isCorrect: false,
          },
        ],
        quizId: [quizzes[0]._id],
        questionType: ["single_choice"],
      },
      // Questions cho Python quiz
      {
        questionText: "NumPy array có ưu điểm gì so với Python list?",
        answers: [
          { answerText: "Nhanh hơn trong tính toán", isCorrect: true },
          { answerText: "Tiết kiệm bộ nhớ hơn", isCorrect: true },
          { answerText: "Hỗ trợ vectorization", isCorrect: true },
          { answerText: "Dễ sử dụng hơn", isCorrect: false },
        ],
        quizId: [quizzes[1]._id],
        questionType: ["multiple_choice"],
      },
      // Questions cho UI/UX quiz
      {
        questionText: "Nguyên tắc nào quan trọng nhất trong thiết kế UI?",
        answers: [
          { answerText: "Consistency (Tính nhất quán)", isCorrect: true },
          { answerText: "Màu sắc đẹp", isCorrect: false },
          { answerText: "Font chữ lạ", isCorrect: false },
          { answerText: "Hiệu ứng nhiều", isCorrect: false },
        ],
        quizId: [quizzes[2]._id],
        questionType: ["single_choice"],
      },
    ]);
    console.log("✅ Đã seed Questions");

    // Update quizzes with questions
    await Quiz.findByIdAndUpdate(quizzes[0]._id, {
      questions: questions
        .filter((q) => q.quizId[0].toString() === quizzes[0]._id.toString())
        .map((q) => q._id),
    });
    await Quiz.findByIdAndUpdate(quizzes[1]._id, {
      questions: questions
        .filter((q) => q.quizId[0].toString() === quizzes[1]._id.toString())
        .map((q) => q._id),
    });
    await Quiz.findByIdAndUpdate(quizzes[2]._id, {
      questions: questions
        .filter((q) => q.quizId[0].toString() === quizzes[2]._id.toString())
        .map((q) => q._id),
    });

    // Update courses with lessons and quizzes
    await Course.findByIdAndUpdate(courses[0]._id, {
      lessons: reactLessons.map((l) => l._id),
      quizzes: [quizzes[0]._id],
    });
    await Course.findByIdAndUpdate(courses[1]._id, {
      lessons: pythonLessons.map((l) => l._id),
      quizzes: [quizzes[1]._id],
    });
    await Course.findByIdAndUpdate(courses[2]._id, {
      quizzes: [quizzes[2]._id],
    });

    // 7. Seed Reviews
    await Review.insertMany([
      {
        courseId: courses[0]._id,
        userId: students[0]._id,
        rating: 5,
        comment:
          "Khóa học rất hay! Giảng viên giải thích rất rõ ràng và dễ hiểu. Tôi đã học được rất nhiều về React.",
      },
      {
        courseId: courses[0]._id,
        userId: students[1]._id,
        rating: 4,
        comment:
          "Nội dung khóa học chất lượng, các ví dụ thực tế. Tuy nhiên có một số phần hơi khó hiểu.",
      },
      {
        courseId: courses[1]._id,
        userId: students[2]._id,
        rating: 5,
        comment:
          "Tuyệt vời! Từ không biết gì về Python đến có thể làm được data analysis cơ bản.",
      },
      {
        courseId: courses[2]._id,
        userId: students[3]._id,
        rating: 4,
        comment:
          "Khóa học thiết kế UI/UX rất bổ ích. Tôi đã hiểu được nhiều nguyên tắc thiết kế quan trọng.",
      },
    ]);
    console.log("✅ Đã seed Reviews");

    // 8. Seed Discussions
    await Discussion.insertMany([
      {
        courseId: courses[0]._id,
        userId: students[0]._id,
        question:
          "Khi nào nên sử dụng class component và khi nào nên sử dụng functional component?",
        answers: [
          {
            userId: teachers[0]._id,
            answer:
              "Hiện tại với React Hooks, functional component được khuyến khích sử dụng hơn. Class component chỉ cần thiết trong một số trường hợp đặc biệt như error boundaries.",
          },
          {
            userId: students[1]._id,
            answer:
              "Mình cũng đang thắc mắc về điều này. Cảm ơn thầy đã giải đáp!",
          },
        ],
        isClose: false,
      },
      {
        courseId: courses[1]._id,
        userId: students[2]._id,
        question: "Làm thế nào để xử lý missing data trong pandas?",
        answers: [
          {
            userId: teachers[1]._id,
            answer:
              "Có nhiều cách: dropna() để loại bỏ, fillna() để điền giá trị, hoặc interpolate() cho interpolation. Tùy thuộc vào từng trường hợp cụ thể.",
          },
        ],
        isClose: false,
      },
    ]);
    console.log("✅ Đã seed Discussions");

    // 9. Seed Notifications
    await Notification.insertMany([
      {
        userId: students[0]._id,
        message:
          "Chào mừng bạn đến với EduTech! Hãy bắt đầu học tập ngay hôm nay.",
        type: "welcome",
        seen: false,
      },
      {
        userId: students[0]._id,
        message: "Bạn có một bài quiz mới trong khóa học React.js",
        type: "quiz",
        seen: false,
      },
      {
        userId: students[1]._id,
        message:
          "Giảng viên đã trả lời câu hỏi của bạn trong diễn đàn thảo luận",
        type: "discussion",
        seen: true,
      },
      {
        userId: teachers[0]._id,
        message: "Bạn có học viên mới đăng ký khóa học React.js",
        type: "course",
        seen: false,
      },
    ]);
    console.log("✅ Đã seed Notifications");

    // 10. Seed Schedules
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    await Schedule.insertMany([
      {
        userCreated: teachers[0]._id,
        usersJoin: [
          { userId: students[0]._id, status: "confirmed" },
          { userId: students[1]._id, status: "pending" },
          { userId: students[2]._id, status: "confirmed" },
        ],
        type: "online_class",
        link: "https://meet.google.com/abc-def-ghi",
        timeStart: tomorrow,
        timeEnd: new Date(tomorrow.getTime() + 2 * 60 * 60 * 1000), // 2 hours later
      },
      {
        userCreated: teachers[1]._id,
        usersJoin: [
          { userId: students[1]._id, status: "confirmed" },
          { userId: students[2]._id, status: "confirmed" },
          { userId: students[3]._id, status: "declined" },
        ],
        type: "consultation",
        link: "https://zoom.us/j/1234567890",
        timeStart: nextWeek,
        timeEnd: new Date(nextWeek.getTime() + 1 * 60 * 60 * 1000), // 1 hour later
      },
    ]);
    console.log("✅ Đã seed Schedules");

    // 11. Seed UsersQuizzes (Quiz Results)
    await UsersQuizzes.insertMany([
      {
        userId: students[0]._id,
        quizId: quizzes[0]._id,
        answers: [
          { questionId: questions[0]._id, answer: "JavaScript XML" },
          {
            questionId: questions[1]._id,
            answer: "function MyComponent() { return <div></div> }",
          },
        ],
        score: 100,
        feedback: "Xuất sắc! Bạn đã nắm vững kiến thức cơ bản về React.js.",
      },
      {
        userId: students[1]._id,
        quizId: quizzes[0]._id,
        answers: [
          { questionId: questions[0]._id, answer: "JavaScript eXtension" },
          {
            questionId: questions[1]._id,
            answer: "function MyComponent() { return <div></div> }",
          },
        ],
        score: 50,
        feedback: "Tốt! Tuy nhiên bạn cần ôn lại một số khái niệm cơ bản.",
      },
      {
        userId: students[2]._id,
        quizId: quizzes[1]._id,
        answers: [
          {
            questionId: questions[2]._id,
            answer:
              "Nhanh hơn trong tính toán,Tiết kiệm bộ nhớ hơn,Hỗ trợ vectorization",
          },
        ],
        score: 100,
        feedback: "Tuyệt vời! Bạn hiểu rõ ưu điểm của NumPy.",
      },
    ]);
    console.log("✅ Đã seed UsersQuizzes");

    console.log("\n🎉 SEED DATA HOÀN THÀNH!");
    console.log("📊 Thống kê dữ liệu đã tạo:");
    console.log(`- Categories: ${categories.length}`);
    console.log(
      `- Users: ${users.length} (${teachers.length} giảng viên, ${students.length} học viên, 1 admin)`
    );
    console.log(`- Courses: ${courses.length}`);
    console.log(`- Lessons: ${lessons.length}`);
    console.log(`- Quizzes: ${quizzes.length}`);
    console.log(`- Questions: ${questions.length}`);
    console.log(`- Reviews: 4`);
    console.log(`- Discussions: 2`);
    console.log(`- Notifications: 4`);
    console.log(`- Schedules: 2`);
    console.log(`- Quiz Results: 3`);

    console.log("\n🔐 Thông tin đăng nhập:");
    console.log("Admin: admin@edutech.vn / 123456");
    console.log("Giảng viên: nguyenvana@edutech.vn / 123456");
    console.log("Học viên: student1@gmail.com / 123456");
  } catch (error) {
    console.error("❌ Lỗi khi seed data:", error);
  } finally {
    await mongoose.connection.close();
    console.log("🔚 Đã đóng kết nối database");
    process.exit(0);
  }
};

// Chạy seed data
seedData();
