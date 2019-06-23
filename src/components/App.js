import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../session';
import * as ROUTES from '../constants/routes';
import AuthUserContext from '../session/context';
import Navbar from './Navbar';
import Landing from './Landing';
import SignIn from './SignIn';
// import SignOut from './SignOut';
import SignUp from './SignUp';
import Home from './Home';
import '../css/App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer:{
        height: '50px',
        width: '100%',
        background: '#FF0000',
        color: '#00FF00'
    }
}));


const Footer = () => {
    const classes = useStyles();

    return(
        <div className={classes.footer}>
            Powered By Pingu
        </div>
    ); 
};

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Router>
                <div id="main">
                    <AuthUserContext.Consumer>
                        {
                            authUser =>
                            <Navbar authUser={authUser} />
                        }
                    </AuthUserContext.Consumer>
                    
                    <Route path={ROUTES.LANDING} exact component={Landing} />
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route path={ROUTES.HOME} component={Home} />

                </div>
                {/* <Footer /> */}
         </Router>
        );
    }
}

export default withAuthentication(App)