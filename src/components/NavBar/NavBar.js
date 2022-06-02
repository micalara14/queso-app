// CSS
import './NavBar.css';
// Bootstrap
// import { Button } from 'react-bootstrap';
//React Router
import { Link } from 'react-router-dom';
// Import de Logo
import logo from './queso-logo.png';
// Import de Componentes
import CarWidget from '../CarWidget/CarWidget';
import { Router } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navegacion">
			<div className="divLogo">
				<img src={logo} />
			</div>
			<Link to="./" className="links-navbar">
				{' '}
				Inicio{' '}
			</Link>
			<Link to="/category/nacional" className="links-navbar">
				{' '}
				Nacionales{' '}
			</Link>
			<Link to="/category/importado" className="links-navbar">
				{' '}
				Importados {' '}
			</Link>

			<CarWidget />
		</nav>
	);
};

export default NavBar;
