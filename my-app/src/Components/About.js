import React, { Component } from 'react';
import styled from  'styled-components';


class About extends Component {

    render(){
        return(
            <DIV>
               <div>
                <h2>추후 <Blog>블로그</Blog>로 사용하기 위해 지속적으로 업데이트 예정입니다!</h2>
                </div>
                <Backend>
                  <Title>Back-end </Title>
                   <Images>
                       <Logo src={process.env.PUBLIC_URL+'/img/springboot.png'}alt='boot'/>
                       <Logo src={process.env.PUBLIC_URL+'/img/aws.png'}alt='boot'/>
                       <Logo src={process.env.PUBLIC_URL+'/img/mariadb.png'}alt='boot'/>
                       <Logo src={process.env.PUBLIC_URL+'/img/rds.png'}alt='boot'/>
                       <Logo src={process.env.PUBLIC_URL+'/img/Gradle.png'}alt='boot'/>
                       <img style={{width:'7%', height:'7%'}} src={process.env.PUBLIC_URL+'/img/jpa.png'}alt='boot'/>
                     <div><Logo src={process.env.PUBLIC_URL+'/img/security.png'}alt='boot'/></div>
                   </Images>
                   </Backend>
                   <Frontend>
                   <Title>Front-end </Title>
                   <Images>
                   <img style={{width:'7%', height:'7%'}} src={process.env.PUBLIC_URL+'/img/react.png'}alt='boot'/>
                   &nbsp;&nbsp;&nbsp;<Logo src={process.env.PUBLIC_URL+'/img/front.png'}alt='boot'/>
                   </Images>
                   </Frontend>
                   <Frontend>
                   <Title>Tool</Title>
                   <Images>
                   <Logo src={process.env.PUBLIC_URL+'/img/git.png'}alt='boot'/>
                   <Logo src={process.env.PUBLIC_URL+'/img/eclipse.png'}alt='boot'/>
                   <img style={{width:'5%', height:'5%'}} src={process.env.PUBLIC_URL+'/img/visual.png'}alt='boot'/>
                   <img style={{width:'5%', height:'5%', marginLeft:'3%'}} src={process.env.PUBLIC_URL+'/img/workbench.png'}alt='boot'/>
                   <img style={{width:'5%', height:'5%', marginLeft:'3%'}} src={process.env.PUBLIC_URL+'/img/putty.png'}alt='boot'/>
                   </Images>
                   </Frontend>
            </DIV>
            
        )
    }

}

export default About;

const DIV = styled.div`
    margin-top: 100px;
    text-align:center;
    width:auto;
    height:115%;
`



const Backend = styled.div `
   margin-top:5%;
`
const Images = styled.div `
   
   
    position:relative;
    float:right;
`
const Logo = styled.img`
   width:10%;
   height:10%;
   margin-right:3%;
`

const Frontend = styled.div `
   margin-top:15%;
`

const Blog =  styled.span `
  color: #799351;
`
const Title = styled.h2`
   color: #1f6f8b;
`