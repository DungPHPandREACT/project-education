import React from 'react'

const About = () => {
  return (
		<>
			{/* About Us Section */}
			<section id='about-us' className='section about-us'>
				<div className='container'>
					<div className='row gy-4'>
						<div
							className='col-lg-6 order-1 order-lg-2'
							data-aos='fade-up'
							data-aos-delay={100}
						>
							<img
								src='assets/img/about/about-1.webp'
								className='img-fluid'
								alt=''
							/>
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
						</div>
					</div>
				</div>
			</section>
			{/* /About Us Section */}
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
			{/* Testimonials Section */}
			<section id='testimonials' className='testimonials section'>
				{/* Section Title */}
				<div className='container section-title' data-aos='fade-up'>
					<h2>Testimonials</h2>
					<p>What are they saying</p>
				</div>
				{/* End Section Title */}
				<div className='container' data-aos='fade-up' data-aos-delay={100}>
					<div className='swiper init-swiper'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide'>
								<div className='testimonial-wrap'>
									<div className='testimonial-item'>
										<img
											src='assets/img/person/person-m-9.webp'
											className='testimonial-img'
											alt=''
										/>
										<h3>Saul Goodman</h3>
										<h4>Ceo &amp; Founder</h4>
										<div className='stars'>
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
										</div>
										<p>
											<i className='bi bi-quote quote-icon-left' />
											<span>
												Proin iaculis purus consequat sem cure digni ssim donec
												porttitora entum suscipit rhoncus. Accusantium quam,
												ultricies eget id, aliquam eget nibh et. Maecen aliquam,
												risus at semper.
											</span>
											<i className='bi bi-quote quote-icon-right' />
										</p>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className='swiper-slide'>
								<div className='testimonial-wrap'>
									<div className='testimonial-item'>
										<img
											src='assets/img/person/person-f-5.webp'
											className='testimonial-img'
											alt=''
										/>
										<h3>Sara Wilsson</h3>
										<h4>Designer</h4>
										<div className='stars'>
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
										</div>
										<p>
											<i className='bi bi-quote quote-icon-left' />
											<span>
												Export tempor illum tamen malis malis eram quae irure
												esse labore quem cillum quid cillum eram malis quorum
												velit fore eram velit sunt aliqua noster fugiat irure
												amet legam anim culpa.
											</span>
											<i className='bi bi-quote quote-icon-right' />
										</p>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className='swiper-slide'>
								<div className='testimonial-wrap'>
									<div className='testimonial-item'>
										<img
											src='assets/img/person/person-f-12.webp'
											className='testimonial-img'
											alt=''
										/>
										<h3>Jena Karlis</h3>
										<h4>Store Owner</h4>
										<div className='stars'>
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
										</div>
										<p>
											<i className='bi bi-quote quote-icon-left' />
											<span>
												Enim nisi quem export duis labore cillum quae magna enim
												sint quorum nulla quem veniam duis minim tempor labore
												quem eram duis noster aute amet eram fore quis sint
												minim.
											</span>
											<i className='bi bi-quote quote-icon-right' />
										</p>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className='swiper-slide'>
								<div className='testimonial-wrap'>
									<div className='testimonial-item'>
										<img
											src='assets/img/person/person-m-12.webp'
											className='testimonial-img'
											alt=''
										/>
										<h3>Matt Brandon</h3>
										<h4>Freelancer</h4>
										<div className='stars'>
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
										</div>
										<p>
											<i className='bi bi-quote quote-icon-left' />
											<span>
												Fugiat enim eram quae cillum dolore dolor amet nulla
												culpa multos export minim fugiat minim velit minim dolor
												enim duis veniam ipsum anim magna sunt elit fore quem
												dolore labore illum veniam.
											</span>
											<i className='bi bi-quote quote-icon-right' />
										</p>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
							<div className='swiper-slide'>
								<div className='testimonial-wrap'>
									<div className='testimonial-item'>
										<img
											src='assets/img/person/person-m-13.webp'
											className='testimonial-img'
											alt=''
										/>
										<h3>John Larson</h3>
										<h4>Entrepreneur</h4>
										<div className='stars'>
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
											<i className='bi bi-star-fill' />
										</div>
										<p>
											<i className='bi bi-quote quote-icon-left' />
											<span>
												Quis quorum aliqua sint quem legam fore sunt eram irure
												aliqua veniam tempor noster veniam enim culpa labore
												duis sunt culpa nulla illum cillum fugiat legam esse
												veniam culpa fore nisi cillum quid.
											</span>
											<i className='bi bi-quote quote-icon-right' />
										</p>
									</div>
								</div>
							</div>
							{/* End testimonial item */}
						</div>
						<div className='swiper-pagination' />
					</div>
				</div>
			</section>
			{/* /Testimonials Section */}
		</>
	);
}

export default About