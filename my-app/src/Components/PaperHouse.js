import React, { Component, useEffect } from 'react';
import styled from  'styled-components';
import Iframe from 'react-iframe'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import font from '../styles/font.css';

class PaperHouse extends Component{
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
      scrollToTop() {
        scroll.scrollTo(430,500);
      }

      scrollToDown(){
          scroll.scrollTo(1500,500);
      }
     
      componentDidMount(){
        scroll.scrollToTop();
      }
    
    render() {
        
        return(
                 <PaperHouseForm >
                     <PaperHouseTitle>PaperHouse</PaperHouseTitle>
                     <div style={{marginTop:'5%'}}><Explanation>종이의 집은 작가의 꿈을 가진 남녀노소 누구나 자신의 글을 집필하고 ‘신인 작가’로서 데뷔할 수 있는 플랫폼입니다.<br></br><br></br>
작가가 집필한 글이 일정 수준에 도달하게 되면 개인 의향에 의하여 유료 컨텐츠로 전환 할 수 있으며, <br></br><br></br>
책에 대한 미리보기를 통하여 궁금증을유발하고, 독자의 주관에 따라서 결제를 선택 할 수 있는 시스템입니다.</Explanation>
</div>
                     <VideoForm>
                     <div style={{marginBottom:'5%'}}><VidedoTitle>시연영상</VidedoTitle></div>
                     
                     <video controls autoPlay>
                         <source src={process.env.PUBLIC_URL+'/video/PaperHouse.mp4'} type="video/mp4"></source>
                     </video>
                     <div><VideoAb> ※ 재생 버튼을 눌러주세요 </VideoAb></div>
                     </VideoForm>
                     <GoTop><Top onClick={this.scrollToTop}>시연영상</Top><div style={{marginTop:'20%'}}><Top onClick={this.scrollToDown}>개발기술서</Top></div></GoTop>
                   <Pdf>
                       <TitleDiv><Title>개발기술서</Title></TitleDiv>
                      
                   <IframeDiv><Iframe width="103%" height="109%" scrolling='no' frameBorder='0' src={process.env.PUBLIC_URL+'/img/PaperHouse.pdf'} /></IframeDiv>
                   </Pdf>
                  
                 </PaperHouseForm>
        );
    }
}

export default PaperHouse;

const PaperHouseForm = styled.div `
   background-color:#e4e978;
   width:100%;
   height:300%;
   text-align:center;
   display:flow-root;
   
`

const PaperHouseTitle = styled.h2`
    color: #d37815;
`

const Explanation = styled.span `
   font-weight:bold;
`

const VideoForm = styled.div `
    margin-top:15%;
`

const GoTop = styled.div `
  
  position: fixed;
    width: 92px;
    height: 24.5px;
    left: 1380px;
    top: 250px;
    margin:0 auto;
`
const Top = styled.a`
  color:#34626c;
  
    font-size: 1.15em;
`

const Pdf = styled.div `
 margin-top:18%;  
  margin-left:12% ; 
  width:70%;
  height:25%;
  background-color:#e4e978;
 
`

const Title = styled.span `
  
   color: white;
   font-size:3rem;
   font-family: 'Black Han Sans', sans-serif;
   
`

const VidedoTitle = styled.span`
   color: white;
   font-size:3rem;
   font-family: 'Black Han Sans', sans-serif;
  
`

const TitleDiv = styled.div `
 margin-left:9%;
  margin-bottom:8%;
`

const IframeDiv = styled.div `
  width:auto;
  height:100%;
  margin-left:9%;

`

const VideoAb = styled.span`
   color: white;
   font-size:1.2rem;
   font-family: 'Black Han Sans', sans-serif;
`
