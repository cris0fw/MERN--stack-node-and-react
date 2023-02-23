/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {NavLink} from 'react-router-dom'
 
const Navigation = () => {
const [menu, setMenu] = useState(false)

  return <header>
      <nav className='nav'>
          <figure className='logo__figure'>
              <img className='logo__img' src={require("../img/logo.png")} alt="logo de sistema" />
          </figure>

          <ul className={`nav__ul ${menu === true ? "show" : ""}`}>
            <li className='nav__li'><NavLink className='nav__link' to="/">Inicio</NavLink></li>
            <li className='nav__li'><NavLink className='nav__link' to="/createNote">Crear nota</NavLink></li>
            <li className='nav__li'><NavLink className='nav__link' to="/createUser">Crear usuario</NavLink></li>
          </ul>

          <span className='menu' onClick={() => setMenu(!menu)}>
            <HiMenu fontSize={25} />
          </span>
      </nav>
  </header>
}

export default Navigation