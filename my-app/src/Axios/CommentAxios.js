import axios from 'axios';


export default function getComment(callback, callbackk){
    axios(
        {
            url: '/comment/getList',
            method: 'get',
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource) {
        callback(resource.data);
        callbackk(resource.data.length);
    });
}