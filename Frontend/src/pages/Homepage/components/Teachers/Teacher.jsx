const Teacher = ({ teacher }) => {
	const { key, fullName, email, courseCount } = teacher;
	return (
		<div
			key={key}
			className='col-lg-4 col-md-6 d-flex'
			data-aos='fade-up'
			data-aos-delay={300}
		>
			<div className='member'>
				<img
					src='assets/img/trainers/trainer-3.jpg'
					className='img-fluid'
					alt=''
				/>
				<div className='member-content'>
					<h4>{fullName}</h4>
					<span>{email}</span>
					<p>Số lượng khóa học: {courseCount}</p>
					<div className='social'>
						<a href=''>
							<i className='bi bi-twitter-x' />
						</a>
						<a href=''>
							<i className='bi bi-facebook' />
						</a>
						<a href=''>
							<i className='bi bi-instagram' />
						</a>
						<a href=''>
							<i className='bi bi-linkedin' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teacher;
