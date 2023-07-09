import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Maintenance from './components/Maintenance'
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Item from './components/SpecProduct'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Products' exact element={<Products/>}/>
          <Route path='/product/:productId' exact element={<Item />}></Route>


          <Route path='/Maintenance' exact element={<Maintenance/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App