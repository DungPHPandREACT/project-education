const Category = ({ key, title }) => {
	return (
		<div
			key={key}
			className='col-lg-3 col-md-4'
			data-aos='fade-up'
			data-aos-delay={700}
		>
			<div className='features-item'>
				<i className='bi bi-x-diamond' style={{ color: '#11dbcf' }} />
				<h3>
					<a href='' className='stretched-link'>
						{title}
					</a>
				</h3>
			</div>
		</div>
	);
};

export default Category;
