import Footer from './Footer';
import Header from './Header';
import PageTitle from './PageTitle';

const DefaultPage = (props) => {
	const { children } = props;

	return (
		<>
			<Header />
			<div className='main'>
				<PageTitle />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default DefaultPage;
