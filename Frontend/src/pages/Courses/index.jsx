import { useGetAllCourses } from '../../apis/courses/courses.api';
import Course from '../../components/Course';

const Courses = () => {
	const { data: courses = [] } = useGetAllCourses();
	

	return (
		<section id='courses' className='courses section'>
			<div className='container'>
				<div className='row g-3'>
					{courses.map((course) => (
						<Course key={course._id} course={course} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Courses;
