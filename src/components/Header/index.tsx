import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo-hamburgueria.svg';

function Header() {
  return (
    <div id="header">
      <img src={logoImg} alt="Hamburguer" />
        <div className="back-icon" >
          <Link to="/">
            <FiArrowLeft size={30} color="#e8ffff"/>
          </Link>
        </div>
    </div>
  );
}

export default Header;
