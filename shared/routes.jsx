'use strict';

import React     from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import ActivationsPageContainer from './containers/pages/ActivationsPage.jsx';
import ActivationPageContainer from './containers/pages/ActivationPage.jsx';

import UsersPageContainer from './containers/pages/UsersPage.jsx';
import UserPageContainer from './containers/pages/UserPage.jsx';

export default (
    <Route component={App} >
        <Route component={MainLayout} path='/'>
            <Redirect from='/' to='/ru/activations' />

            <Route component={ActivationsPageContainer} path='/activations' />
            <Route component={ActivationPageContainer} path='/activations/:id' />

            <Route component={UsersPageContainer} path='/users' />
            <Route component={UserPageContainer} path='/users/:id' />
        </Route>
    </Route>
);
