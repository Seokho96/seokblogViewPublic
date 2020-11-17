import axios from 'axios';

export default function commWrite(conts){
    axios(
        {
            url:"/comment/write",
            method:"post",
            params:{conts:conts},
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource){
             if(resource.data === "success"){
                 document.location.href="/comment"
             }else if(resource.data === "alreadyWrite"){
                 alert("한번씩만 작성 가능합니다~");
             }else if( resource.data === "loginFalse"){
                 alert("로그인 먼저 해주세요~")
             }
    });

} 

