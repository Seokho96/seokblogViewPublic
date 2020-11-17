import React, {Component} from 'react';
import styled from  'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import List from '../Components/BoardList';
class Board extends Component{
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
   state = {
       data:[],
   };
  
    render(){
        return(
          
            <BoardDiv>
            
               <List />
               <GoTop><Top onClick={this.scrollToTop}>Top</Top></GoTop>
            </BoardDiv>
        )
    }

}

export default Board;
const BoardDiv = styled.div`
 
  width:100%;
  height:295%;
  background-color:black;
`

const GoTop = styled.div `
  
  position: fixed;
    width: 34px;
    height: 24.5px;
    left: 1400px;
    top: 680px;
 
    margin:auto;
`
const Top = styled.a`
  color:white;
  
    font-size: 1.15em;
`