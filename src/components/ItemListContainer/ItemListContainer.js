import { getProducts } from '../../asyncmock';

const ItemListContainer = (props) => {
	return (
		<div>
			<h1>{props.saludo}</h1>
			{/* {products.map((product) => (
				<div>
					{product.name}
					{product.price}
				</div>
			))} */}
		</div>
	);
};

export default ItemListContainer;
