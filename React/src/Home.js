
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <br />
      <div className="karty">
        <Cards className="karta" />
        <Cards className="karta" />
        <Cards className="karta" />
        <Cards className="karta" />
      </div>
    </div>
  );
};

export default Home;