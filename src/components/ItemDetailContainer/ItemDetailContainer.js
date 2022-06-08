//UseEffect UseState
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncmock';
//React dom
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [ productById, setProductById ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		getProductsById(id)
			.then((response) => {
				setProductById(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <h1> Cargando... </h1>;
	}

	return <ItemDetail {...productById} />;
};

export default ItemDetailContainer;
