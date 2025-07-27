import Categories from './components/Categories';
import PopularCourses from './components/PopularCourses';
import Teachers from './components/Teachers';

const Homepage = () => {
	return (
		<>
			{/* Hero Section */}
			<section id='hero' className='hero section dark-background'>
				<img src='assets/img/hero-bg.jpg' alt='' data-aos='fade-in' />
				<div className='container'>
					<h2 data-aos='fade-up' data-aos-delay={100}>
						Learning Today,
						<br />
						Leading Tomorrow
					</h2>
					<p data-aos='fade-up' data-aos-delay={200}>
						We are team of talented designers making websites with Bootstrap
					</p>
					<div className='d-flex mt-4' data-aos='fade-up' data-aos-delay={300}>
						<a href='courses.html' className='btn-get-started'>
							Get Started
						</a>
					</div>
				</div>
			</section>
			{/* /Hero Section */}
			{/* About Section */}
			<section id='about' className='about section'>
				<div className='container'>
					<div className='row gy-4'>
						<div
							className='col-lg-6 order-1 order-lg-2'
							data-aos='fade-up'
							data-aos-delay={100}
						>
							<img src='assets/img/about.jpg' className='img-fluid' alt='' />
						</div>
						<div
							className='col-lg-6 order-2 order-lg-1 content'
							data-aos='fade-up'
							data-aos-delay={200}
						>
							<h3>Voluptatem dignissimos provident quasi corporis</h3>
							<p className='fst-italic'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<ul>
								<li>
									<i className='bi bi-check-circle' />{' '}
									<span>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</span>
								</li>
								<li>
									<i className='bi bi-check-circle' />{' '}
									<span>
										Duis aute irure dolor in reprehenderit in voluptate velit.
									</span>
								</li>
								<li>
									<i className='bi bi-check-circle' />{' '}
									<span>
										Ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate trideta
										storacalaperda mastiro dolore eu fugiat nulla pariatur.
									</span>
								</li>
							</ul>
							<a href='#' className='read-more'>
								<span>Read More</span>
								<i className='bi bi-arrow-right' />
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* /About Section */}
			{/* Counts Section */}
			<section id='counts' className='section counts light-background'>
				<div className='container' data-aos='fade-up' data-aos-delay={100}>
					<div className='row gy-4'>
						<div className='col-lg-3 col-md-6'>
							<div className='stats-item text-center w-100 h-100'>
								<span
									data-purecounter-start={0}
									data-purecounter-end={1232}
									data-purecounter-duration={1}
									className='purecounter'
								/>
								<p>Students</p>
							</div>
						</div>
						{/* End Stats Item */}
						<div className='col-lg-3 col-md-6'>
							<div className='stats-item text-center w-100 h-100'>
								<span
									data-purecounter-start={0}
									data-purecounter-end={64}
									data-purecounter-duration={1}
									className='purecounter'
								/>
								<p>Courses</p>
							</div>
						</div>
						{/* End Stats Item */}
						<div className='col-lg-3 col-md-6'>
							<div className='stats-item text-center w-100 h-100'>
								<span
									data-purecounter-start={0}
									data-purecounter-end={42}
									data-purecounter-duration={1}
									className='purecounter'
								/>
								<p>Events</p>
							</div>
						</div>
						{/* End Stats Item */}
						<div className='col-lg-3 col-md-6'>
							<div className='stats-item text-center w-100 h-100'>
								<span
									data-purecounter-start={0}
									data-purecounter-end={24}
									data-purecounter-duration={1}
									className='purecounter'
								/>
								<p>Trainers</p>
							</div>
						</div>
						{/* End Stats Item */}
					</div>
				</div>
			</section>
			{/* /Counts Section */}
			{/* Why Us Section */}
			<section id='why-us' className='section why-us'>
				<div className='container'>
					<div className='row gy-4'>
						<div className='col-lg-4' data-aos='fade-up' data-aos-delay={100}>
							<div className='why-box'>
								<h3>Why Choose Our Products?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Duis aute irure dolor in reprehenderit Asperiores dolores sed
									et. Tenetur quia eos. Autem tempore quibusdam vel
									necessitatibus optio ad corporis.
								</p>
								<div className='text-center'>
									<a href='#' className='more-btn'>
										<span>Learn More</span>{' '}
										<i className='bi bi-chevron-right' />
									</a>
								</div>
							</div>
						</div>
						{/* End Why Box */}
						<div className='col-lg-8 d-flex align-items-stretch'>
							<div className='row gy-4' data-aos='fade-up' data-aos-delay={200}>
								<div className='col-xl-4'>
									<div className='icon-box d-flex flex-column justify-content-center align-items-center'>
										<i className='bi bi-clipboard-data' />
										<h4>Corporis voluptates officia eiusmod</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>
								{/* End Icon Box */}
								<div
									className='col-xl-4'
									data-aos='fade-up'
									data-aos-delay={300}
								>
									<div className='icon-box d-flex flex-column justify-content-center align-items-center'>
										<i className='bi bi-gem' />
										<h4>Ullamco laboris ladore pan</h4>
										<p>
											Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt
										</p>
									</div>
								</div>
								{/* End Icon Box */}
								<div
									className='col-xl-4'
									data-aos='fade-up'
									data-aos-delay={400}
								>
									<div className='icon-box d-flex flex-column justify-content-center align-items-center'>
										<i className='bi bi-inboxes' />
										<h4>Labore consequatur incidid dolore</h4>
										<p>
											Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
											maiores omnis facere
										</p>
									</div>
								</div>
								{/* End Icon Box */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<Categories />

			<PopularCourses />

			<Teachers />
		</>
	);
};

export default Homepage;
