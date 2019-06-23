import React from 'react';
import bg from './splash.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Center from 'react-center'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade'
import { fontFamily } from '@material-ui/system';

const styles = {
    paperContainer: {
        backgroundImage: `url(${bg})`,
        opacity: 0.8,
        height: window.innerHeight - 64,
    },

    Inspiration: {
        
        paddingTop: 160,
        textDecoration: 'none',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: '75px',
        fontFamily: 'Monoton',
        
    },
};
    export default class Third extends React.Component{
    render(){
        return(
        <Paper style={styles.paperContainer}>
            <Link to="/SignIn">
                    <Typography style={styles.Inspiration}>
                        <Center>
                            HERE
                        </Center>
                    </Typography>
                </Link>
        </Paper>
        )


    }
}