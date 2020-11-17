import React, { Component } from 'react';
import styled from 'styled-components';
import Preview from '../Components/Preview';

class Home extends Component {
  
    render() {
       
  
        return (
          <HomeForm>         
             <HomeHalf>
               <Title>Road to <br></br>SEOK'cess</Title>
             </HomeHalf>
              <HomeHalfDown>
                 <Preview/>
              </HomeHalfDown>
          </HomeForm>
        );
      }
    }
    
  export default Home;


  const HomeForm = styled.div`
  
     height:100%;
     width:100%;
    display: flex;
    flex-flow: row wrap;
  `

const HomeHalf = styled.div `
     height:86.2%;
     width:100%;
     background-image:url(${process.env.PUBLIC_URL+ '/img/Home.jpg'});
    background-size:100% auto;
    text-align:center;
    border-radius:3px;
    
`

const Title = styled.h2`
   color:white;
   margin-top:150px;
   font-size:6rem;
   font-family: 'Nanum Pen Script', cursive;
   text-shadow: -2px 0 #495464, 0 2px #495464, 3px 0 #495464, 0 -2px #495464;
`

const HomeHalfDown = styled.div`
    height:150%;
     width:100%;
     background-image:url(${process.env.PUBLIC_URL+ '/img/homeDown.png'});
    background-size:100% 100%;
    text-align:center;
    border-radius:3px;
`

