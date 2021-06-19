import axios from 'axios';

const userRequest = axios.create({
    baseURL:'https://final-project-webprograming.herokuapp.com/createdata/'
});

export const apiLogin = function(username,password){
    return (userRequest.get('/update_user',{
        params:{
            user_id:username,
            password:password 
        }
    }));
}

export const apiRegister = function(user_id,nickname,password){
    return (userRequest.get('/adduser',{
        params:{
            user_id:user_id,
            nickname:nickname,
            password:password,
            login_check:false,
        }
    }));
}