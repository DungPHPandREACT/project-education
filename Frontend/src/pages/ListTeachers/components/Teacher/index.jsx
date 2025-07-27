const Teacher = ({ teacher }) => {
	const { key, fullName, email, courseCount } = teacher;

	return (
		<div
			key={key}
			className='col-lg-4 col-md-6 member'
			data-aos='fade-up'
			data-aos-delay={100}
		>
			<div className='member-img'>
				<img
					src='assets/img/person/person-m-7.webp'
					className='img-fluid'
					alt=''
				/>
				<div className='social'>
					<a href='#'>
						<i className='bi bi-twitter-x' />
					</a>
					<a href='#'>
						<i className='bi bi-facebook' />
					</a>
					<a href='#'>
						<i className='bi bi-instagram' />
					</a>
					<a href='#'>
						<i className='bi bi-linkedin' />
					</a>
				</div>
			</div>
			<div className='member-info text-center'>
				<h4>{fullName}</h4>
				<span>{email}</span>
				<p>Số lượng khóa học: {courseCount}</p>
			</div>
		</div>
	);
};

export default Teacher;
