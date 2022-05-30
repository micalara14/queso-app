const products = [
	{
		id: '1',
		name: 'Cheddar',
		category: 'nacional',
		price: 1000,
		description: 'Queso cheddar marca La Serenísima (nacional). Ideal para dips y hamburguesas.',
		img: '/images/cheddar.jpg',
		stock: 9
	},
	{
		id: '2',
		name: 'Mozzarella',
		category: 'nacional',
		price: 2000,
		description: 'Quezo mozarella marca Barraza (nacional). Punto de fusión 45ºC.',
		img: '/images/mozzarella.jpg',
		stock: 8
	},
	{
		id: '3',
		name: 'Roquefort',
		category: 'importado',
		price: 3000,
		description: 'Queso roquefort marca Ille de France (importado). Ideal para darle un toque a cualquier comida.',
		img: '/images/roquefort.jpg',
		stock: 7
	},
	{
		id: '4',
		name: 'Burrata',
		category: 'nacional',
		price: 1000,
		description: 'Queso cheddar marca Arrivata (nacional). Peso: 250gr.',
		img: '/images/burrata.jpg',
		stock: 9
	},
	{
		id: '5',
		name: 'Reggianito',
		category: 'nacional',
		price: 2000,
		description: 'Quezo reggianito marca La Paulina (nacional). Ideal para pastas o para gratinar.',
		img: '/images/reggianito.jpg',
		stock: 8
	},
	{
		id: '6',
		name: 'Brie',
		category: 'importado',
		price: 3000,
		description: 'Queso brie marca Wapi (importado). Con 120 días de maduración',
		img: '/images/brie.jpg',
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

export const getProductByCategory = (category) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter((product) => product.category === category));
		}, 2000);
	});
};
