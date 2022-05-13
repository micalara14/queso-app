// Import de Componentes
import CarWidget from '../CarWidget/CarWidget';
// Css
import './NavBar.css';
// Import de Logo
import logo from './queso-logo.png';
// Estilos Prime React
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// Boton Prime React
import { Button } from 'primereact/button';

const NavBar = () => {
	return (
		<nav className="navegacion">
			<div className="divLogo">
				<img src={logo} />
			</div>
			<Button label="Inicio" className="p-button-warning botones-navbar" />
			<Button label="Tienda" className="p-button-warning botones-navbar" />
			<CarWidget />
		</nav>
	);
};

export default NavBar;
