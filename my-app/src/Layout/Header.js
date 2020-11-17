import React, { Component } from 'react';
import styled from  'styled-components';
import { Link } from 'react-router-dom';
import css from '../styles/font.css';
class Header extends Component {

    banner = () => {
        document.location.href='/';
    }
    render() {
        return (
            <Container>
                <Element>
                    <ShortCut><Link to='/login'  style={{ textDecoration: 'none',color:'#c56183', fontFamily: 'Black Han Sans, sans-serif' }}>로그인</Link>&nbsp;
                    <Link to='/join'  style={{ textDecoration: 'none',color:'#c56183', fontFamily: 'Black Han Sans, sans-serif' }}>회원가입</Link></ShortCut>
                       
                        <Search><Title onClick={this.banner}>Made By Seok</Title></Search>
                </Element>
            </Container>
        )
    }
}


export default Header;

const Container = styled.div`
    width: 500%;
    border-bottom: 1px solid #d1d8e4;
    height: auto;
    
`

const Element = styled.div`
    margin: 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: auto;
    text-align: right;
    background-color: #defffd;
background-image: linear-gradient(0deg, #defffd 0%, #eff9f5 100%);

    border-radius: 3px;
    
`


const Search = styled.div`
    order: 3;
    width: 100%;
    height:auto;
    background-color: #defffd;
background-image: linear-gradient(0deg, #defffd 0%, #eff9f5 100%);

    border-radius: 3px;
    text-align: center;
    
`

const Title = styled.h1 `
   font-size: 3rem;
   font-family: 'Press Start 2P', cursive;
  
 
   color: #FFFFFF;

text-shadow: #44090D 1px 1px,#44090D -0px 0px,#44090D -1px 1px,#44090D -2px 2px,#44090D -3px 3px,#44090D -4px 4px,#44090D -5px 5px,#44090D -6px 6px,#44090D -7px 7px,#44090D -8px 8px,#44090D -9px 9px,#44090D -10px 10px,#44090D -11px 11px,#44090D -12px 12px,#44090D -13px 13px,#44090D -14px 14px,#44090D -15px 15px,#44090D -16px 16px,#44090D -17px 17px,#44090D -18px 18px,#44090D -19px 19px,#44090D -20px 20px,#44090D -21px 21px,#44090D -22px 22px,#44090D -23px 23px,#44090D -24px 24px,#44090D -25px 25px,#44090D -26px 26px,#44090D -27px 27px,#44090D -28px 28px,#44090D -29px 29px;
`