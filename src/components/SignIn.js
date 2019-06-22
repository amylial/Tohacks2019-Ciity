import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import * as ROUTES from '../constants/routes';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignInFormBase = props => {
    const classes = useStyles();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                setError(null);
                props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                setError(error);
            });

        event.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={(event) => onSubmit(event)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
              </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                  </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        {error && <p>{error.message}</p>}
                    </Grid>
                </form>
            </div>
        </Container>
    );
}


// class SignInFormBase extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { ...INITIAL_STATE };
//     }

//     onSubmit = event => {
//         const { email, password } = this.state;

//         this.props.firebase
//             .doSignInWithEmailAndPassword(email, password)
//             .then(() => {
//                 this.setState({ ...INITIAL_STATE });
//                 this.props.history.push(ROUTES.HOME);
//             })
//             .catch(error => {
//                 this.setState({ error });
//             });

//         event.preventDefault();
//     };

//     onChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     render() {
//         const { email, password, error } = this.state;

//         const isInvalid = password === '' || email === '';

//         return (
//             <form onSubmit={this.onSubmit}>
//                 <input
//                     name="email"
//                     value={email}
//                     onChange={this.onChange}
//                     type="text"
//                     placeholder="Email Address"
//                 />
//                 <input
//                     name="password"
//                     value={password}
//                     onChange={this.onChange}
//                     type="password"
//                     placeholder="Password"
//                 />
//                 <button disabled={isInvalid} type="submit">
//                     Sign In
//         </button>

//                 {error && <p>{error.message}</p>}
//             </form>
//         );
//     }
// }

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };