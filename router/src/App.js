import React from 'react'

import { Routes, Route} from "react-router-dom";

import About from './About'
import Contact from './Contact'

import Menu from './Menu'
import Error from './Error';
import Service from './Service';


const App = () => {
  return (
    <div>
       
 
         <Menu />
        <Routes>
        <Route  exact path="/contact" element={<Contact name="contact" />} />
        <Route   path="/about" element={<About name="about"/>} />
        <Route   path="/service/:fname/:lname" element={<Service name="service"/>} />
        <Route   path="*" element={<Error name="service"/>} />
       
       
      </Routes>  


        

     
     


    </div>
  )
}

export default App;




