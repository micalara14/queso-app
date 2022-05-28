const products = [
	{
		id: '1',
		name: 'Cheddar',
		price: 1000,
		description: 'Queso cheddar marca La Serenísima. Ideal para dips y hamburguesas.',
		img: './images/cheddar.jpg',
		stock: 9
	},
	{
		id: '2',
		name: 'Mozzarella',
		price: 2000,
		description: 'Quezo mozarella marca Barraza. Punto de fusión 45ºC.',
		img: './images/mozzarella.jpg',
		stock: 8
	},
	{
		id: '3',
		name: 'Roquefort',
		price: 3000,
		description: 'Queso roquefort marca Ille de France. Ideal para darle un toque a cualquier comida.',
		img: './images/roquefort.jpg',
		stock: 7
	},
	{
		id: '4',
		name: 'Cheddar',
		price: 1000,
		description: 'Queso cheddar marca La Serenísima. Ideal para dips y hamburguesas.',
		img: './images/cheddar.jpg',
		stock: 9
	},
	{
		id: '5',
		name: 'Mozzarella',
		price: 2000,
		description: 'Quezo mozarella marca Barraza. Punto de fusión 45ºC.',
		img: './images/mozzarella.jpg',
		stock: 8
	},
	{
		id: '6',
		name: 'Roquefort',
		price: 3000,
		description: 'Queso roquefort marca Ille de France. Ideal para darle un toque a cualquier comida',
		img: './images/roquefort.jpg',
		stock: 7
	}
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

export const getProductsById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find((product) => product.id === id));
		}, 2000);
	});
};
