import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Menu from './pages/Menu';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/menu" component={Menu} />
        </BrowserRouter>
    );
}

export default Routes;