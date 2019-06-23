import React from 'react';
import bg from './philly.jpg';
import {bounce} from 'react-animations'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Center from 'react-center'
import Fade from 'react-reveal/Fade'
import styled, {keyframes} from 'styled-components'

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
  fontSize: '30px',
  fontFamily: 'Roboto',
  
},
}



export default class Second extends React.Component {

    render() {
        return (
            <div>    
          <Paper style={styles.paperContainer}>
            <Typography style={styles.Inspiration}>
            <Bounce>
                    <Fade top>
                        <Center>
                          This Website is Amazing in every single way
                        </Center>
                        <Center>
                         Without this website I would not have made been in my current position
                        </Center>
                        <Center>
                         Get on this Website Right now if you want a job
                        </Center>
                        <Center>
                          It has benefitted my life greatly
                        </Center>
                        <br></br>
                        <Center>
                          - KAI "POTATO" HE
                        </Center>
                    </Fade>
                    </Bounce>
                </Typography>               
          </Paper> 
            </div>
            

        )
    }
}