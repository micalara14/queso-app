//CSS
import './ItemDetail.css';
//useState y context
import { useState, useContext } from 'react';
import CartContext from '../../context/CarContext';
//React-dom-router
import { Link } from 'react-router-dom'
//Componentes
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, description, price, stock }) => {

	const [quantity, setQuantity] = useState(0)

	const { addItem, getProduct } = useContext(CartContext)

	const onAdd = (quantity) => {
		setQuantity(quantity)
		addItem({id, name, price, quantity})
	}

	return (
		<div className="item-detail">
			<h2>{name}</h2>
			<img src={img} className="img-detail" />
			<p>{description}</p>
			<p>${price}</p>
			{quantity > 0 ? <Link to="/cart"> Finalizar compra </Link> : <ItemCount onConfirm={onAdd} stock={stock} initial={getProduct(id)?.quantity}/>}
		</div>
	);
};

export default ItemDetail;
