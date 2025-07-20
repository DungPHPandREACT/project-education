const Header = () => {
	return (
		<header id='header' className='header d-flex align-items-center sticky-top'>
			<div className='container-fluid container-xl position-relative d-flex align-items-center'>
				<a href='index.html' className='logo d-flex align-items-center me-auto'>
					<h1 className='sitename'>Mentor</h1>
				</a>
				<nav id='navmenu' className='navmenu'>
					<ul>
						<li>
							<a href='index.html'>
								Home
								<br />
							</a>
						</li>
						<li>
							<a href='about.html'>About</a>
						</li>
						<li>
							<a href='courses.html' className='active'>
								Courses
							</a>
						</li>
						<li>
							<a href='trainers.html'>Trainers</a>
						</li>
						<li>
							<a href='events.html'>Events</a>
						</li>
						<li>
							<a href='pricing.html'>Pricing</a>
						</li>
						<li className='dropdown'>
							<a href='#'>
								<span>Dropdown</span>{' '}
								<i className='bi bi-chevron-down toggle-dropdown' />
							</a>
							<ul>
								<li>
									<a href='#'>Dropdown 1</a>
								</li>
								<li className='dropdown'>
									<a href='#'>
										<span>Deep Dropdown</span>{' '}
										<i className='bi bi-chevron-down toggle-dropdown' />
									</a>
									<ul>
										<li>
											<a href='#'>Deep Dropdown 1</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 2</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 3</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 4</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 5</a>
										</li>
									</ul>
								</li>
								<li>
									<a href='#'>Dropdown 2</a>
								</li>
								<li>
									<a href='#'>Dropdown 3</a>
								</li>
								<li>
									<a href='#'>Dropdown 4</a>
								</li>
							</ul>
						</li>
						<li>
							<a href='contact.html'>Contact</a>
						</li>
					</ul>
					<i className='mobile-nav-toggle d-xl-none bi bi-list' />
				</nav>
				<a className='btn-getstarted' href='courses.html'>
					Get Started
				</a>
			</div>
		</header>
	);
};

export default Header;
