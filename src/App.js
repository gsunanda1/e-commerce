import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import ProductListPage from './components/ProductListPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import ProductDetailPage from './components/ProductDetailPage';
import React, { Suspense } from 'react';
import CartProvider from './context/cart.context';
const ProductListPage = React.lazy(()=> import('./components/ProductListPage'));
const ProductDetailPage = React.lazy(()=> import('./components/ProductDetailPage'));
function App() {
  return (
    <div className="App">
      <CartProvider>
      {/* in header we need only read from cart */}
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Suspense element={"Loading..."}><ProductListPage/></Suspense>}></Route>
        <Route path="/product/:productId" element = {<Suspense element={"Loading..."}><ProductDetailPage/></Suspense>}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
