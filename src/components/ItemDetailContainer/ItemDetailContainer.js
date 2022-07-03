//useEffect useState
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
//React dom
import { useParams } from 'react-router-dom';
//Bootstrap
import { Spinner } from 'react-bootstrap';
//Firebase
/* import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'; */
import { getDetail } from '../../services/firebase/firestore';

const ItemDetailContainer = () => {
	const [ productById, setProductById ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		getDetail(setProductById, id).catch(error => {
			console.log(error)
		}).finally(() => {
			setLoading(false)
		})
	}, [id]);

	if (loading) {
		return <Spinner animation="border" variant="warning" />;
	}

	return <ItemDetail {...productById} />;
};

export default ItemDetailContainer;
