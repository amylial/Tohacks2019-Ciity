import React from 'react';
import bg from './place.jpg';
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
                         This Website is the best thing to happen to me
                        </Center>
                        <Center>
                         Can not believe in 2019 I can make money so easily
                        </Center>
                        <Center>
                         Go on this Website and you WILL NOT regrey it
                        </Center>
                        <Center>
                          You can tell them Bob sent you
                        </Center>
                        <br></br>
                        <Center>
                          - Bob "Buff Bulk Boy" Builder
                        </Center>
                    </Fade>
                    </Bounce>
                </Typography>               
          </Paper> 
            </div>
            

        )
    }
}