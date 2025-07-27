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

const seedExtendedData = async () => {
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

    // 1. Seed Categories (9 categories)
    const categories = await Category.insertMany([
      {
        title: "Lập trình Web",
        description:
          "Các khóa học về phát triển web frontend và backend với React, Vue, Angular, Node.js",
      },
      {
        title: "Khoa học dữ liệu",
        description:
          "Machine learning, AI, phân tích dữ liệu với Python, R, TensorFlow",
      },
      {
        title: "Thiết kế UI/UX",
        description:
          "Thiết kế giao diện người dùng và trải nghiệm người dùng với Figma, Adobe XD",
      },
      {
        title: "Mobile Development",
        description:
          "Phát triển ứng dụng di động iOS, Android với Flutter, React Native, Swift",
      },
      {
        title: "DevOps & Cloud",
        description:
          "Triển khai, quản lý hệ thống với Docker, Kubernetes, AWS, Azure",
      },
      {
        title: "Blockchain & Web3",
        description:
          "Công nghệ blockchain, smart contracts, DeFi, NFT với Solidity, Web3.js",
      },
      {
        title: "Game Development",
        description: "Phát triển game với Unity, Unreal Engine, C#, C++",
      },
      {
        title: "Database & Big Data",
        description:
          "Cơ sở dữ liệu SQL, NoSQL, Big Data với MongoDB, PostgreSQL, Hadoop",
      },
      {
        title: "Cybersecurity",
        description: "Bảo mật thông tin, ethical hacking, penetration testing",
      },
    ]);
    console.log("✅ Đã seed Categories");

    // 2. Seed Users (20 users total)
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
      // Teachers (8 giảng viên)
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
      {
        email: "vuthif@edutech.vn",
        password: hashedPassword,
        fullName: "Vũ Thị Phương",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=7",
      },
      {
        email: "dangvang@edutech.vn",
        password: hashedPassword,
        fullName: "Đặng Văn Giang",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=8",
      },
      {
        email: "buithih@edutech.vn",
        password: hashedPassword,
        fullName: "Bùi Thị Hương",
        role: "teacher",
        avatar: "https://i.pravatar.cc/400?img=9",
      },
      // Students (11 học viên)
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
      {
        email: "student7@gmail.com",
        password: hashedPassword,
        fullName: "Ngô Thị Quyên",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=16",
      },
      {
        email: "student8@gmail.com",
        password: hashedPassword,
        fullName: "Lý Văn Sơn",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=17",
      },
      {
        email: "student9@gmail.com",
        password: hashedPassword,
        fullName: "Chu Thị Trang",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=18",
      },
      {
        email: "student10@gmail.com",
        password: hashedPassword,
        fullName: "Đinh Văn Uy",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=19",
      },
      {
        email: "student11@gmail.com",
        password: hashedPassword,
        fullName: "Võ Thị Vân",
        role: "student",
        avatar: "https://i.pravatar.cc/400?img=20",
      },
    ]);
    console.log("✅ Đã seed Users");

    // Lấy teachers và students
    const teachers = users.filter((user) => user.role === "teacher");
    const students = users.filter((user) => user.role === "student");

    // 3. Seed Courses (15 khóa học)
    const courses = await Course.insertMany([
      // Web Development (4 courses)
      {
        title: "React.js Từ Cơ Bản Đến Nâng Cao",
        description:
          "Khóa học toàn diện về React.js, từ những khái niệm cơ bản đến các kỹ thuật nâng cao. Bạn sẽ học cách xây dựng ứng dụng web hiện đại với React, Redux, Hooks và nhiều thư viện hữu ích khác.",
        instructorId: teachers[0]._id,
        category: "Lập trình Web",
        users: [
          students[0]._id,
          students[1]._id,
          students[2]._id,
          students[3]._id,
        ],
        resources: [
          "https://reactjs.org/docs",
          "https://github.com/facebook/react",
          "React Developer Tools",
        ],
      },
      {
        title: "Vue.js 3 & Composition API",
        description:
          "Học Vue.js 3 với Composition API mới, Pinia state management, và các best practices trong phát triển ứng dụng Vue hiện đại.",
        instructorId: teachers[0]._id,
        category: "Lập trình Web",
        users: [students[1]._id, students[4]._id, students[5]._id],
        resources: ["https://vuejs.org/", "Vue 3 Documentation", "Pinia Store"],
      },
      {
        title: "Node.js Backend Development",
        description:
          "Xây dựng RESTful API với Node.js, Express.js, MongoDB. Học về authentication, authorization, security và deployment.",
        instructorId: teachers[4]._id,
        category: "Lập trình Web",
        users: [
          students[0]._id,
          students[2]._id,
          students[6]._id,
          students[7]._id,
        ],
        resources: [
          "Node.js Documentation",
          "Express.js Guide",
          "MongoDB University",
        ],
      },
      {
        title: "Full Stack JavaScript MERN",
        description:
          "Khóa học full stack với MongoDB, Express.js, React.js và Node.js. Xây dựng ứng dụng web hoàn chỉnh từ A-Z.",
        instructorId: teachers[0]._id,
        category: "Lập trình Web",
        users: [students[3]._id, students[8]._id, students[9]._id],
        resources: ["MERN Stack Tutorial", "Git & GitHub", "Deployment Guide"],
      },

      // Data Science (3 courses)
      {
        title: "Python cho Khoa Học Dữ Liệu",
        description:
          "Học Python từ đầu với focus vào data science. Khóa học bao gồm pandas, numpy, matplotlib, seaborn và machine learning cơ bản với scikit-learn.",
        instructorId: teachers[1]._id,
        category: "Khoa học dữ liệu",
        users: [
          students[1]._id,
          students[2]._id,
          students[3]._id,
          students[10]._id,
        ],
        resources: [
          "https://pandas.pydata.org/",
          "https://numpy.org/",
          "Jupyter Notebook",
        ],
      },
      {
        title: "Machine Learning với TensorFlow",
        description:
          "Khóa học ML chuyên sâu với TensorFlow và Keras. Từ neural networks cơ bản đến deep learning và computer vision.",
        instructorId: teachers[1]._id,
        category: "Khoa học dữ liệu",
        users: [students[4]._id, students[5]._id, students[6]._id],
        resources: ["TensorFlow Documentation", "Keras Guide", "Google Colab"],
      },
      {
        title: "Data Visualization với Power BI",
        description:
          "Tạo dashboard và báo cáo tương tác với Power BI. Học cách kết nối dữ liệu, tạo measures và visualizations chuyên nghiệp.",
        instructorId: teachers[7]._id,
        category: "Khoa học dữ liệu",
        users: [students[7]._id, students[8]._id, students[9]._id],
        resources: ["Power BI Documentation", "DAX Functions", "Power Query"],
      },

      // UI/UX Design (2 courses)
      {
        title: "Thiết kế UI/UX với Figma",
        description:
          "Khóa học thiết kế giao diện người dùng chuyên nghiệp với Figma. Từ wireframe, prototype đến design system hoàn chỉnh.",
        instructorId: teachers[2]._id,
        category: "Thiết kế UI/UX",
        users: [
          students[0]._id,
          students[3]._id,
          students[4]._id,
          students[8]._id,
        ],
        resources: [
          "https://figma.com",
          "Material Design Guidelines",
          "Apple Human Interface Guidelines",
        ],
      },
      {
        title: "Adobe XD và Prototyping",
        description:
          "Học thiết kế UI/UX với Adobe XD, tạo prototype tương tác và hệ thống design components có thể tái sử dụng.",
        instructorId: teachers[2]._id,
        category: "Thiết kế UI/UX",
        users: [students[5]._id, students[7]._id, students[10]._id],
        resources: [
          "Adobe XD Tutorials",
          "Design Systems",
          "Interaction Design",
        ],
      },

      // Mobile Development (2 courses)
      {
        title: "Flutter - Phát triển App di động",
        description:
          "Xây dựng ứng dụng di động cho cả iOS và Android với Flutter. Từ cơ bản đến nâng cao, deploy lên store và monetization.",
        instructorId: teachers[3]._id,
        category: "Mobile Development",
        users: [
          students[2]._id,
          students[4]._id,
          students[5]._id,
          students[9]._id,
        ],
        resources: [
          "https://flutter.dev/",
          "Dart Language Tour",
          "Firebase Documentation",
        ],
      },
      {
        title: "React Native Cross-Platform",
        description:
          "Phát triển ứng dụng mobile với React Native. Navigation, state management, native modules và performance optimization.",
        instructorId: teachers[3]._id,
        category: "Mobile Development",
        users: [
          students[1]._id,
          students[6]._id,
          students[8]._id,
          students[10]._id,
        ],
        resources: ["React Native Docs", "Expo Documentation", "Metro Bundler"],
      },

      // DevOps & Cloud (2 courses)
      {
        title: "DevOps với Docker và Kubernetes",
        description:
          "Học cách containerize ứng dụng với Docker và orchestration với Kubernetes. Bao gồm CI/CD pipeline với Jenkins và GitLab.",
        instructorId: teachers[4]._id,
        category: "DevOps & Cloud",
        users: [
          students[1]._id,
          students[4]._id,
          students[5]._id,
          students[7]._id,
        ],
        resources: [
          "https://docs.docker.com/",
          "https://kubernetes.io/docs/",
          "Jenkins Documentation",
        ],
      },
      {
        title: "AWS Cloud Solutions Architect",
        description:
          "Thiết kế và triển khai solutions trên AWS. EC2, S3, RDS, Lambda, CloudFormation và security best practices.",
        instructorId: teachers[4]._id,
        category: "DevOps & Cloud",
        users: [
          students[0]._id,
          students[3]._id,
          students[6]._id,
          students[9]._id,
        ],
        resources: [
          "AWS Documentation",
          "Well-Architected Framework",
          "AWS CLI",
        ],
      },

      // Blockchain (1 course)
      {
        title: "Blockchain và Smart Contracts",
        description:
          "Tìm hiểu công nghệ blockchain, phát triển smart contracts với Solidity, xây dựng DApps và tương tác với Web3.",
        instructorId: teachers[5]._id,
        category: "Blockchain & Web3",
        users: [
          students[0]._id,
          students[2]._id,
          students[5]._id,
          students[8]._id,
        ],
        resources: [
          "https://ethereum.org/",
          "Solidity Documentation",
          "Web3.js Guide",
        ],
      },

      // Game Development (1 course)
      {
        title: "Unity Game Development 2D/3D",
        description:
          "Phát triển game 2D và 3D với Unity Engine. Từ game mechanics cơ bản đến publish lên các platform.",
        instructorId: teachers[6]._id,
        category: "Game Development",
        users: [
          students[3]._id,
          students[7]._id,
          students[9]._id,
          students[10]._id,
        ],
        resources: [
          "Unity Documentation",
          "C# Programming Guide",
          "Unity Asset Store",
        ],
      },
    ]);
    console.log("✅ Đã seed Courses");

    // 4. Seed Lessons (45 lessons total, 3 lessons per course)
    const allLessons = [];

    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      let lessons = [];

      if (course.title.includes("React.js")) {
        lessons = await Lesson.insertMany([
          {
            title: "Giới thiệu về React.js và Setup Environment",
            content:
              "React là một thư viện JavaScript được phát triển bởi Facebook để xây dựng giao diện người dùng. Trong bài học này, chúng ta sẽ tìm hiểu về lịch sử phát triển của React, so sánh với các framework khác như Angular và Vue.js, cũng như cách cài đặt và setup môi trường phát triển.",
            courseId: course._id,
            resources: [
              "Create React App",
              "Node.js và npm",
              "VS Code Extensions",
            ],
          },
          {
            title: "JSX và Components",
            content:
              "JSX (JavaScript XML) là cú pháp mở rộng của JavaScript cho phép viết HTML trong JavaScript một cách trực quan. Components là khối xây dựng cơ bản của React, có thể là function components hoặc class components. Chúng ta sẽ học cách tạo và sử dụng components hiệu quả.",
            courseId: course._id,
            resources: ["JSX In Depth", "Component Props", "Thinking in React"],
          },
          {
            title: "State Management và Hooks",
            content:
              "State là dữ liệu động trong React components. React Hooks như useState, useEffect, useContext giúp quản lý state và side effects trong functional components. Tìm hiểu lifecycle methods và cách optimize performance.",
            courseId: course._id,
            resources: ["useState Hook", "useEffect Hook", "Custom Hooks"],
          },
        ]);
      } else if (course.title.includes("Vue.js")) {
        lessons = await Lesson.insertMany([
          {
            title: "Vue.js 3 Fundamentals và Composition API",
            content:
              "Vue.js 3 giới thiệu Composition API mới, cho phép tổ chức code tốt hơn và reusability cao hơn. Tìm hiểu về reactive system, ref và reactive, và cách migration từ Options API.",
            courseId: course._id,
            resources: [
              "Vue 3 Migration Guide",
              "Composition API RFC",
              "Reactivity in Depth",
            ],
          },
          {
            title: "Components và Template Syntax",
            content:
              "Học cách tạo và sử dụng Vue components, template syntax, directives (v-if, v-for, v-model), và component communication thông qua props và events.",
            courseId: course._id,
            resources: [
              "Template Syntax",
              "Component Registration",
              "Props Validation",
            ],
          },
          {
            title: "State Management với Pinia",
            content:
              "Pinia là state management library chính thức cho Vue 3, thay thế Vuex. Học cách tạo stores, actions, getters và integrate với TypeScript.",
            courseId: course._id,
            resources: [
              "Pinia Documentation",
              "State Management Pattern",
              "TypeScript Support",
            ],
          },
        ]);
      } else if (course.title.includes("Node.js")) {
        lessons = await Lesson.insertMany([
          {
            title: "Node.js Basics và NPM",
            content:
              "Node.js cho phép chạy JavaScript trên server. Tìm hiểu về event loop, modules system, NPM package manager và cách xây dựng CLI applications.",
            courseId: course._id,
            resources: [
              "Node.js Documentation",
              "NPM Guide",
              "Event Loop Explained",
            ],
          },
          {
            title: "Express.js và RESTful APIs",
            content:
              "Express.js là framework phổ biến nhất cho Node.js. Học cách tạo RESTful APIs, middleware, routing, error handling và validation.",
            courseId: course._id,
            resources: [
              "Express.js Guide",
              "REST API Design",
              "Middleware Patterns",
            ],
          },
          {
            title: "Database Integration và Authentication",
            content:
              "Kết nối với MongoDB using Mongoose, thiết kế schema, authentication với JWT, authorization và security best practices.",
            courseId: course._id,
            resources: [
              "Mongoose Documentation",
              "JWT Authentication",
              "Security Checklist",
            ],
          },
        ]);
      } else if (course.title.includes("Python")) {
        lessons = await Lesson.insertMany([
          {
            title: "Python Fundamentals cho Data Science",
            content:
              "Tổng quan về Python syntax, data types, control structures và functions. Cài đặt Anaconda, Jupyter Notebook và các libraries quan trọng như NumPy, Pandas.",
            courseId: course._id,
            resources: [
              "Python.org Tutorial",
              "Anaconda Distribution",
              "Jupyter Documentation",
            ],
          },
          {
            title: "NumPy và Pandas Data Manipulation",
            content:
              "NumPy arrays cho tính toán khoa học hiệu quả. Pandas DataFrame và Series cho data manipulation, cleaning, transformation và analysis.",
            courseId: course._id,
            resources: [
              "NumPy Quickstart",
              "Pandas User Guide",
              "Data Cleaning Techniques",
            ],
          },
          {
            title: "Data Visualization và Statistics",
            content:
              "Matplotlib và Seaborn cho data visualization. Descriptive statistics, correlation analysis và các statistical tests cơ bản.",
            courseId: course._id,
            resources: [
              "Matplotlib Gallery",
              "Seaborn Tutorial",
              "Statistical Analysis",
            ],
          },
        ]);
      } else {
        // Generic lessons cho các khóa học khác
        lessons = await Lesson.insertMany([
          {
            title: `Cơ bản về ${course.title}`,
            content: `Bài học giới thiệu những khái niệm cơ bản và quan trọng nhất trong ${course.title}. Thiết lập môi trường phát triển và các công cụ cần thiết.`,
            courseId: course._id,
            resources: [
              "Official Documentation",
              "Getting Started Guide",
              "Best Practices",
            ],
          },
          {
            title: `Thực hành với ${course.title}`,
            content: `Áp dụng kiến thức đã học vào các bài tập thực tế. Xây dựng project nhỏ để consolidate understanding và skills.`,
            courseId: course._id,
            resources: [
              "Practice Exercises",
              "Code Examples",
              "Project Templates",
            ],
          },
          {
            title: `Nâng cao và Best Practices`,
            content: `Các kỹ thuật nâng cao, optimization, performance tuning và industry best practices. Chuẩn bị cho real-world applications.`,
            courseId: course._id,
            resources: [
              "Advanced Techniques",
              "Performance Guide",
              "Production Checklist",
            ],
          },
        ]);
      }

      allLessons.push(...lessons);
    }
    console.log("✅ Đã seed Lessons");

    // 5. Seed Quizzes (30 quizzes total, 2 per course)
    const allQuizzes = [];
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const categoryObj = categories.find(
        (cat) => cat.title === course.category
      );

      const quizzes = await Quiz.insertMany([
        {
          title: `Kiểm tra cơ bản - ${course.title}`,
          description: `Đánh giá kiến thức cơ bản về ${course.title}. Tập trung vào các khái niệm fundamental và syntax.`,
          courseId: course._id,
          duration: 20,
          level: 1,
          category: categoryObj._id,
        },
        {
          title: `Kiểm tra nâng cao - ${course.title}`,
          description: `Đánh giá hiểu biết sâu về ${course.title}. Bao gồm best practices, advanced concepts và problem solving.`,
          courseId: course._id,
          duration: 35,
          level: 2,
          category: categoryObj._id,
        },
      ]);

      allQuizzes.push(...quizzes);
    }
    console.log("✅ Đã seed Quizzes");

    // 6. Seed Questions (120 questions total, 4 per quiz)
    const allQuestions = [];

    // React.js Questions
    const reactQuestions = [
      {
        questionText: "JSX là viết tắt của gì?",
        answers: [
          { answerText: "JavaScript XML", isCorrect: true },
          { answerText: "Java Syntax Extension", isCorrect: false },
          { answerText: "JavaScript eXtension", isCorrect: false },
          { answerText: "JSON XML", isCorrect: false },
        ],
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
        questionType: ["single_choice"],
      },
      {
        questionText: "React Hooks nào được sử dụng để quản lý state?",
        answers: [
          { answerText: "useState", isCorrect: true },
          { answerText: "useEffect", isCorrect: false },
          { answerText: "useContext", isCorrect: false },
          { answerText: "useReducer", isCorrect: true },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "Virtual DOM có ưu điểm gì?",
        answers: [
          { answerText: "Tăng performance", isCorrect: true },
          { answerText: "Dễ debug hơn", isCorrect: true },
          { answerText: "Batch updates", isCorrect: true },
          { answerText: "Giảm memory usage", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
    ];

    // Vue.js Questions
    const vueQuestions = [
      {
        questionText:
          "Composition API trong Vue 3 có ưu điểm gì so với Options API?",
        answers: [
          { answerText: "Better TypeScript support", isCorrect: true },
          { answerText: "Code reusability", isCorrect: true },
          { answerText: "Dễ học hơn", isCorrect: false },
          { answerText: "Better organization", isCorrect: true },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText:
          "Directive nào được sử dụng để two-way data binding trong Vue?",
        answers: [
          { answerText: "v-bind", isCorrect: false },
          { answerText: "v-model", isCorrect: true },
          { answerText: "v-on", isCorrect: false },
          { answerText: "v-if", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
      {
        questionText: "Pinia là gì trong Vue ecosystem?",
        answers: [
          { answerText: "State management library", isCorrect: true },
          { answerText: "Routing library", isCorrect: false },
          { answerText: "UI component library", isCorrect: false },
          { answerText: "Testing framework", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
      {
        questionText:
          "Reactive function nào được sử dụng trong Composition API?",
        answers: [
          { answerText: "ref()", isCorrect: true },
          { answerText: "reactive()", isCorrect: true },
          { answerText: "computed()", isCorrect: true },
          { answerText: "watch()", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
    ];

    // Node.js Questions
    const nodeQuestions = [
      {
        questionText: "Node.js chạy trên engine JavaScript nào?",
        answers: [
          { answerText: "V8", isCorrect: true },
          { answerText: "SpiderMonkey", isCorrect: false },
          { answerText: "JavaScriptCore", isCorrect: false },
          { answerText: "Chakra", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
      {
        questionText: "HTTP methods nào được sử dụng trong RESTful API?",
        answers: [
          { answerText: "GET", isCorrect: true },
          { answerText: "POST", isCorrect: true },
          { answerText: "PUT", isCorrect: true },
          { answerText: "FETCH", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "Express.js middleware được sử dụng để làm gì?",
        answers: [
          { answerText: "Process requests", isCorrect: true },
          { answerText: "Handle errors", isCorrect: true },
          { answerText: "Authentication", isCorrect: true },
          { answerText: "Database connection", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "JWT là viết tắt của gì?",
        answers: [
          { answerText: "JSON Web Token", isCorrect: true },
          { answerText: "JavaScript Web Token", isCorrect: false },
          { answerText: "Java Web Token", isCorrect: false },
          { answerText: "JSON Web Text", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
    ];

    // Python Data Science Questions
    const pythonQuestions = [
      {
        questionText: "NumPy array có ưu điểm gì so với Python list?",
        answers: [
          { answerText: "Nhanh hơn trong tính toán", isCorrect: true },
          { answerText: "Tiết kiệm bộ nhớ hơn", isCorrect: true },
          { answerText: "Hỗ trợ vectorization", isCorrect: true },
          { answerText: "Dễ sử dụng hơn", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "Pandas DataFrame được sử dụng để làm gì?",
        answers: [
          { answerText: "Store tabular data", isCorrect: true },
          { answerText: "Data manipulation", isCorrect: true },
          { answerText: "Statistical analysis", isCorrect: true },
          { answerText: "Web scraping", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText:
          "Method nào được sử dụng để handle missing data trong pandas?",
        answers: [
          { answerText: "dropna()", isCorrect: true },
          { answerText: "fillna()", isCorrect: false },
          { answerText: "isna()", isCorrect: false },
          { answerText: "interpolate()", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
      {
        questionText:
          "Libraries nào thường được sử dụng cho data visualization trong Python?",
        answers: [
          { answerText: "Matplotlib", isCorrect: true },
          { answerText: "Seaborn", isCorrect: true },
          { answerText: "Plotly", isCorrect: true },
          { answerText: "NumPy", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
    ];

    // Generic questions cho các course khác
    const genericQuestions = [
      {
        questionText:
          "Best practice nào quan trọng nhất trong software development?",
        answers: [
          { answerText: "Code documentation", isCorrect: true },
          { answerText: "Version control", isCorrect: true },
          { answerText: "Testing", isCorrect: true },
          { answerText: "Using latest technology", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "Agile methodology có ưu điểm gì?",
        answers: [
          { answerText: "Flexible to changes", isCorrect: true },
          { answerText: "Faster delivery", isCorrect: true },
          { answerText: "Better collaboration", isCorrect: true },
          { answerText: "No documentation needed", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
      {
        questionText: "Clean code có đặc điểm gì?",
        answers: [
          { answerText: "Easy to read", isCorrect: true },
          { answerText: "Self-documenting", isCorrect: false },
          { answerText: "Maintainable", isCorrect: false },
          { answerText: "Complex logic", isCorrect: false },
        ],
        questionType: ["single_choice"],
      },
      {
        questionText: "Security considerations trong web development?",
        answers: [
          { answerText: "Input validation", isCorrect: true },
          { answerText: "Authentication", isCorrect: true },
          { answerText: "HTTPS usage", isCorrect: true },
          { answerText: "Storing passwords in plain text", isCorrect: false },
        ],
        questionType: ["multiple_choice"],
      },
    ];

    // Tạo questions cho từng quiz
    for (let i = 0; i < allQuizzes.length; i++) {
      const quiz = allQuizzes[i];
      const course = courses.find(
        (c) => c._id.toString() === quiz.courseId.toString()
      );
      let questionsToUse = genericQuestions;

      if (course.title.includes("React")) {
        questionsToUse = reactQuestions;
      } else if (course.title.includes("Vue")) {
        questionsToUse = vueQuestions;
      } else if (course.title.includes("Node")) {
        questionsToUse = nodeQuestions;
      } else if (course.title.includes("Python")) {
        questionsToUse = pythonQuestions;
      }

      for (let j = 0; j < 4; j++) {
        const questionData = questionsToUse[j % questionsToUse.length];
        const question = await Question.create({
          ...questionData,
          quizId: [quiz._id],
        });
        allQuestions.push(question);
      }
    }
    console.log("✅ Đã seed Questions");

    // Update quizzes with questions
    for (let i = 0; i < allQuizzes.length; i++) {
      const quiz = allQuizzes[i];
      const quizQuestions = allQuestions.filter((q) =>
        q.quizId.some((id) => id.toString() === quiz._id.toString())
      );
      await Quiz.findByIdAndUpdate(quiz._id, {
        questions: quizQuestions.map((q) => q._id),
      });
    }

    // Update courses with lessons and quizzes
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const courseLessons = allLessons.filter(
        (l) => l.courseId.toString() === course._id.toString()
      );
      const courseQuizzes = allQuizzes.filter(
        (q) => q.courseId.toString() === course._id.toString()
      );

      await Course.findByIdAndUpdate(course._id, {
        lessons: courseLessons.map((l) => l._id),
        quizzes: courseQuizzes.map((q) => q._id),
      });
    }

    // 7. Seed Reviews (30 reviews)
    const reviewComments = [
      "Khóa học rất hay! Giảng viên giải thích rất rõ ràng và dễ hiểu.",
      "Nội dung khóa học chất lượng, các ví dụ thực tế rất bổ ích.",
      "Tuyệt vời! Từ không biết gì đến có thể làm được dự án thực tế.",
      "Khóa học rất bổ ích. Tôi đã học được nhiều kiến thức mới.",
      "Giảng viên nhiệt tình, support học viên rất tốt.",
      "Nội dung cập nhật, theo kịp trend công nghệ hiện tại.",
      "Bài tập thực hành phong phú, giúp consolidate kiến thức.",
      "Khóa học đáng giá tiền, recommend cho mọi người.",
      "Cách trình bày dễ hiểu, phù hợp cho beginners.",
      "Project cuối khóa rất thực tế, áp dụng được vào công việc.",
    ];

    const reviews = [];
    for (let i = 0; i < 30; i++) {
      const randomCourse = courses[Math.floor(Math.random() * courses.length)];
      const randomStudent =
        students[Math.floor(Math.random() * students.length)];
      const randomRating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
      const randomComment =
        reviewComments[Math.floor(Math.random() * reviewComments.length)];

      reviews.push({
        courseId: randomCourse._id,
        userId: randomStudent._id,
        rating: randomRating,
        comment: randomComment,
      });
    }

    await Review.insertMany(reviews);
    console.log("✅ Đã seed Reviews");

    // 8. Seed Discussions (20 discussions)
    const discussionTopics = [
      "Khi nào nên sử dụng framework này thay vì framework khác?",
      "Best practices khi làm việc với technology này?",
      "Làm thế nào để optimize performance?",
      "Cách debug hiệu quả nhất là gì?",
      "Có nên học technology này trong năm 2024 không?",
      "So sánh với các alternatives khác như thế nào?",
      "Roadmap học tập cho beginners?",
      "Tài nguyên học tập nào tốt nhất?",
      "Dự án practice nào phù hợp?",
      "Career path với technology này ra sao?",
    ];

    const teacherAnswers = [
      "Đây là câu hỏi rất hay! Dựa trên kinh nghiệm của tôi...",
      "Trong thực tế, chúng ta nên xem xét các factors sau...",
      "Best practice mà tôi recommend là...",
      "Từ perspective của industry, tôi thấy...",
      "Dựa vào project requirements, bạn có thể...",
      "Theo kinh nghiệm làm việc, tôi suggest...",
      "Điều quan trọng cần lưu ý là...",
      "Trong case này, approach tốt nhất là...",
    ];

    const discussions = [];
    for (let i = 0; i < 20; i++) {
      const randomCourse = courses[Math.floor(Math.random() * courses.length)];
      const randomStudent =
        students[Math.floor(Math.random() * students.length)];
      const randomTopic =
        discussionTopics[Math.floor(Math.random() * discussionTopics.length)];
      const randomTeacher =
        teachers[Math.floor(Math.random() * teachers.length)];
      const randomAnswer =
        teacherAnswers[Math.floor(Math.random() * teacherAnswers.length)];

      discussions.push({
        courseId: randomCourse._id,
        userId: randomStudent._id,
        question: randomTopic,
        answers: [
          {
            userId: randomTeacher._id,
            answer: randomAnswer,
          },
        ],
        isClose: Math.random() > 0.8, // 20% chance to be closed
      });
    }

    await Discussion.insertMany(discussions);
    console.log("✅ Đã seed Discussions");

    // 9. Seed Notifications (40 notifications)
    const notificationMessages = [
      "Chào mừng bạn đến với EduTech! Hãy bắt đầu học tập ngay hôm nay.",
      "Bạn có một bài quiz mới trong khóa học đã đăng ký.",
      "Giảng viên đã trả lời câu hỏi của bạn trong diễn đàn thảo luận.",
      "Khóa học mới phù hợp với bạn đã được ra mắt.",
      "Nhắc nhở: Bạn có lịch học sắp tới.",
      "Chúc mừng! Bạn đã hoàn thành một bài học.",
      "Có cập nhật mới trong khóa học bạn đang theo học.",
      "Bạn nhận được tin nhắn mới từ giảng viên.",
      "Deadline nộp bài tập sắp đến hạn.",
      "Kết quả quiz của bạn đã sẵn sàng.",
    ];

    const notificationTypes = [
      "welcome",
      "quiz",
      "discussion",
      "course",
      "schedule",
      "lesson",
      "update",
      "message",
      "assignment",
      "result",
    ];

    const notifications = [];
    for (let i = 0; i < 40; i++) {
      const randomUser = [...students, ...teachers][
        Math.floor(Math.random() * (students.length + teachers.length))
      ];
      const randomMessage =
        notificationMessages[
          Math.floor(Math.random() * notificationMessages.length)
        ];
      const randomType =
        notificationTypes[Math.floor(Math.random() * notificationTypes.length)];

      notifications.push({
        userId: randomUser._id,
        message: randomMessage,
        type: randomType,
        seen: Math.random() > 0.3, // 70% chance to be seen
      });
    }

    await Notification.insertMany(notifications);
    console.log("✅ Đã seed Notifications");

    // 10. Seed Schedules (15 schedules)
    const scheduleTypes = [
      "online_class",
      "consultation",
      "workshop",
      "group_study",
      "exam",
    ];
    const meetingLinks = [
      "https://meet.google.com/abc-def-ghi",
      "https://zoom.us/j/1234567890",
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting",
      "https://whereby.com/meeting-room-123",
      "https://discord.gg/education-channel",
    ];

    const schedules = [];
    for (let i = 0; i < 15; i++) {
      const randomTeacher =
        teachers[Math.floor(Math.random() * teachers.length)];
      const randomType =
        scheduleTypes[Math.floor(Math.random() * scheduleTypes.length)];
      const randomLink =
        meetingLinks[Math.floor(Math.random() * meetingLinks.length)];

      // Random future dates
      const startDate = new Date();
      startDate.setDate(
        startDate.getDate() + Math.floor(Math.random() * 30) + 1
      ); // 1-30 days from now
      startDate.setHours(Math.floor(Math.random() * 8) + 9); // 9AM - 5PM
      startDate.setMinutes(0);

      const endDate = new Date(startDate);
      endDate.setHours(endDate.getHours() + Math.floor(Math.random() * 3) + 1); // 1-3 hours duration

      // Random participants
      const participantCount = Math.floor(Math.random() * 5) + 2; // 2-6 participants
      const usersJoin = [];
      const shuffledStudents = [...students].sort(() => 0.5 - Math.random());

      for (
        let j = 0;
        j < participantCount && j < shuffledStudents.length;
        j++
      ) {
        const statuses = ["confirmed", "pending", "declined"];
        usersJoin.push({
          userId: shuffledStudents[j]._id,
          status: statuses[Math.floor(Math.random() * statuses.length)],
        });
      }

      schedules.push({
        userCreated: randomTeacher._id,
        usersJoin: usersJoin,
        type: randomType,
        link: randomLink,
        timeStart: startDate,
        timeEnd: endDate,
      });
    }

    await Schedule.insertMany(schedules);
    console.log("✅ Đã seed Schedules");

    // 11. Seed UsersQuizzes (50 quiz results)
    const feedbacks = [
      "Xuất sắc! Bạn đã nắm vững kiến thức cơ bản.",
      "Tốt! Tuy nhiên bạn cần ôn lại một số khái niệm.",
      "Khá tốt! Tiếp tục effort để improve hơn nữa.",
      "Cần cải thiện! Hãy xem lại materials và practice thêm.",
      "Tuyệt vời! Bạn hiểu rõ các concepts đã học.",
      "Rất tốt! Knowledge foundation của bạn rất solid.",
      "Cần focus hơn vào weak areas được highlight.",
      "Perfect! Bạn ready cho level tiếp theo.",
      "Good job! Một số areas cần improve thêm.",
      "Excellent work! Keep up the momentum.",
    ];

    const usersQuizzes = [];
    for (let i = 0; i < 50; i++) {
      const randomStudent =
        students[Math.floor(Math.random() * students.length)];
      const randomQuiz =
        allQuizzes[Math.floor(Math.random() * allQuizzes.length)];
      const quizQuestions = allQuestions.filter((q) =>
        q.quizId.some((id) => id.toString() === randomQuiz._id.toString())
      );

      // Generate random answers
      const answers = quizQuestions.map((question) => {
        const correctAnswers = question.answers.filter((a) => a.isCorrect);
        const incorrectAnswers = question.answers.filter((a) => !a.isCorrect);

        // 70% chance to answer correctly
        if (Math.random() > 0.3 && correctAnswers.length > 0) {
          if (question.questionType[0] === "single_choice") {
            return {
              questionId: question._id,
              answer: correctAnswers[0].answerText,
            };
          } else {
            return {
              questionId: question._id,
              answer: correctAnswers.map((a) => a.answerText).join(","),
            };
          }
        } else {
          // Wrong answer
          return {
            questionId: question._id,
            answer: incorrectAnswers[0]?.answerText || "No answer",
          };
        }
      });

      const score = Math.floor(Math.random() * 50) + 50; // 50-100 points
      const randomFeedback =
        feedbacks[Math.floor(Math.random() * feedbacks.length)];

      usersQuizzes.push({
        userId: randomStudent._id,
        quizId: randomQuiz._id,
        answers: answers,
        score: score,
        feedback: randomFeedback,
      });
    }

    await UsersQuizzes.insertMany(usersQuizzes);
    console.log("✅ Đã seed UsersQuizzes");

    console.log("\n🎉 SEED DATA MỞ RỘNG HOÀN THÀNH!");
    console.log("📊 Thống kê dữ liệu đã tạo:");
    console.log(`- Categories: ${categories.length}`);
    console.log(
      `- Users: ${users.length} (${teachers.length} giảng viên, ${students.length} học viên, 1 admin)`
    );
    console.log(`- Courses: ${courses.length}`);
    console.log(`- Lessons: ${allLessons.length}`);
    console.log(`- Quizzes: ${allQuizzes.length}`);
    console.log(`- Questions: ${allQuestions.length}`);
    console.log(`- Reviews: 30`);
    console.log(`- Discussions: 20`);
    console.log(`- Notifications: 40`);
    console.log(`- Schedules: 15`);
    console.log(`- Quiz Results: 50`);

    console.log("\n🔐 Thông tin đăng nhập mẫu:");
    console.log("Admin: admin@edutech.vn / 123456");
    console.log("Giảng viên: nguyenvana@edutech.vn / 123456");
    console.log("Học viên: student1@gmail.com / 123456");

    console.log("\n📚 Khóa học nổi bật:");
    console.log("- React.js Từ Cơ Bản Đến Nâng Cao");
    console.log("- Vue.js 3 & Composition API");
    console.log("- Node.js Backend Development");
    console.log("- Python cho Khoa Học Dữ Liệu");
    console.log("- Flutter - Phát triển App di động");
    console.log("- DevOps với Docker và Kubernetes");
    console.log("- Blockchain và Smart Contracts");
    console.log("- Unity Game Development 2D/3D");
  } catch (error) {
    console.error("❌ Lỗi khi seed data:", error);
  } finally {
    await mongoose.connection.close();
    console.log("🔚 Đã đóng kết nối database");
    process.exit(0);
  }
};

// Chạy extended seed data
seedExtendedData();
