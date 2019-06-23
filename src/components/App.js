import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../session';
import * as ROUTES from '../constants/routes';
import AuthUserContext from '../session/context';
import Navbar from './Navbar';
// import Landing from './Landing';
import SignIn from './SignIn';
// import SignOut from './SignOut';
import SignUp from './SignUp';
import Home from './Home';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <div>
                    <AuthUserContext.Consumer>
                        {
                            authUser =>
                            <Navbar authUser={authUser} />
                        }
                    </AuthUserContext.Consumer>

                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route path={ROUTES.HOME} component={Home} />
                </div>
            </Router>
        );
    }
}

export default withAuthentication(App)