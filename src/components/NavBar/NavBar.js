// CSS
import './NavBar.css';
// Bootstrap
import { Button } from 'react-bootstrap';
// Import de Logo
import logo from './queso-logo.png';
// Import de Componentes
import CarWidget from '../CarWidget/CarWidget';

const NavBar = () => {
	return (
		<nav className="navegacion">
			<div className="divLogo">
				<img src={logo} />
			</div>
			<Button variant="warning" className="botones-navbar">
				Inicio
			</Button>
			<Button variant="warning" className="botones-navbar">
				Tienda
			</Button>
			<CarWidget />
		</nav>
	);
};

export default NavBar;
