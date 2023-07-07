import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Navbar from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Products' exact element={<Products/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App