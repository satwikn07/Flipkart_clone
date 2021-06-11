import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Landing_Page/Home';

const Routes = () => {
    return (
        <div>
        <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/checkout" exact>
               <h2>checkout</h2>
            </Route>
            <Route>
                <h2>Not found !</h2>
            </Route>
        </Switch>
        </div>
    );
};

export default Routes;