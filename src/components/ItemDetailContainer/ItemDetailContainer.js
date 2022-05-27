//UseEffect UseState
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncmock';

const ItemDetailContainer = () => {
	const [ productById, setProductById ] = useState([]);

	useEffect(() => {
		getProductsById().then((response) => {
			setProductById(response);
		});
	}, []);

	return <ItemDetail product={productById} />;
};

export default ItemDetailContainer;
