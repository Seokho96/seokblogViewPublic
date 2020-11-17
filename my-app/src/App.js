import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import Router from './Routes/Router';




class App extends Component {
  render() {
    return (
      
      <Layout>
         <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />  
        <Content>
          <Router>
            </Router>
        </Content>
      </Layout>
    );
  }
}

export default App;

const Content = styled.div`
margin: 0 auto;
height:100vh;
width:110vw;
`

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height:100%;
  flex-flow: row wrap;
  
`

