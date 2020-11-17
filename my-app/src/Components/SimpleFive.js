import React, { Component } from 'react';
import styled from  'styled-components';
import Iframe from 'react-iframe'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

class SimpleFive extends Component {
 
  componentDidMount(){
    scroll.scrollToTop();
  }

    render() {
        return (
            <SimpleFiveForm >
            <SimpleFiveTitle>SimpleFive</SimpleFiveTitle>
            
           
          <Pdf>
              
          <Iframe marginWidth='0' width="91%" height="100%" scrolling='no' frameBorder='0' src={process.env.PUBLIC_URL+'/img/SimpleFive.pdf'}/>
          </Pdf>
         
        </SimpleFiveForm>
        );
    }
}

export default SimpleFive;

const SimpleFiveForm = styled.div `
   background-color:#eeeded;
   width:100%;
   height:105%;
   text-align:center;
   display:flow-root;
`

const SimpleFiveTitle = styled.h2`
    color: #1f3c88;
    
`



const Pdf = styled.div `
  margin-top:4%;
  margin-left:13.5%;
  width:80%;
  height:80%;
  background-color:#eeeded;
  text-align:center;
`

const Title = styled.h2 `
 
`