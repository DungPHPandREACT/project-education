import { useGetAllCategories } from '../../../../apis/categories/categories.api';
import Category from './Category';

const Categories = () => {
	const { data: categories = [] } = useGetAllCategories();

	return (
		<section id='features' className='features section'>
			<div className='container'>
				<div className='row gy-4'>
					{categories.map((category) => (
						<Category key={category._id} title={category.title} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
