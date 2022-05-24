import Item from '../Item/Item';

const ItemList = ({ products }) => {
	return products.map((prod) => (
		<Item key={prod.id} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock} />
	));
};

export default ItemList;