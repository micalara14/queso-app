//Bootstrap
import { Col } from 'react-bootstrap';
//React dom
import { Link } from 'react-router-dom';
//CSS
import './Item.css';
//Componentes
/* import ItemCount from '../ItemCount/ItemCount';
import ItemAddToCart from '../ItemAddToCart/ItemAddToCart'; */

const Item = ({ id, name, price, img, stock }) => {
	return (
		<Col md={3} key={id} className="item-product">
			<img src={img} />
			<h3>{name}</h3>
			<p>${price}</p>
			<Link to={`/detail/${id}`}>
				{' '}
				<p className="link-ver-mas"> Ver + </p>{' '}
			</Link>
			{/* <ItemCount stock={stock} />
			<ItemAddToCart /> */}
		</Col>
	);
};

export default Item;
