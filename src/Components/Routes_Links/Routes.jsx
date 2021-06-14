import React from 'react';
import { Route, Switch } from 'react-router';
import { AddToCart } from '../AddToCart/AddToCart';
import Checkout_Login_Page from '../Checkout.jsx/Checkout_Login_Page';
import Home from '../Landing_Page/Home';
import { The_page } from '../Productdescription/The_page';

const Routes = () => {
    return (
        <div>
        <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/product_description">
               <The_page />
            </Route>
            <Route path="/viewcart">
               <AddToCart />
            </Route>
            <Route path="/checkout" exact>
               <Checkout_Login_Page />
            </Route>
            <Route>
                <h2>Not found !</h2>
            </Route>
        </Switch>
        </div>
    );
};

export default Routes;