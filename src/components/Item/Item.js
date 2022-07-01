//Bootstrap
import { Col } from 'react-bootstrap';
//React dom
import { Link } from 'react-router-dom';
//CSS
import './Item.css';


const Item = ({ id, name, price, img }) => {
	return (
		<Col md={3} key={id} className="item-product">
			<img src={img} />
			<h3>{name}</h3>
			<p className='precio-item'>${price}</p>
			<Link className="link-ver-mas" to={`/detail/${id}`}>
				{' '}
				<p className="link-ver-mas-p"> Ver + </p>{' '}
			</Link>
		</Col>
	);
};

export default Item;
