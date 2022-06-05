//CSS
import './ItemDetail.css';
//useState
import { useState } from 'react';
//React-dom-router
import { Link } from 'react-router-dom'
//Componentes
import ItemCount from '../ItemCount/ItemCount';
/* import ItemAddToCart from '../ItemAddToCart/ItemAddToCart'; */

const ItemDetail = ({ product }) => {

	const [quantity, setQuantity] = useState(0)

	const onAdd = (count) => {
		setQuantity(count)
	}
	console.log(quantity)

	return (
		<div className="item-detail">
			<h2>{product.name}</h2>
			<img src={product.img} className="img-detail" />
			<p>{product.description}</p>
			<p>${product.price}</p>
			{quantity > 0 ? <Link to="/cart"> Finalizar compra </Link> : <ItemCount onConfirm={onAdd} stock={product.stock} />}
		</div>
	);
};

export default ItemDetail;
