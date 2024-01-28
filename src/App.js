import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Product from './ProductDetails/product';
import './App.css';

function App() {
  return (
   <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product/:barcode" element={<Product/>}/>
    </Routes>
   </HashRouter>
    
  );
}

export default App;
