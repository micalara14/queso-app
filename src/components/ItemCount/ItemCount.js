import { useState } from 'react';
// CSS
import './ItemCount.css';
// Bootstrap
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial=1, onConfirm }) => {
	const [ count, setContador ] = useState(initial);

	const addition = () => {
		if (count < stock) {
			setContador(count + 1);
		}
	};

	const subtraction = () => {
		if (count > 1) {
			setContador(count - 1);
		}
	};

	return (
		<div>
			<div className="div-count">
			<Button variant="warning" className='botones-count' onClick={subtraction}>
				-
			</Button>
			<p>{count}</p>
			<Button variant="warning" className='botones-count' onClick={addition}>
				+
			</Button>
			</div>
			<Button variant="warning" className='botones-count' onClick={() => onConfirm(count)} >
				Añadir al carrito
			</Button>
		</div>
	);
};

export default ItemCount;
