import axios from 'axios';


export default function idCheck(id) {
    
    if(id === ""){
        alert("아이디를 입력해주세요");
    }else{

        axios(
            {
                url: '/user/idCheck',
                method: 'get',
                params:{userId:id},
                baseURL: 'http://localhost:8888',
                withCredentials: true,
            }
        ).then(function(resource) {
            if(resource.data === true ){
                alert('사용가능한 아이디입니다.');
            }else{
                alert('중복된 아이디입니다.');
            }
          
        });
    }

 
}
