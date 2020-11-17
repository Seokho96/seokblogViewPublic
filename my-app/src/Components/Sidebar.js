import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import CSS from '../Components/Sidebar.css';
import font from '../styles/font.css';
export default props => {
   
        return (
            <Menu>
              <a className="menu-item" href="/">
                Home
              </a>
              <a className="menu-item" href="/about">
              About
              </a>
              <a className="menu-item" href="/board">
              Project
              </a>
              <a className="menu-item" href="/myboard">
              MyBoard
              </a>
              <a className="menu-item" href="/comment">
              Guest
              </a>
              <a className="menu-item" href="/mypage">
              Me
              </a>
            </Menu>
          )
  
 
};


