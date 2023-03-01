import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar className='nav'>
          <Container className='mt-3'>
            <LinkContainer to="/">
              <Navbar.Brand>8 Red Fish Creative</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container>
      <Routes>
      <Route path="/product/:slug" element={<ProductScreen/>}></Route>
      <Route path="/" element={<HomeScreen/>}></Route>
      </Routes>
      </Container>
      </main>
      <footer className="text-center">All right reserved</footer>
    </div>
    </BrowserRouter> 
  );
}

export default App;
