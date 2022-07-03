//Bootstrap
import { Container, Row } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
//CSS
import './ItemListContainer.css';
//useEffect useState useParams
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Compopnentes y funciones
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/firebase/firestore';

const ItemListContainer = (props) => {
	const [ products, setProducts ] = useState([]);
	const { category } = useParams();
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			setLoading(true);
			getProducts(category).then(response => {
				setProducts(response)
			}).catch(error => {
				console.log(error)
			}).finally(() => {
				setLoading(false)
			})
		},
		[ category ]
	);

	if (loading) {
		return <Spinner animation="border" variant="warning" />;
	}

	return (
		<Container>
			<h1 className="titulo-pagina">{props.saludo}</h1>
			<Row className="row-products">
				<ItemList products={products} />
			</Row>
		</Container>
	);
};

export default ItemListContainer;
