import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetUserCurrent } from './apis/auth/auth.api';
import { AuthContext } from './contexts/AuthContext';
import DefaultPage from './layouts/DefaultPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/Courses/CourseDetail';
import Events from './pages/Events';
import Homepage from './pages/Homepage';
import ListTeachers from './pages/ListTeachers';

const App = () => {
	const [userCurrent, setUserCurrent] = useState(null);

	const { data, isLoading } = useGetUserCurrent({
		enabled: !userCurrent,
	});

	useEffect(() => {
		if (!userCurrent && data && !isLoading) {
			setUserCurrent(data);
		}
	}, [data, userCurrent, isLoading]);

	return (
		<AuthContext.Provider
			value={{
				userCurrent,
				setUserCurrent,
			}}
		>
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
		</AuthContext.Provider>
	);
};

export default App;
