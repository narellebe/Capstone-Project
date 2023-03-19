import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Reservations from './pages/reservations';
import OrderOnline from './pages/order-online';
import Login from './pages/login';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/reservations' component={Reservations} />
        <Route path='/order-online' component={OrderOnline} />
        <Route path='/login' component={Login} />
      </Routes>
    </Router>
  );
}
  
export default App;
