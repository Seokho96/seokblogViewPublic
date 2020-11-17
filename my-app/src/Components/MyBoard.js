import React, {Component} from 'react';
import styled from 'styled-components';

class MyBoard extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
    render() {
       return(
           <MyBoardForm>
        <div
        className="hover-btn"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
            <Text>서비스 준비중입니다</Text>
        {this.state.isHovering
        &&<div className="hover-inner" >
          <Text>열심히 코딩중입니다 ㅠㅠ</Text>
          </div>}
      </div>
      </MyBoardForm>
       )
    }
}

export default MyBoard;

const MyBoardForm = styled.div`
   
    width:100%;
    height:100%;
    background-image:url(${process.env.PUBLIC_URL+ '/img/board.jpg'});
    background-size:100% 100%;
    display: flex;
    flex-flow: row wrap;
`
const Text = styled.h1`
   color: #db6400;
   font-size:500%;
   font-weight:bold;
   text-shadow: -2px 0 #495464, 0 2px #495464, 3px 0 #495464, 0 -2px #495464;
`