// Css
import './CarWidgets.css';
//React Router
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CarContext';

const CarWidget = () => {

	const {cart} = useContext(CartContext)

	return (
		<div>{cart.length > 0 
			? <Link to="/cart" className='link-carrito'> <div className="div-cart"> <img src="/images/shp-cart.jpg" alt="carrito de compas" /> </div> </Link>
		: null}</div>

		
		


	);
};

export default CarWidget;
