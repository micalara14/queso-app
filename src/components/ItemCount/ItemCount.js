import { useState } from 'react';
// CSS
import './ItemCount.css';
// Bootstrap
import { Button } from 'react-bootstrap';

const ItemCount = () => {
	const [ contador, setContador ] = useState(0);

	const sumar = () => {
		// Suponiendo que el stock es de 25 unidades
		if (contador < 10) {
			setContador(contador + 1);
		}
	};

	const restar = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<div className="div-contador">
			<Button variant="warning" className="botones-navbar" onClick={restar}>
				-
			</Button>
			<p>{contador}</p>
			<Button variant="warning" className="botones-navbar" onClick={sumar}>
				+
			</Button>
		</div>
	);
};

export default ItemCount;
