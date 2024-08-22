import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { DefaultLayout } from './layout/DefaultLayout';
import Payment from './pages/Payment';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;