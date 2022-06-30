// CSS
import './CarWidgets.css';
//React Router
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CarContext';

const CarWidget = () => {

	const {cart, getQuantity,} = useContext(CartContext)

const cartCount = getQuantity()

	return (
		<div>{cart.length > 0 
			? <Link to="/cart" className='link-carrito'> <div className="div-cart"> <img src="/images/shp-cart.jpg" alt="carrito de compas" /> <p> {cartCount} </p> </div> </Link> 
		: null}</div>
	);
};

export default CarWidget;
