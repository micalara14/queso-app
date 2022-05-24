import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, price, img, stock }) => {
	return (
		<div key={id}>
			<img src={img} />
			<p>{name}</p>
			<p>{price}</p>
			<ItemCount stock={stock} />
		</div>
	);
};

export default Item;
