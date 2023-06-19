import React from 'react';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import AboutUs from './Component/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurService from './Component/OurService';
import Blog from './Component/Blog';

function App() {
  return (
    <div className='App'>
    <Navbar/>
      <Routes>
    <Route  path='/HomePage' element={<HomePage/>} />
    <Route  path='/AboutUs' element={<AboutUs />}/>
    <Route  path='/Blog' element={<Blog/>}/>
    <Route  path='/OurService' element={<OurService/>}/>

    </Routes>

    </div>
  );
}

export default App;
