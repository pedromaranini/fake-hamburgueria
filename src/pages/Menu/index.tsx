import React from 'react';

import Header from '../../components/Header';

import './styles.css';


function Menu() {
    return (
        <>    
            <Header />

            <div className="snack">
                <div className="img" />
                    <div className="title">
                        <h1>Snack One</h1>
                        <h4>Bread</h4>
                    </div>
            </div>

            <div className="snack">
                <div className="img" />
                    <div className="title">
                        <h1>Snack One</h1>
                        <h4>Bread</h4>
                    </div>
            </div>
            
            <div className="snack">
                <div className="img" />
                    <div className="title">
                        <h1>Snack One</h1>
                        <h4>Bread</h4>
                    </div>
            </div>


        </>
    );
}

export default Menu;