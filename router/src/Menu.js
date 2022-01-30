import React from 'react'
import { NavLink } from "react-router-dom";

import './App.css'

const Menu = () => {
    return (
        <div className='nav'>

        <nav>

        <ul>
                  <li><NavLink exact activeClassName="active" to="/contact">contact</NavLink></li>
                  <li><NavLink exact activeClassName="active" to="/about">about</NavLink></li>
                  <li><NavLink exact activeClassName="active" to="/service">servise</NavLink></li>
                 
              </ul>
        </nav>
              
        </div>
    )
}

export default Menu;
