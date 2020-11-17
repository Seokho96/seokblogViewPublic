import axios from "axios";

export default function login(userId, password){

    axios(
        {
            url:"/user/login",
            method:"post",
            params:{userId:userId, password:password},
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource){
           if(resource.data === "success"){
               document.location.href="/"
           }
           else{
               alert("아이디 또는 비밀번호가 일치하지 않습니다");
           }
    });
}