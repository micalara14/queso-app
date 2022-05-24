const products = [
	{
		id: 1,
		name: 'Cheddar',
		price: 1000,
		description: 'Queso cheddar marca La Serenísima. Ideal para dips y hamburguesas.',
		img: 'https://picsum.photos/200/300/?random',
		stock: 9
	},
	{
		id: 2,
		name: 'Mozzarella',
		price: 2000,
		description: 'Quezo mozarella marca Barraza. Punto de fusión 45ºC.',
		img: 'https://picsum.photos/200/300/?random',
		stock: 8
	},
	{
		id: 3,
		name: 'Provolone',
		price: 3000,
		description: 'Queso provolone marca Santa Rosa. Ideal para asados',
		img: 'https://picsum.photos/200/300/?random',
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
