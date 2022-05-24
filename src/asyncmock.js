// import imgprovolone from '../public/images/productos/provolone.JPG';
// import imgmozzarella from '../public/images/productos/mozzarella.jpg';
// import imgcheddar from '../public/images/productos/cheddar.jpg';

const products = [
	{
		id: 1,
		nombre: 'Cheddar',
		precio: 1000,
		descripcion: 'Queso cheddar marca La Serenísima. Ideal para dips y hamburguesas.'
		// img: { imgcheddar }
	},
	{
		id: 2,
		nombre: 'Mozzarella',
		precio: 2000,
		descripcion: 'Quezo mozarella marca Barraza. Punto de fusión 45ºC.',
		// img: { imgmozzarella },
		stock: 10
	},
	{
		id: 3,
		nombre: 'Provolone',
		precio: 3000,
		descripcion: 'Queso provolone marca Santa Rosa. Ideal para asados',
		// img: { imgprovolone },
		stock: 10
	}
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};
