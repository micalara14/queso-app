//CSS
import './App.css';
//Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Imprt Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer saludo="Hola! Tienda de quesitos" />
			<ItemDetailContainer />
		</div>
	);
}

export default App;
