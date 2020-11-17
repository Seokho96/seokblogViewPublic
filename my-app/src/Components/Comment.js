import React, {Component} from 'react';
import styled from  'styled-components';
import font from '../styles/font.css';
import List from '../Components/CommentList';
import write from '../Axios/CommentWriteAxios';


class Comment extends Component {

    state = {
            conts:''
    }

    write = () => {
        write(this.state.conts);
    }

    contsChange = (e) => {
        this.setState({
            conts:e.target.value
        });
    }

    render() {
        return (
            <CommentForm>
                <Title>
                  <TitleText>방명록</TitleText>
                </Title>
                <Warn>
                    <Text>※도배 방지를 하기위해 방명록은 한사람당 하나씩만 가능합니다!</Text>
                </Warn>
               <TextArea>
                   <Comt placeholder='가는 말이 고와야 오는 말이 곱다.' onChange={this.contsChange} value={this.state.conts}></Comt>       
               </TextArea>
               <CommentBtn onClick={this.write}> 작성</CommentBtn>
               <CommentList>
               <List/>
               </CommentList>
            </CommentForm>
        );
    }
}

export default Comment;

const CommentForm = styled.div`
     margin-top: 100px;
     text-align:center;
`
const Title = styled.div`
    
`
const TitleText = styled.h2`
    font-family: 'Nanum Pen Script', cursive;
    font-size:3rem;
`

const Warn = styled.div`
  margin-left:50px;
  margin-bottom:10px;
`
const Text = styled.b`
  font-size:0.5rem;
  color:red;
`
const TextArea = styled.div`
   align-self: auto;
   align-content:center;
`
const Comt = styled.textarea `
   width:25rem;
   height:4rem;
  
`
const CommentList = styled.div `
  
`
const CommentBtn = styled.button`
    margin-left:365px;
   
`