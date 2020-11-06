import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import DashboardRestaurant from '../pages/DashboardRestaurant';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/restaurante" component={DashboardRestaurant} />
  </Switch>
);

export default Routes;
