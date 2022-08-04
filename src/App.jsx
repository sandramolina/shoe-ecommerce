import React from 'react';

import NavBar from './features/NavBar/NavBar';
import HomeCarousel from './features/HomeCarousel/HomeCarousel';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <Footer />
    </div>
  );
}

export default App;
