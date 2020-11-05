import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function Menu() {
    return (
        <>    
            <Header />

            <div className="snack">
                <div className="test"  />
                    <div className="title">
                        <h1>Snack One</h1>
                        <h5>Pão com ovo e mortadela</h5>
                    </div>
            </div>  

        </>
    );
}

export default Menu;