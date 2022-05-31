import { useState } from 'react';
// CSS
import './ItemCount.css';
// Bootstrap
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock }) => {
	const [ count, setContador ] = useState(1);

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
		<div className="div-count">
			<Button variant="warning" className="botones-navbar" onClick={subtraction}>
				-
			</Button>
			<p>{count}</p>
			<Button variant="warning" className="botones-navbar" onClick={addition}>
				+
			</Button>
		</div>
	);
};

export default ItemCount;
