import axios from 'axios';

export default function loginCheck(callback) {
      
    axios(
        {
            url:"/user/loginCheck",
            method: 'get',
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource){
        callback(resource.data);
    });
}