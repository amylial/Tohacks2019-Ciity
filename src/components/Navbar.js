import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#FFFFFF',
    },
    buttonLink: {
        textDecoration: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = ({ authUser }) => {
    console.log(authUser);
    return (
        <div>{authUser ? <NavbarAuth /> : <NavbarNonAuth />}</div>
    );
}



const NavbarAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {/* <li>
      <SignOutButton />
    </li> */}
    </ul>
);

const NavbarNonAuth = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        TITLE
                    </Typography>
                    <MenuButton to={ROUTES.LANDING} text={'Landing'} />
                    <MenuButton to={ROUTES.SIGN_IN} text={'Login'} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const MenuButton = props => {
    const classes = useStyles();
    return (
        <Link className={classes.buttonLink} to={props.to}><Button className={classes.menuButton}>{props.text}</Button></Link>
    );
}

export default Navbar;