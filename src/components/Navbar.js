import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

// import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

import { makeStyles } from '@material-ui/core/styles';
import { withFirebase } from '../firebase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#000000',
    },
    buttonLink: {
        textDecoration: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
    }
}));

const Navbar = ({ authUser, firebase }) => {
    console.log(authUser);
    return (
        <div>{authUser ? <NavbarAuth firebase={firebase} /> : <NavbarNonAuth />}</div>
    );
};


const NavbarAuth = ({ firebase }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const logout = (firebase) =>{
        handleMenuClose();
        firebase.doSignOut();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={event => logout(firebase)}>Logout</MenuItem>
        </Menu>
      );

    return(
        <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
            <Toolbar >
                <Typography variant="h6" className={classes.title}>
                    TITLE
                </Typography>
                <MenuButton to={ROUTES.LANDING} text={'Landing'} />
                <MenuButton to={ROUTES.HOME} text={'Home'} />
                {/* <MenuButton to={ROUTES.ACCOUNT} text={'Account'} /> */}
                <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
        {renderMenu}
    </div>
    );
}


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

export default withFirebase(Navbar);