export const coursesData = [
  // Web Development
  {
    title: "React.js Từ Cơ Bản Đến Nâng Cao",
    description:
      "Khóa học toàn diện về React.js, từ những khái niệm cơ bản đến các kỹ thuật nâng cao. Bạn sẽ học cách xây dựng ứng dụng web hiện đại với React, Redux, Hooks và nhiều thư viện hữu ích khác.",
    category: "Lập trình Web",
    teacherIndex: 0,
    studentIndexes: [0, 1, 2, 3],
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
    category: "Lập trình Web",
    teacherIndex: 0,
    studentIndexes: [1, 4, 5],
    resources: ["https://vuejs.org/", "Vue 3 Documentation", "Pinia Store"],
  },
  {
    title: "Node.js Backend Development",
    description:
      "Xây dựng RESTful API với Node.js, Express.js, MongoDB. Học về authentication, authorization, security và deployment.",
    category: "Lập trình Web",
    teacherIndex: 4,
    studentIndexes: [0, 2, 6, 7],
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
    category: "Lập trình Web",
    teacherIndex: 0,
    studentIndexes: [3, 8, 9],
    resources: ["MERN Stack Tutorial", "Git & GitHub", "Deployment Guide"],
  },

  // Data Science
  {
    title: "Python cho Khoa Học Dữ Liệu",
    description:
      "Học Python từ đầu với focus vào data science. Khóa học bao gồm pandas, numpy, matplotlib, seaborn và machine learning cơ bản với scikit-learn.",
    category: "Khoa học dữ liệu",
    teacherIndex: 1,
    studentIndexes: [1, 2, 3, 10],
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
    category: "Khoa học dữ liệu",
    teacherIndex: 1,
    studentIndexes: [4, 5, 6],
    resources: ["TensorFlow Documentation", "Keras Guide", "Google Colab"],
  },
  {
    title: "Data Visualization với Power BI",
    description:
      "Tạo dashboard và báo cáo tương tác với Power BI. Học cách kết nối dữ liệu, tạo measures và visualizations chuyên nghiệp.",
    category: "Khoa học dữ liệu",
    teacherIndex: 7,
    studentIndexes: [7, 8, 9],
    resources: ["Power BI Documentation", "DAX Functions", "Power Query"],
  },

  // UI/UX Design
  {
    title: "Thiết kế UI/UX với Figma",
    description:
      "Khóa học thiết kế giao diện người dùng chuyên nghiệp với Figma. Từ wireframe, prototype đến design system hoàn chỉnh.",
    category: "Thiết kế UI/UX",
    teacherIndex: 2,
    studentIndexes: [0, 3, 4, 8],
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
    category: "Thiết kế UI/UX",
    teacherIndex: 2,
    studentIndexes: [5, 7, 10],
    resources: ["Adobe XD Tutorials", "Design Systems", "Interaction Design"],
  },

  // Mobile Development
  {
    title: "Flutter - Phát triển App di động",
    description:
      "Xây dựng ứng dụng di động cho cả iOS và Android với Flutter. Từ cơ bản đến nâng cao, deploy lên store và monetization.",
    category: "Mobile Development",
    teacherIndex: 3,
    studentIndexes: [2, 4, 5, 9],
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
    category: "Mobile Development",
    teacherIndex: 3,
    studentIndexes: [1, 6, 8, 10],
    resources: ["React Native Docs", "Expo Documentation", "Metro Bundler"],
  },

  // DevOps & Cloud
  {
    title: "DevOps với Docker và Kubernetes",
    description:
      "Học cách containerize ứng dụng với Docker và orchestration với Kubernetes. Bao gồm CI/CD pipeline với Jenkins và GitLab.",
    category: "DevOps & Cloud",
    teacherIndex: 4,
    studentIndexes: [1, 4, 5, 7],
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
    category: "DevOps & Cloud",
    teacherIndex: 4,
    studentIndexes: [0, 3, 6, 9],
    resources: ["AWS Documentation", "Well-Architected Framework", "AWS CLI"],
  },

  // Blockchain
  {
    title: "Blockchain và Smart Contracts",
    description:
      "Tìm hiểu công nghệ blockchain, phát triển smart contracts với Solidity, xây dựng DApps và tương tác với Web3.",
    category: "Blockchain & Web3",
    teacherIndex: 5,
    studentIndexes: [0, 2, 5, 8],
    resources: [
      "https://ethereum.org/",
      "Solidity Documentation",
      "Web3.js Guide",
    ],
  },

  // Game Development
  {
    title: "Unity Game Development 2D/3D",
    description:
      "Phát triển game 2D và 3D với Unity Engine. Từ game mechanics cơ bản đến publish lên các platform.",
    category: "Game Development",
    teacherIndex: 6,
    studentIndexes: [3, 7, 9, 10],
    resources: [
      "Unity Documentation",
      "C# Programming Guide",
      "Unity Asset Store",
    ],
  },
];
