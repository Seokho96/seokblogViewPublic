import React, { useState, useEffect } from 'react';
import check from '../Axios/LoginCheckAxios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { If, Then, Else} from 'react-if';
import logout from '../Axios/LogoutAxios';
import font from '../styles/font.css';

function LoginCheck() {

    const [userName, setUserName] = useState('');

    function callback(data){
     setUserName(data);
    }

    useEffect(
        () => {
              check(callback);
        }, []
    );
   
          return(
             
              <If condition={userName !== ''}>
               <Then>
               <NavItem><User>{userName}</User></NavItem>
                <NavItem><span onClick={() => logout()} style={{ textDecoration: 'none',color:'balck' , marginLeft:'20px', fontSize:'0.8rem' , fontWeight:'bold'}}>Logout</span></NavItem>              
               </Then>
               <Else>
               <NavItem><Link to='/login' style={{ textDecoration: 'none' ,color:'black'  , fontSize:'0.8rem' , fontWeight:'bold'}}>Login</Link></NavItem>&nbsp;&nbsp;
                <NavItem><Link to='/join' style={{ textDecoration: 'none' ,color:'black'  , fontSize:'0.8rem' , fontWeight:'bold'}}>Join</Link></NavItem>
               </Else>
           </If>
               
           
          );

                         
  
}

export default LoginCheck;

const NavItem = styled.li`
    width:auto;
    height:auto;
    display: flex;
    color: black; 
    position:relative;
   
`
const User = styled.span`
   font-family:'jua',sans-serif;
   font-weight: bold;
   color: blueviolet;
`

