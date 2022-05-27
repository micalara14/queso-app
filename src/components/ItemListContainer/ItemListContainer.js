//Bootstrap
import { Container, Row } from 'react-bootstrap';
//CSS
import './ItemListContainer.css';
//UseEffect UseState
import { useState, useEffect } from 'react';
//Compopnentes y funciones
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
		<Container>
			<h1>{props.saludo}</h1>
			<Row className="row-products">
				<ItemList products={products} />
			</Row>
		</Container>
	);
};

export default ItemListContainer;
