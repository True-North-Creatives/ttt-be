import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './modules/Home/Home';
import Services from './modules/Services/Services';
import Experts from './modules/Experts/Experts';
import Faqs from './modules/Faq/Faqs';
import Payment from './modules/Payment';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/our-experts">
                    <Experts />
                </Route>
                <Route exact path="/faq">
                    <Faqs />
                </Route>
                <Route exact path="/payment">
                    <Payment />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
