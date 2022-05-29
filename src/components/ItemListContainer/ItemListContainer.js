//Bootstrap
import { Container, Row } from 'react-bootstrap';
//CSS
import './ItemListContainer.css';
//useEffect useState useParams
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Compopnentes y funciones
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { getProductByCategory } from '../../asyncmock';

const ItemListContainer = (props) => {
	const [ products, setProducts ] = useState([]);
	const { category } = useParams();

	useEffect(
		() => {
			if (!category) {
				getProducts().then((response) => {
					setProducts(response);
				});
			} else {
				getProductByCategory(category).then((response) => {
					setProducts(response);
				});
			}
		},
		[ category ]
	);

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
