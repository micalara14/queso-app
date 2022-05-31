//CSS
import './ItemDetail.css';
//Componentes
import ItemCount from '../ItemCount/ItemCount';
import ItemAddToCart from '../ItemAddToCart/ItemAddToCart';

const ItemDetail = ({ product }) => {
	return (
		<div className="item-detail">
			<h2>{product.name}</h2>
			<img src={product.img} className="img-detail" />
			<p>{product.description}</p>
			<p>${product.price}</p>
			<ItemCount stock={product.stock} />
			<ItemAddToCart />
		</div>
	);
};

export default ItemDetail;
