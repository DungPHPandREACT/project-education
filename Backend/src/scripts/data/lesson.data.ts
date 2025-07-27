export const lessonsData = {
  "React.js Từ Cơ Bản Đến Nâng Cao": [
    {
      title: "Giới thiệu về React.js và Setup Environment",
      content:
        "React là một thư viện JavaScript được phát triển bởi Facebook để xây dựng giao diện người dùng. Trong bài học này, chúng ta sẽ tìm hiểu về lịch sử phát triển của React, so sánh với các framework khác như Angular và Vue.js, cũng như cách cài đặt và setup môi trường phát triển.",
      resources: ["Create React App", "Node.js và npm", "VS Code Extensions"],
    },
    {
      title: "JSX và Components",
      content:
        "JSX (JavaScript XML) là cú pháp mở rộng của JavaScript cho phép viết HTML trong JavaScript một cách trực quan. Components là khối xây dựng cơ bản của React, có thể là function components hoặc class components. Chúng ta sẽ học cách tạo và sử dụng components hiệu quả.",
      resources: ["JSX In Depth", "Component Props", "Thinking in React"],
    },
    {
      title: "State Management và Hooks",
      content:
        "State là dữ liệu động trong React components. React Hooks như useState, useEffect, useContext giúp quản lý state và side effects trong functional components. Tìm hiểu lifecycle methods và cách optimize performance.",
      resources: ["useState Hook", "useEffect Hook", "Custom Hooks"],
    },
  ],

  "Vue.js 3 & Composition API": [
    {
      title: "Vue.js 3 Fundamentals và Composition API",
      content:
        "Vue.js 3 giới thiệu Composition API mới, cho phép tổ chức code tốt hơn và reusability cao hơn. Tìm hiểu về reactive system, ref và reactive, và cách migration từ Options API.",
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
      resources: [
        "Pinia Documentation",
        "State Management Pattern",
        "TypeScript Support",
      ],
    },
  ],

  "Node.js Backend Development": [
    {
      title: "Node.js Basics và NPM",
      content:
        "Node.js cho phép chạy JavaScript trên server. Tìm hiểu về event loop, modules system, NPM package manager và cách xây dựng CLI applications.",
      resources: ["Node.js Documentation", "NPM Guide", "Event Loop Explained"],
    },
    {
      title: "Express.js và RESTful APIs",
      content:
        "Express.js là framework phổ biến nhất cho Node.js. Học cách tạo RESTful APIs, middleware, routing, error handling và validation.",
      resources: ["Express.js Guide", "REST API Design", "Middleware Patterns"],
    },
    {
      title: "Database Integration và Authentication",
      content:
        "Kết nối với MongoDB using Mongoose, thiết kế schema, authentication với JWT, authorization và security best practices.",
      resources: [
        "Mongoose Documentation",
        "JWT Authentication",
        "Security Checklist",
      ],
    },
  ],

  "Full Stack JavaScript MERN": [
    {
      title: "MERN Stack Overview",
      content:
        "Tổng quan về MERN stack: MongoDB, Express.js, React.js, Node.js. Kiến trúc ứng dụng full stack và workflow development.",
      resources: [
        "MERN Architecture",
        "Full Stack Development",
        "Project Structure",
      ],
    },
    {
      title: "Backend API Development",
      content:
        "Xây dựng RESTful API với Express.js và MongoDB. Authentication, validation, error handling và testing.",
      resources: ["API Design", "Testing with Jest", "Error Handling"],
    },
    {
      title: "Frontend Integration và Deployment",
      content:
        "Kết nối React frontend với backend API. State management, routing, và deployment lên production.",
      resources: [
        "React API Integration",
        "State Management",
        "Deployment Guide",
      ],
    },
  ],

  "Python cho Khoa Học Dữ Liệu": [
    {
      title: "Python Fundamentals cho Data Science",
      content:
        "Tổng quan về Python syntax, data types, control structures và functions. Cài đặt Anaconda, Jupyter Notebook và các libraries quan trọng như NumPy, Pandas.",
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
      resources: [
        "Matplotlib Gallery",
        "Seaborn Tutorial",
        "Statistical Analysis",
      ],
    },
  ],

  "Machine Learning với TensorFlow": [
    {
      title: "Machine Learning Foundations",
      content:
        "Giới thiệu machine learning, supervised vs unsupervised learning, evaluation metrics và model selection.",
      resources: ["ML Fundamentals", "Scikit-learn", "Model Evaluation"],
    },
    {
      title: "TensorFlow và Keras",
      content:
        "Xây dựng neural networks với TensorFlow và Keras. Từ perceptron đến deep neural networks.",
      resources: ["TensorFlow Guide", "Keras Documentation", "Neural Networks"],
    },
    {
      title: "Deep Learning Applications",
      content:
        "Computer vision với CNNs, natural language processing với RNNs, và transfer learning.",
      resources: ["CNN Architecture", "RNN and LSTM", "Transfer Learning"],
    },
  ],

  // Generic lessons cho các khóa học khác
  default: [
    {
      title: "Cơ bản và Giới thiệu",
      content:
        "Bài học giới thiệu những khái niệm cơ bản và quan trọng nhất. Thiết lập môi trường phát triển và các công cụ cần thiết.",
      resources: [
        "Official Documentation",
        "Getting Started Guide",
        "Best Practices",
      ],
    },
    {
      title: "Thực hành và Ứng dụng",
      content:
        "Áp dụng kiến thức đã học vào các bài tập thực tế. Xây dựng project nhỏ để consolidate understanding và skills.",
      resources: ["Practice Exercises", "Code Examples", "Project Templates"],
    },
    {
      title: "Nâng cao và Deployment",
      content:
        "Các kỹ thuật nâng cao, optimization, performance tuning và industry best practices. Chuẩn bị cho real-world applications.",
      resources: [
        "Advanced Techniques",
        "Performance Guide",
        "Production Checklist",
      ],
    },
  ],
};
