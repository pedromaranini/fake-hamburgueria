import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

import logoImg from '../../assets/logo-hamburgueria.svg';

import './styles.css';


function Landing() {
    return (
        <div id="page-landing">
            <div className="home-container">
                <img src={logoImg} width="700" height="700" alt="Hamburguer" />
            </div>

            <div className="text">
                <h1>Experimente nossos deliciosos lanches</h1>
                <p>Acesse o cardápio e faça seu pedido via Whatsapp</p>
            </div>

            <div className="location">
                    <div className="icon">
                        < HiLocationMarker size={35} />
                    </div>
                <strong>Mongaguá </strong>
                <span>São Paulo</span>
            </div>

                    <Link to="/menu" className="buttons-container">
                        < FiArrowRight size={26} color="#e8ffff" />
                    </Link>
                
        </div>
    );
    }

export default Landing;