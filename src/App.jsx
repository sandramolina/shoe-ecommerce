import React from 'react';

import NavBar from './features/NavBar/NavBar';
import HomeCarousel from './features/HomeCarousel/HomeCarousel';
import HomeCategory from './features/HomeCategories/HomeCategory';
import Footer from './features/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <HomeCategory />
      <Footer />
    </div>
  );
}

export default App;
