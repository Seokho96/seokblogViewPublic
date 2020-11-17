import React, { useState, useEffect } from 'react';
import getBoard from '../Axios/BoardListAxios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BoardList() {

    const [board, setTitle] = useState([]);
    

    function callback(data){
        setTitle(data);
        
    }

    useEffect(
        () => {
            getBoard(callback);
            window.scrollTo(0,0);
        }, []
    );

    
    const boardTitle = board.map((board,index ) =><Project key={index}><br></br><br></br><br></br><br></br><Link to={'/project/' + board.title} style={{ textDecoration: 'none',color:'white', fontSize:'40px'}}>{board.title}</Link>
    <Pimage><img height='auto' width='80%' src={process.env.PUBLIC_URL +'/img/'+ board.image} alt={index}/>
    <Conts>{board.conts}</Conts></Pimage><br></br><br></br></Project>);
  
    return(
   <div>
    <div>{boardTitle}</div>
   </div>
    );
}

export default BoardList;

const Project = styled.div `
   text-align:center;
`

const Pimage = styled.div `
    
    margin-top:100px;

`

const Conts = styled.h5`
  color:white;
  
`

