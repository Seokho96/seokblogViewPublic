import React, { Component,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import font from '../styles/font.css';
import check from '../Axios/LoginCheckAxios';
import LoginCheck from "../Components/LoginCheckfunc";

class Navigation extends Component {
   
    render() {
      return (
        <Nav>
            <NavList>
            <NavItem><Link to='/' style={{ textDecoration: 'none',color:'balck'  ,fontFamily: 'Jua, sanserif'}}>Home</Link></NavItem>
            <NavItem><Link to='/about' style={{ textDecoration: 'none',color:'balck'  ,fontFamily: 'Jua, sanserif'}}>About</Link></NavItem>
                <NavItem><Link to='/board' style={{ textDecoration: 'none',color:'balck'  ,fontFamily: 'Jua, sanserif'}}>Project</Link></NavItem>
                <NavItem><Link to='/myboard' style={{ textDecoration: 'none' ,color:'black'  ,fontFamily: 'Jua, sanserif'}}>Board</Link></NavItem>
                <NavItem><Link to='/comment' style={{ textDecoration: 'none' ,color:'black'  ,fontFamily: 'Jua, sanserif'}}>Guest</Link></NavItem>
                <NavItem><Link to='/mypage' style={{ textDecoration: 'none' ,color:'black'  ,fontFamily: 'Jua, sanserif'}}>Me</Link></NavItem>  
               <LoginCheck />     
            </NavList>
            
        </Nav>
      );
    }
  }
  
export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 40px;
    border-top: none;
    border-bottom: 0.5px solid black;
    
   
`

const NavList = styled.ul`
 
    display: flex;
    margin: 0 auto;
    position:relative;
    float:right;
    
`

const NavItem = styled.li`
    width: 100px;
    margin-top:5px;
    display: flex;
    color: black;
    float:right;
    position:relative;

`
