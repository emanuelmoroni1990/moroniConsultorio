import React from 'react'
import logoImg from '../img/logo.png'
import 'bootstrap/dist/css/bootstrap.css';

function BarraNavegacionBrand () {
  return (
    <a className="navbar-brand">
      <img src={logoImg} alt="" width="50" height="40"></img>
    </a>
  )
}

export default BarraNavegacionBrand;