export const questionsData = {
  "React.js": [
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
    {
      questionText: "Props trong React có đặc điểm gì?",
      answers: [
        { answerText: "Immutable (không thể thay đổi)", isCorrect: true },
        { answerText: "Được truyền từ parent xuống child", isCorrect: true },
        { answerText: "Có thể modify trực tiếp", isCorrect: false },
        { answerText: "Chỉ có thể là string", isCorrect: false },
      ],
      questionType: ["multiple_choice"],
    },
    {
      questionText: "useEffect Hook được sử dụng để làm gì?",
      answers: [
        { answerText: "Quản lý side effects", isCorrect: true },
        { answerText: "Quản lý state", isCorrect: false },
        { answerText: "Tạo context", isCorrect: false },
        { answerText: "Render components", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
  ],

  "Vue.js": [
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
      questionText: "Reactive function nào được sử dụng trong Composition API?",
      answers: [
        { answerText: "ref()", isCorrect: true },
        { answerText: "reactive()", isCorrect: true },
        { answerText: "computed()", isCorrect: true },
        { answerText: "watch()", isCorrect: false },
      ],
      questionType: ["multiple_choice"],
    },
    {
      questionText: "Vue 3 có tính năng mới nào so với Vue 2?",
      answers: [
        { answerText: "Composition API", isCorrect: true },
        { answerText: "Multiple root elements", isCorrect: true },
        { answerText: "Better performance", isCorrect: true },
        { answerText: "Vuex integration", isCorrect: false },
      ],
      questionType: ["multiple_choice"],
    },
    {
      questionText: "v-for directive có thể iterate qua loại dữ liệu nào?",
      answers: [
        { answerText: "Array", isCorrect: true },
        { answerText: "Object", isCorrect: false },
        { answerText: "String", isCorrect: false },
        { answerText: "Number", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
  ],

  "Node.js": [
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
    {
      questionText: "NPM là gì?",
      answers: [
        { answerText: "Node Package Manager", isCorrect: true },
        { answerText: "New Programming Method", isCorrect: false },
        { answerText: "Node Project Manager", isCorrect: false },
        { answerText: "Network Package Manager", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
    {
      questionText: "Event Loop trong Node.js có chức năng gì?",
      answers: [
        { answerText: "Handle asynchronous operations", isCorrect: true },
        { answerText: "Manage memory", isCorrect: false },
        { answerText: "Compile JavaScript", isCorrect: false },
        { answerText: "Handle HTTP requests", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
  ],

  Python: [
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
    {
      questionText: "Jupyter Notebook có ưu điểm gì cho data science?",
      answers: [
        { answerText: "Interactive development", isCorrect: true },
        { answerText: "Markdown documentation", isCorrect: true },
        { answerText: "Visualization support", isCorrect: true },
        { answerText: "Production deployment", isCorrect: false },
      ],
      questionType: ["multiple_choice"],
    },
    {
      questionText: "Scikit-learn được sử dụng cho mục đích gì?",
      answers: [
        { answerText: "Machine learning", isCorrect: true },
        { answerText: "Data visualization", isCorrect: false },
        { answerText: "Web development", isCorrect: false },
        { answerText: "Database management", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
  ],

  // Generic questions
  default: [
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
    {
      questionText: "Version control system nào phổ biến nhất?",
      answers: [
        { answerText: "Git", isCorrect: true },
        { answerText: "SVN", isCorrect: false },
        { answerText: "Mercurial", isCorrect: false },
        { answerText: "CVS", isCorrect: false },
      ],
      questionType: ["single_choice"],
    },
    {
      questionText: "Testing levels nào trong software development?",
      answers: [
        { answerText: "Unit testing", isCorrect: true },
        { answerText: "Integration testing", isCorrect: true },
        { answerText: "End-to-end testing", isCorrect: true },
        { answerText: "Manual testing only", isCorrect: false },
      ],
      questionType: ["multiple_choice"],
    },
  ],
};
