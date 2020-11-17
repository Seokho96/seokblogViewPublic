import axios from 'axios';

export default function logout(){
    axios(
        {
            url:"/user/logout",
            method:"post",
            baseURL:"http://localhost:8888",
            withCredentials: true,
        }
    ).then(function(){
            document.location.href="/";
    });
} 