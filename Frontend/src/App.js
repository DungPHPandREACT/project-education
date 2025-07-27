import DefaultPage from './layouts/DefaultPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from './pages/Courses/CourseDetail';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Homepage from './pages/Homepage';
import ListTeachers from './pages/ListTeachers';

const App = () => {
	return (
		<DefaultPage>
			{/* <Homepage /> */}
			{/* <Courses /> */}
			{/* <ListTeachers /> */}

			{/* <Events /> */}
			{/* <About /> */}
			{/* <Contact /> */}
			<CourseDetail />
		</DefaultPage>
	);
};

export default App;
