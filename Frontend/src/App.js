import DefaultPage from './layouts/DefaultPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from './pages/Courses/CourseDetail';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Homepage from './pages/Homepage';
import Teachers from './pages/Teachers';

const App = () => {
	return (
		<DefaultPage>
			{/* <Courses /> */}
			{/* <Events /> */}
			{/* <About /> */}
			{/* <Contact /> */}
			{/* <CourseDetail /> */}
			{/* <ListTeachers /> */}
			<Homepage />
		</DefaultPage>
	);
};

export default App;
