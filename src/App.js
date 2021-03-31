import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../src/styles.css';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />      
      <Main />
      <Footer />
    </Router>

  );
}

export default App;
