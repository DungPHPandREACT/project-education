import { useGetAllTeachers } from '../../apis/teachers/teachers.api';
import Teacher from './components/Teacher';

const ListTeachers = () => {
	const { data: teachers = [] } = useGetAllTeachers();
	return (
		<>
			{/* Trainers Section */}
			<section id='trainers' className='section trainers'>
				<div className='container'>
					<div className='row g-3'>
						{teachers.map((teacher) => (
							<Teacher key={teacher._id} teacher={teacher} />
						))}
					</div>
				</div>
			</section>
			{/* /Trainers Section */}
		</>
	);
};

export default ListTeachers;
