//CSS
import './App.css';
//Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Imprt Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer saludo="Hola! Tienda de quesitos" />
		</div>
	);
}

export default App;
