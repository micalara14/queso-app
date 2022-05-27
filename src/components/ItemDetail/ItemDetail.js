import './ItemDetail.css';

const ItemDetail = ({ product }) => {
	return (
		<div className="item-detail">
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
		</div>
	);
};

export default ItemDetail;
