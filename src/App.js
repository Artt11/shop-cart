import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigate';
import { ShopContextProvider } from './context/shop-context';
import { Shop } from './pages/Shop';
import { Cart } from './pages/cart/Cart';

function App() {
  return (
    <div className='app'>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/contact" element={<></>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
