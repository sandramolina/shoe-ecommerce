import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import NavBar from './features/NavBar/NavBar';
import HomeCarousel from './features/HomeCarousel/HomeCarousel';
import HomeCategory from './features/HomeCategories/HomeCategory';
import NewModels from './features/NewModels/NewModels';
import BestSellers from './features/BestSellers/BestSellers';
import Footer from './features/Footer/Footer';

import { getProductData } from './features/Product/ProductSlice';

import './App.css';

function App() {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getProductData(''));
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <HomeCategory />
      <NewModels />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default App;
