import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../session';
import * as ROUTES from '../constants/routes';
import Navbar from './Navbar';
// import Landing from './Landing';
import SignIn from './SignIn';
// import SignOut from './SignOut';
import SignUp from './SignUp';

const App = () => {

    return (
        <Router>
            <div>
                <Navbar />

                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
            </div>
        </Router>
    );
}

export default withAuthentication(App)