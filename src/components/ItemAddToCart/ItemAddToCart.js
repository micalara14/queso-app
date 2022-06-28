/* // Bootstrap
import { Button } from 'react-bootstrap';
//Sweet alert
import swal from 'sweetalert';

const ItemAddToCart = () => {
	const add = () => {
		swal('Agregado al carrito');
	};

	return (
		<div>
			<Button variant="warning" className="botones-navbar" onClick={add}>
				Comprar
			</Button>
		</div>
	);
};

export default ItemAddToCart;
 */