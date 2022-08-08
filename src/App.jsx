import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './features/NavBar/NavBar';
import HomeCarousel from './features/HomeCarousel/HomeCarousel';
import HomeCategory from './features/HomeCategories/HomeCategory';
import NewModels from './features/NewModels/NewModels';
import BestSellers from './features/BestSellers/BestSellers';
import Footer from './features/Footer/Footer';
import ProductGrid from './features/Product/ProductGrid';
import DetailedProduct from './features/Product/DetailedProduct/DetailedProduct';
import CartModal from './features/Cart/CartModal/CartModal';

import { getProductData } from './features/Product/ProductSlice';

import './App.css';
import FAQs from './features/FAQs/FAQs';

function App() {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getProductData(''));
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HomeCarousel />
                <HomeCategory />
                <NewModels />
                <BestSellers />
              </>
            }
          />
          <Route path='products' element={<ProductGrid />} />
          <Route path='detailedItem/:id' element={<DetailedProduct />} />
          <Route path='faqs' element={<FAQs />} />
        </Routes>
        <CartModal />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
