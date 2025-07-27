import { useGetAllCoursesPopular } from '../../../../apis/courses/courses.api';
import Course from './Course';

const PopularCourses = () => {
	const { data: courses = [] } = useGetAllCoursesPopular({
		limit: 3,
	});

	console.log('courses: ', courses);

	return (
		<section id='courses' className='courses section'>
			{/* Section Title */}
			<div className='container section-title' data-aos='fade-up'>
				<h2>Courses</h2>
				<p>Popular Courses</p>
			</div>
			{/* End Section Title */}
			<div className='container'>
				<div className='row'>
					{courses.map((course) => (
						<Course key={course._id} course={course} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularCourses;
