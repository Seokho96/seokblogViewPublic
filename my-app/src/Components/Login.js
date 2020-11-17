import React, {Component} from 'react';
import styled from  'styled-components';
import log from '../Axios/LoginAxios';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        userId:'',
        password:''
    }

    loginClick = () => {
        log(this.state.userId, this.state.password);
    }

    
    idChange = (e) => {
        this.setState({
            userId:e.target.value
        });
    }
    
    passwordChange = (e) => {
        this.setState({
            password:e.target.value
        });
    }

    render() {
        return(
            <div>
                <LoginForm>
                    <LoginText>Login</LoginText>
                    <LoginInput>
                    <div> 
                    <input type='text' className='id' placeholder='아이디' onChange={this.idChange} value={this.state.userId}></input>
                    </div>
                    <br></br>
                   <div>
                   <input type='password' className='password' placeholder='비밀번호' onChange={this.passwordChange} value={this.state.password}></input>
                   </div>
                   </LoginInput>
                   <LoginBtn>  
                      <LoginButton type="button" onClick={this.loginClick}>로그인</LoginButton>               
                   </LoginBtn>
                   <Join>
                   <Link to='/join' style={{ textDecoration: 'none' ,color:'#41aea9'   }}>회원이 아니신가요?</Link> 
                   </Join>
                   
                </LoginForm>
            </div>
        )
    }
}

export default Login;

const LoginText = styled.h1`
    color: #00587a;
    margin-left:30px;
    font-family: 'Nanum Pen Script', cursive;
    font-size:5rem;
 
`
const LoginInput = styled.div `
    margin-left:40px;
`
const LoginForm = styled.div`
    margin-top: 180px;
    text-align:center;
`
const LoginBtn = styled.div`
   margin-left:30px;
   margin-top:30px;
   
`

const LoginButton = styled.button`
   background-color:white;
   border:1px solid black;
   border-radius:3px;
   font-family: 'Jua' ,sanserif;
`

const Join = styled.div `
 
  margin-top:10px;
  margin-left:30px;
  border-radius:3px;
  font-size: 0.8rem;
`