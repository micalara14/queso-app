import './NavBar.css';
import CarWidget from '../CarWidget/CarWidget';

import logo from './queso-logo.png';

const NavBar = () => {
	return (
		<nav className="navegacion">
			<div className="divLogo">
				<img src={logo} />
				<h1>Quesitos</h1>
			</div>
			<button> Inicio </button>
			<button> Tienda </button>
			<CarWidget />
		</nav>
	);
};

export default NavBar;
