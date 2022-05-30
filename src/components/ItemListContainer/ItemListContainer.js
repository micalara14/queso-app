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
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			setLoading(true);

			if (!category) {
				getProducts()
					.then((response) => {
						setProducts(response);
					})
					.catch((error) => {
						console.log(error);
					})
					.finally(() => {
						setLoading(false);
					});
			} else {
				getProductByCategory(category)
					.then((response) => {
						setProducts(response);
					})
					.catch((error) => {
						console.log(error);
					})
					.finally(() => {
						setLoading(false);
					});
			}
		},
		[ category ]
	);

	if (loading) {
		return <h1> Cargando... </h1>;
	}

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
