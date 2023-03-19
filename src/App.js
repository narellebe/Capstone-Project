import React from 'react';
import './Components/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Reservations from './pages/reservations';
import OrderOnline from './pages/order-online';
import Header from './Components/Header'
import Specials from './Components/Specials'
import Testimonials from './Components/Testimonials'
import Main from './Components/Main'

  
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/reservations' component={Reservations} />
        <Route path='/order-online' component={OrderOnline} />
      </Routes>
    </Router>
    

    <Header />
    <Specials />
    <Testimonials />
    <Main />
    
    </>
  );
}
  
export default App;
