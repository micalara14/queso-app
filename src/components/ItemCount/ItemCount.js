import { useState } from 'react';
// CSS
import './ItemCount.css';
// Bootstrap
import { Button } from 'react-bootstrap';

const ItemCount = (props) => {
	const [ counter, setCounter ] = useState(0);

	const addition = () => {
		if (counter < props.stock) {
			setCounter(counter + 1);
		}
	};

	const subtraction = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<div className="div-counter">
			<Button variant="warning" className="botones-navbar" onClick={subtraction}>
				-
			</Button>
			<p>{counter}</p>
			<Button variant="warning" className="botones-navbar" onClick={addition}>
				+
			</Button>
		</div>
	);
};

export default ItemCount;
