import React from 'react';
import bg from './meme.jpg';
import {bounce} from 'react-animations'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Center from 'react-center'
import Fade from 'react-reveal/Fade'
import styled, {keyframes} from 'styled-components'
import { Link } from "react-router-dom";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infiinte`;

const styles = {
paperContainer: {
  backgroundImage: `url(${bg})`,
  opacity: 0.8,
  height: window.innerHeight,
},

Inspiration: {
        
  paddingTop: 160,
  textDecoration: 'none',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize:  '100px',
  fontFamily: 'Roboto',
  
},
}



export default class Second extends React.Component {

    render() {
        return (
            <div>    
          <Paper style={styles.paperContainer}>
            <Link to = "/SignIn">
            <Typography style={styles.Inspiration}>
            <Bounce>
                    <Fade top>
                        <Center>
                       Click Here to Sign Up Today
                       </Center>
                    </Fade>
                    </Bounce>
                </Typography>   
                </Link>           
          </Paper> 
            </div>
            

        )
    }
}