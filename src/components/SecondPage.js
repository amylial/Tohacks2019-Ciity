import React from 'react';
import bg from './splash.jpg';
import bg2 from './Rainbow.svg'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Center from 'react-center'
import Fade from 'react-reveal/Fade'
import { fontFamily } from '@material-ui/system';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const styles = {
paperContainer: {
  backgroundImage: `url(${bg})`,
  opacity: 0.8,
  height: window.innerHeight,
},
}



export default class Second extends React.Component {

    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
        }
    render() {
        return (
            <div>    
          <Paper style={styles.paperContainer}>
          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            //backgroundImage: `url(${bg2})`,
            height: window.innerHeight,
            overflow: 'scroll',
            marginBottom: '100px'
          }}>

            <Element name="firstInsideContainer" style={{
              marginBottom: '200px',
              color : '#FF0000'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Element>

            <Element name="secondInsideContainer" style={{
              marginBottom: '200px',
              color : '#FF0000'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin sed libero. Egestas integer eget aliquet nibh praesent tristique magna. Enim nec dui nunc mattis enim ut. Dignissim convallis aenean et tortor at. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet justo donec enim diam. Ac ut consequat semper viverra nam libero. In nibh mauris cursus mattis molestie a iaculis at. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.

Facilisis mauris sit amet massa vitae tortor. Tincidunt arcu non sodales neque sodales. Amet nisl suscipit adipiscing bibendum est ultricies. Molestie a iaculis at erat pellentesque. Blandit turpis cursus in hac habitasse platea dictumst quisque. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Id neque aliquam vestibulum morbi blandit cursus. At auctor urna nunc id cursus metus aliquam eleifend mi. Quam id leo in vitae turpis massa sed elementum. Varius morbi enim nunc faucibus a pellentesque sit amet. Condimentum lacinia quis vel eros donec.

Ut tristique et egestas quis ipsum. Euismod in pellentesque massa placerat duis ultricies lacus sed. Morbi tempus iaculis urna id volutpat lacus laoreet. Lobortis scelerisque fermentum dui faucibus. Neque viverra justo nec ultrices dui sapien eget mi. Felis bibendum ut tristique et. A diam sollicitudin tempor id eu. Suscipit tellus mauris a diam maecenas. Ut venenatis tellus in metus vulputate eu. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Id consectetur purus ut faucibus pulvinar elementum.

Pharetra pharetra massa massa ultricies. Malesuada proin libero nunc consequat interdum varius sit amet. Amet mattis vulputate enim nulla. Vitae tortor condimentum lacinia quis vel. Non blandit massa enim nec dui. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc sed augue lacus viverra vitae congue. Pharetra pharetra massa massa ultricies mi quis. Mattis rhoncus urna neque viverra justo nec. Dui ut ornare lectus sit amet est. Lobortis scelerisque fermentum dui faucibus. Ultrices sagittis orci a scelerisque purus. Sed cras ornare arcu dui vivamus arcu felis.

Dictum sit amet justo donec enim diam vulputate ut. Lorem ipsum dolor sit amet. Cursus in hac habitasse platea. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Amet aliquam id diam maecenas ultricies mi eget mauris. Eget felis eget nunc lobortis mattis aliquam faucibus. Lectus arcu bibendum at varius. Id leo in vitae turpis massa sed elementum. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Massa tincidunt dui ut ornare. Quis blandit turpis cursus in hac habitasse platea. Dui ut ornare lectus sit amet est. Amet nisl purus in mollis nunc. Tellus cras adipiscing enim eu.
          </Element>
          <Element name="thirdInsideContainer" style={{
              marginBottom: '200px',
              color : '#FF0000'
            }} >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Aliquam sem et tortor consequat. Duis at tellus at urna condimentum mattis pellentesque id nibh. Consequat interdum varius sit amet. Id aliquet risus feugiat in ante. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Elit eget gravida cum sociis natoque penatibus et magnis dis. Vitae ultricies leo integer malesuada nunc vel. Ac ut consequat semper viverra nam libero. Lacus sed viverra tellus in hac. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elementum nisi quis eleifend quam adipiscing vitae proin. Augue lacus viverra vitae congue eu consequat ac felis donec.

Ac tortor dignissim convallis aenean et tortor at. Ut enim blandit volutpat maecenas volutpat blandit. Erat nam at lectus urna duis convallis. Rhoncus dolor purus non enim praesent elementum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Fermentum et sollicitudin ac orci phasellus egestas tellus. Posuere urna nec tincidunt praesent. Id cursus metus aliquam eleifend. Ipsum nunc aliquet bibendum enim. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Augue mauris augue neque gravida in fermentum. Viverra accumsan in nisl nisi scelerisque eu. Dignissim diam quis enim lobortis.

Elementum eu facilisis sed odio morbi quis. Convallis posuere morbi leo urna. Lorem ipsum dolor sit amet. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Ut ornare lectus sit amet est placerat. Massa enim nec dui nunc mattis enim ut tellus elementum. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Libero justo laoreet sit amet cursus. Blandit aliquam etiam erat velit scelerisque in. Mauris sit amet massa vitae tortor condimentum lacinia. Lacus suspendisse faucibus interdum posuere. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Ut ornare lectus sit amet est. Viverra justo nec ultrices dui sapien eget mi proin. Euismod in pellentesque massa placerat. Massa sapien faucibus et molestie ac.

Elit sed vulputate mi sit. Egestas sed sed risus pretium. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Morbi tempus iaculis urna id. Vitae elementum curabitur vitae nunc sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Nisi est sit amet facilisis magna etiam tempor orci eu. Purus in mollis nunc sed id semper. Donec et odio pellentesque diam volutpat commodo. Porttitor lacus luctus accumsan tortor posuere ac. Dui id ornare arcu odio ut. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Suspendisse faucibus interdum posuere lorem ipsum. Lectus magna fringilla urna porttitor rhoncus dolor purus. Bibendum neque egestas congue quisque egestas diam. Dis parturient montes nascetur ridiculus mus mauris. Volutpat diam ut venenatis tellus in. Odio tempor orci dapibus ultrices in iaculis nunc sed. Enim sit amet venenatis urna cursus eget nunc.

Adipiscing commodo elit at imperdiet dui. Lectus quam id leo in vitae turpis. Arcu risus quis varius quam quisque id diam vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Feugiat scelerisque varius morbi enim nunc faucibus. Id ornare arcu odio ut sem nulla pharetra. Risus ultricies tristique nulla aliquet. Potenti nullam ac tortor vitae purus faucibus. Odio euismod lacinia at quis risus sed. Diam in arcu cursus euismod. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Integer malesuada nunc vel risus commodo viverra maecenas. Feugiat in ante metus dictum at tempor commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed sed risus pretium quam vulputate dignissim.

© 2015 — 2019
          </Element>
          </Element>
          </Paper> 
            </div>
            

        )
    }
}