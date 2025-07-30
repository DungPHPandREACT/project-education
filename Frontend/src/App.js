import { Route, Routes } from 'react-router-dom';
import DefaultPage from './layouts/DefaultPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/Courses/CourseDetail';
import Events from './pages/Events';
import Homepage from './pages/Homepage';
import ListTeachers from './pages/ListTeachers';

const App = () => {
	return (
		<DefaultPage>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:id' element={<CourseDetail />} />
				<Route path='/teachers' element={<ListTeachers />} />
				<Route path='/events' element={<Events />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</DefaultPage>
	);
};

export default App;
