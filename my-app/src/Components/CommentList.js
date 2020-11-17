import React, { useState, useEffect } from 'react';
import comt from '../Axios/CommentAxios';
import styled from 'styled-components';

function CommentList() {

    const [comment, setTitle] = useState([]);
    const [commentNum, setCommentNum] = useState('');

    function callback(data){
        setTitle(data);
        
    }

    function callbackk(data){
        setCommentNum(data);
    }

    useEffect(
        () => {
            comt(callback, callbackk);
        }, []
    );
    const Comments = comment.map((comment,index ) =><Project key={index}>
    <Pimage><UserName>{comment.userName}</UserName>,&nbsp;&nbsp;<CommentContss>{comment.conts}</CommentContss></Pimage><br></br></Project>);

    return(
        <CommentLists>
      <CommentCount>
      <h6>[ 방명록 {commentNum} 개 ]</h6> 
    </CommentCount> 
   <Line></Line>
       <CommentConts>
       {Comments}
           </CommentConts>   
     
        </CommentLists>

    );
}

export default CommentList;

const CommentLists  = styled.div `
     width:100%;
     height:auto;
    text-align:center;
`
const Project = styled.div `
  text-align:left;
  margin-left:35%;
  width:30% ;
  height:100% auto;

`

const Pimage = styled.div `
     width:100%;
     height:auto;
    margin-top:20px;
    
`
const UserName = styled.span`
    
    font-weight:bold;
    font-size:1rem;
    color: #150485;
`
const CommentCount = styled.div`
    width:100% auto;
     height:auto;
`

const CommentContss = styled.span `
    font-size: 0.8rem;
    
`
const CommentConts = styled.div `
     width:100%;
     height:auto;
    

`
const Conts = styled.h5`
  color:black;
  
`
const Line = styled.hr`
   width:30rem;
`
