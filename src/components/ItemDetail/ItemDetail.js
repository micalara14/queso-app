//CSS
import './ItemDetail.css';
//Componentes
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
	return (
		<div className="item-detail">
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<ItemCount stock={product.stock} />
		</div>
	);
};

export default ItemDetail;
