import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Main from '../components/main/Main'
import About from "../pages/About";
import Contact from "../pages/Contact"
import Services from '../pages/Services'
import Rider from '../pages/Rider'
import Carrers from "../pages/Carrers"


function AllRoutes() {
  return (
    <div className='allroutes'>
        <Routes >
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Services />} />
            <Route path='/rider' element={<Rider />} />
            <Route path='/career' element={<Carrers />} />
        </Routes>
      
    </div>
  )
}


export default AllRoutes
