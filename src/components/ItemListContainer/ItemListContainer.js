import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';

const ItemListContainer = (props) => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		getProducts().then((response) => {
			setProducts(response);
		});
	}, []);

	return (
		<div>
			<h1>{props.saludo}</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
