const Course = ({ key, course }) => {
	const {
		title,
		description,
		category,
		instructorId,
		users = [],
		reviews = [],
	} = course ?? {};
	return (
		<div
			key={key}
			className='col-lg-4 col-md-6 d-flex align-items-stretch'
			data-aos='zoom-in'
			data-aos-delay={100}
		>
			<div className='course-item'>
				<img
					src='assets/img/course/course-1.webp'
					className='img-fluid'
					alt='...'
				/>
				<div className='course-content'>
					<div className='d-flex justify-content-between align-items-center mb-3'>
						<p className='category'>{category}</p>
						<p className='price'>$169</p>
					</div>
					<h3>
						<a href='course-details.html'>{title}</a>
					</h3>
					<p className='description'>{description}</p>
					<div className='trainer d-flex justify-content-between align-items-center'>
						<div className='trainer-profile d-flex align-items-center'>
							<img
								src='assets/img/person/person-m-7.webp'
								className='img-fluid'
								alt=''
							/>
							<a href='' className='trainer-link'>
								{instructorId.fullName}
							</a>
						</div>
						<div className='trainer-rank d-flex align-items-center'>
							<i className='bi bi-person user-icon' />
							&nbsp;{users.length} &nbsp;&nbsp;
							<i className='bi bi-heart heart-icon' />
							&nbsp;{reviews.length}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
