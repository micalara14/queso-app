//CSS
import './App.css';
//Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Imprt Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCart from './components/ItemCart/ItemCart';
import {CartContextProvider} from "./context/CarContext"

function App() {
	return (
		<div className="App">
			<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer saludo="Villa Quesería: Tienda de quesos" />} />
					<Route path="/nacionales" element={<p>hola</p>} />
					<Route path="detail/:id" element={<ItemDetailContainer />} />
					<Route
						path="category/:category"
						element={<ItemListContainer saludo="Villa Quesería: Tienda de quesos - Filtrados por categoría" />}
					/>
					<Route path='/cart' element={<ItemCart />} />
				</Routes>
			</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
