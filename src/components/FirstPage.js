import React from 'react';
import bg from './splash.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Center from 'react-center'
import Fade from 'react-reveal/Fade'
import { fontFamily } from '@material-ui/system';
import { Link } from "react-router-dom";

const styles = {
    paperContainer: {
        backgroundImage: `url(${bg})`,
        opacity: 0.8,
        height: window.innerHeight -64 ,
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


export default class First extends React.Component {
    render() {
        return (
            <Paper style={styles.paperContainer}>
                <Typography style={styles.Inspiration}>
                    <Fade top>
                        <Center>
                        Tentative Title
                        </Center>
                    </Fade>
                </Typography>
            </Paper>
        )
    }
}