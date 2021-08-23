import React, { Suspense } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import UnderBanner from './components/UnderBanner/UnderBanner';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Header />
        <Banner />
        <UnderBanner />
        <Home />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
