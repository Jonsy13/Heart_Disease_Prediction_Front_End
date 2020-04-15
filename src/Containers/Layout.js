import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './AboutUs';
import Footer from "../Components/Footer/Footer";
import Nav from '../Components/Navigation/Navigation';

class Layout extends Component {
     render() {
        return (<div>
            <Nav />
            <Switch>
                <Route path="/AboutUs" render={() => <About />} />
                <Route path="/" render={() => <Home />} />

            </Switch>
            <Footer />
        </div>

        );
    }

};

export default Layout;
