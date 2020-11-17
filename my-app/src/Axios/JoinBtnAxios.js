import axios from 'axios';

export default function join(id, password, name){
    axios(
        {
            url: '/user/join',
            method: 'post',
            params:{userId:id, password:password, name:name},
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource) {
        if(resource.data === true ){
           document.location.href = "/";

        }else{
            alert('회원가입 실패 ㅠㅠ');
        }
      
    });
}