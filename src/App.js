// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Footer from './components/Footer';
import Riwayat from './components/Riwayat';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Body />
      <Riwayat />
      <About />
      <Footer/>
    </Router>
  );
};

export default App;
