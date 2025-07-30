import { Input, Modal } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLogin } from '../../apis/auth/auth.api';

const Header = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [formValue, setFormValue] = useState({
		email: '',
		password: '',
	});

	const { mutate: login } = useLogin({
		onSuccess: (variable, response) => {
			console.log('variable: ', variable);
			console.log('response: ', response);
		},
		onError: (error) => {
			console.log(error.response.data.message);
		},
	});

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	const handleChangeInput = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handleLogin = () => {
		login(formValue);
	};

	return (
		<header id='header' className='header d-flex align-items-center sticky-top'>
			<div className='container-fluid container-xl position-relative d-flex align-items-center'>
				<a href='index.html' className='logo d-flex align-items-center me-auto'>
					<h1 className='sitename'>Mentor</h1>
				</a>
				<nav id='navmenu' className='navmenu'>
					<ul>
						<li>
							<NavLink to='/'>
								Home
								<br />
							</NavLink>
						</li>
						<li>
							<NavLink to='/about'>
								About
								<br />
							</NavLink>
						</li>
						<li>
							<NavLink to='/courses'>
								Courses
								<br />
							</NavLink>
						</li>
						<li>
							<NavLink to='/teachers'>
								Teachers
								<br />
							</NavLink>
						</li>
						<li>
							<NavLink to='/events'>
								Events
								<br />
							</NavLink>
						</li>
						<li>
							<NavLink to='/contacts'>
								Contacts
								<br />
							</NavLink>
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
					</ul>
					<i className='mobile-nav-toggle d-xl-none bi bi-list' />
				</nav>
				<button
					onClick={handleOpenModal}
					className='btn-getstarted'
					style={{ border: 'none' }}
				>
					Login
				</button>
			</div>
			<Modal
				title='Form login'
				open={isOpenModal}
				onOk={handleLogin}
				onCancel={handleCloseModal}
				okText='Login'
				cancelText='Cancel'
				maskClosable={false}
			>
				<div className='d-flex gap-3 flex-column'>
					<div>
						<label>Email</label>
						<Input
							value={formValue.email}
							name='email'
							type='text'
							placeholder='Enter your email...'
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<label>Password</label>
						<Input.Password
							value={formValue.password}
							name='password'
							type='password'
							placeholder='Enter your password...'
							onChange={handleChangeInput}
						/>
					</div>
				</div>
			</Modal>
		</header>
	);
};

export default Header;
