//UseEffect UseState
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncmock';
//React dom
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [ productById, setProductById ] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		getProductsById(id).then((response) => {
			setProductById(response);
		});
	}, []);

	return <ItemDetail product={productById} />;
};

export default ItemDetailContainer;
