import { useGetTopTeachersByCourses } from '../../../../apis/teachers/teachers.api';
import Teacher from './Teacher';

const Teachers = () => {
	const { data: teachers = [] } = useGetTopTeachersByCourses({ limit: 3 });
	console.log('teachers: ', teachers);

	return (
		<section id='trainers-index' className='section trainers-index'>
			<div className='container'>
				<div className='row'>
					{teachers.map((teacher) => (
						<Teacher key={teacher._id} teacher={teacher} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Teachers;
