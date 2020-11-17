import React, { useState, useEffect } from 'react';
import getBoard from '../Axios/BoardListAxios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import font from '../styles/font.css';
function BoardList() {

    const [board, setTitle] = useState([]);
    

    function callback(data){
        setTitle(data);
        
    }

    useEffect(
        () => {
            getBoard(callback);
        }, []
    );

    
    const boardTitle = board.map((board,index ) =><Project key={index}><br></br><Link to='/boardDetail' style={{ textDecoration: 'none',color:'white', fontSize:'25px', fontFamily: 'Playfair Display, serif', fontWeight:'bold'}}>{board.title}</Link>
    <Pimage><img height='auto' width='30%' src={process.env.PUBLIC_URL +'/img/'+ board.image} alt={index}/>
    </Pimage></Project>);
  
    return(
   <div>
    <div>{boardTitle}</div>
   </div>
    );
}

export default BoardList;

const Project = styled.div `
margin-top:50px;
   margin-left: 300px;
   text-align:center;
`

const Pimage = styled.div `
    
    margin-top:50px;

`

