//UseEffect UseState
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncmock';
//React dom
import { useParams } from 'react-router-dom';
//Firebase
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
	const [ productById, setProductById ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setLoading(true);


		getDoc(doc(db, "productos", id)).then(response => {
			console.log(response)
			const product = {id: response.id, ...response.data()}
			setProductById(product)
		}).catch(error => {
			console.log(error)
		}).finally(() => {
			setLoading(false)
		})

/* 		getProductsById(id)
			.then((response) => {
				setProductById(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			}); */
	}, [id]);

	if (loading) {
		return <h1> Cargando... </h1>;
	}

	return <ItemDetail {...productById} />;
};

export default ItemDetailContainer;
