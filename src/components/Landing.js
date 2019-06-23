import React from 'react';
import bg from './splash.jpg';
import Fade from 'react-reveal/Fade'
import First from './FirstPage'
import Second from './SecondPage'
import Third from './ThirdPage'
import Fourth from './FourthPage'
import Fifth from './FifthPage'

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

export default class Landing extends React.Component {
     render() {
       return(
          <div>
                <First/> 
                 <Fade bottom>
                     <Second/>
                 </Fade>
                 <Fade bottom>
                     <Third/>
                 </Fade>
                 <Fade bottom>
                     <Fourth/>
                 </Fade>
                 <Fade bottom>
                     <Fifth/>
                 </Fade> 
            </div>
       );
     }
    }
