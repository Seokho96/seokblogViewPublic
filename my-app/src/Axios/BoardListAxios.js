import axios from 'axios';

export default function getBoardList(callback){
    axios(
        {
            url: '/board/getList',
            method: 'get',
            baseURL: 'http://localhost:8888',
            withCredentials: true,
        }
    ).then(function(resource) {
        callback(resource.data);
    });
}