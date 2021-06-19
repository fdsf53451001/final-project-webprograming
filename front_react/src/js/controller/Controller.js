import { ContactsOutlined, ThreeSixtySharp } from '@material-ui/icons';
import React from 'react';
import LoginPage from '../view/LoginPage';
import ServerChat from '../view/ServerChat';
import SettingPage from '../view/SettingPage';
import RegisterPage from '../view/RegisterPage';
import { apiLogin, apiRegister } from '../view/Api/API';

class Controller extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            user:{
                userid:'1',
                userName:'Toby',
                userIcon:'',
            },
            currentPage:'serverChat',
            lastPage:'',
        }
        this.isLogin = this.isLogin.bind(this);
        this.changeLogin = this.changeLogin(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.Login = this.Login.bind(this);
        this.returnLastPage = this.returnLastPage.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    componentDidMount(){}
    componentWillUnmount(){}

    isLogin(){
        return this.state.isLogin;
    }

    changeLogin(){
        this.setState(
            {isLogin:!this.state.isLogin}
        );
    }

    Login(username,password){
        apiLogin(username,password).then(result => {
            if(result){
                console.log(result);
            }
        });
    }

    Register(username,password,nickname){
        apiRegister(username,nickname,password).then(result => {
            if(result){
                console.log(result);
            }
        });
    }

    setCurrentPage(page){
        this.setState(
            {lastPage:this.state.currentPage,
             currentPage:page
            }
        );
    }

    returnLastPage(){
        this.setState(
            {currentPage:this.state.lastPage}
        );
    }

    getUserData(){
        return this.state.user;
    }

    render(){
        if(!this.state.isLogin){
            switch(this.state.currentPage){
                case 'login':
                    return(<LoginPage 
                                setCurrentPage={this.setCurrentPage}
                                Login={this.Login}
                            />);
                case 'register':
                    return(<RegisterPage
                                setCurrentPage={this.setCurrentPage}
                                Register={this.Register}
                           />);
                default:
                    return (<h1>Error Happened!</h1>);
            }
            
        }

        switch(this.state.currentPage){
            case 'serverChat':
                return(<ServerChat
                            setCurrentPage={this.setCurrentPage}
                            getUserData={this.getUserData}
                        />
                );
            case 'personSetting':
                return (<SettingPage
                            returnLastPage={this.returnLastPage}
                        />                    
                );
            default:
                return (<h1>Error Happened!</h1>);
        }
    }
}

export default Controller