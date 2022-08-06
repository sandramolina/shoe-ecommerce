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

import { getProductData } from './features/Product/ProductSlice';

import './App.css';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
