import React, {Component} from 'react';
import styled from 'styled-components';
import font from '../styles/font.css';
import { animateScroll as scroll } from 'react-scroll'
class MyPage extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      
     
    render(){
        return(
           <MyPageForm>
              <MyPageIntroduceForm>
                  <MyPageTitle>
                      <Title>Who I am</Title>
                  </MyPageTitle>
                <MyPageMyImage>
                   <img height='10%' width='13%' alt='사진' src={process.env.PUBLIC_URL +'/img/MypageImage.jpg'}/>
                   </MyPageMyImage>
                <MyPageText>
                    <Type>이름</Type><Conts><Ksh>강석호</Ksh></Conts>
                    <Type>나이</Type><Conts><Ksh>1996년 1월 17일,   25세(만 24세)</Ksh></Conts>
                    <Type>사는곳</Type><Conts><Ksh>인천광역시 계양구 장제로 933번길 10, 103동 304호</Ksh></Conts>
                    <Type>학력</Type><Conts><Ksh>계산고등학교 졸업<br></br> 강원대학교(에너지공학) 중퇴</Ksh></Conts>
                    <Type>연락처</Type><Conts><Ksh>010 - 4514 - 9354<br></br>kangseokhos@naver.com</Ksh></Conts>
                    <GoTop><GoClick onClick={this.scrollToTop}>▲<br></br>Go to Top</GoClick></GoTop>
                    </MyPageText>                     
                </MyPageIntroduceForm>          
           </MyPageForm>
        )
    }
}

export default MyPage;

const MyPageForm = styled.div`
  text-align:center;
  width:100%;
  height:152%;
  background-color:#f6f5f5;
  display: flex;
  flex-flow: row wrap;
`

const MyPageMyImage = styled.div`
background-color:#f6f5f5;

  
`

const MyPageIntroduceForm = styled.div `
background-color:#f6f5f5;
width:100%;
height:100%;
`

const MyPageText = styled.div `
   

`

const Type =  styled.div`
  margin-top:20px;
 
  font-size:100%;
`
const Ksh = styled.b `
  
`
const Conts = styled.div`
 margin-top:20px;
  width:100%;
  height:100%;
  font-size:110%;
`

const MyPageTitle = styled.div `
    background-color:#f6f5f5;
  
`

const Title = styled.h2`
   
   color: #00587a;
    margin-left:30px;
    font-family: 'Nanum Pen Script', cursive;
    font-size:500%;
`

const GoTop = styled.div `
  margin-top:5%;

`

const GoClick = styled.a`
  color: #706897;
`
