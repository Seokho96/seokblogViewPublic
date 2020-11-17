import React, {Component} from 'react';
import styled from  'styled-components';
import idCheck from '../Axios/JoinIdCheckAxios';
import join from '../Axios/JoinBtnAxios';
import font from '../styles/font.css';


class Join extends Component {
    state = {
        id : '',
        password:'',
        name:''
    }

    idChange = (e) => {
        this.setState({
            id:e.target.value
        });
    }
    
    passwordChange = (e) => {
        this.setState({
            password:e.target.value
        });
    }
    
    nameChange = (e) => {
        this.setState({
            name:e.target.value
        });
    }


    idCheck = () => {
       
        idCheck(this.state.id);
    }

    join = () => {
        join(this.state.id, this.state.password, this.state.name);
    }

    callback = () => {

    }
    render() {
        return(
            <JoinForm>
                <JoinText>Join</JoinText>
                <JoinInput>
                <JoinId>
                    <input type='text' name='id' placeholder='아이디' onChange={this.idChange} value={this.state.id}></input>
                  <IdCheck type='button' className='idCheck' onClick={this.idCheck}>중복확인</IdCheck>  
                </JoinId>
                <JoinPwd>
                    <input type='text' className='password' placeholder='비밀번호' onChange={this.passwordChange}  value={this.state.password}></input>
                </JoinPwd>
                <JoinName>
                    <input type='text' className='name' placeholder='이름' onChange={this.nameChange}  value={this.state.name}></input>
                </JoinName>
                </JoinInput>
                <JoinBtn>
                    <JoinButton type='button' className='joinbtn' onClick={this.join} >회원가입</JoinButton>
                </JoinBtn>
            </JoinForm>
        )
    }
}

export default Join;

const JoinForm = styled.div`
   margin-top:180px;
   text-align:center;
` 

const JoinInput = styled.div`

`

const JoinId = styled.div`
   margin-left:65px;
`

const JoinPwd = styled.div`
   margin-top:15px;
`

const JoinName = styled.div`
   margin-top:15px;
`

const JoinText = styled.h2`
    color: #00587a;
    margin-left:30px;
    font-family: 'Nanum Pen Script', cursive;
    font-size:5rem;
 `

const JoinBtn= styled.div`
    margin-top:30px;
    margin-left:30px;
`
const IdCheck = styled.button`
    margin-left:10px;
   border:none;
   background-color:white;
   font-family: 'Jua' ,sanserif;
`

const JoinButton = styled.button`
   background-color:white;
   border:1px solid black;
   border-radius:3px;
   font-family: 'Jua' ,sanserif;
`