//Bootstrap
import { Col } from 'react-bootstrap';
//CSS
import './Item.css';
//Componentes
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, price, img, stock }) => {
	return (
		<Col md={3} key={id} className="item-product">
			<img src={img} />
			<h3>{name}</h3>
			<p>${price}</p>
			<ItemCount stock={stock} />
		</Col>
	);
};

export default Item;
