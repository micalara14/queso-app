// Css
import './CarWidgets.css';
//React Router
import { Link } from 'react-router-dom';

const CarWidget = () => {
	return (
		<Link to="/cart" className='link-carrito'>
				<div className="div-cart">
			<img src="/images/shp-cart.jpg" alt="carrito de compas" />
			<p>0</p>
		</div>
		</Link>


	);
};

export default CarWidget;
