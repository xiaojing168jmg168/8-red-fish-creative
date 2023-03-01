import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">8 Red Fish Creative</Link>
        </div>
       
      </header>
      <main>
      <Routes>
      <Route path="/product/:slug" element={<ProductScreen/>}></Route>
      <Route path="/" element={<HomeScreen/>}></Route>
      </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter> 
  );
}

export default App;
