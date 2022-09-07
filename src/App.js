
import './App.css';
import CartProvider from './context/CartProvider';
import Rutas from "./routes/Rutas.jsx";



function App() {
  return (
    <div className="app">
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;
