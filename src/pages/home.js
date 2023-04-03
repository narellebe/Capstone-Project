import React from 'react';
import Header from '../../src/Components/Header'
import Specials from '../../src/Components/Specials'
import '../../src/Components/App.css';
import Testimonials from '../../src/Components/Testimonials'
import Footer from '../../src/Components/Footer'
import Main from '../../src/Components/Main'
import Navbar from '../Navbar';

  
const Home = () => {
  return (
    <>
      <Navbar />
    <Header />
  
    <Specials />
      
    <Testimonials />
    <Main />
    <Footer />
    </>
  );
};
  
export default Home;