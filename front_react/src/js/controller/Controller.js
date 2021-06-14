import { ContactsOutlined, ThreeSixtySharp } from '@material-ui/icons';
import React from 'react';
import LoginPage from '../view/LoginPage';
import ServerChat from '../view/ServerChat';

class Controller extends React.Component{    
    constructor(props){
        super(props)
    }
    componentDidMount(){}
    componentWillUnmount(){}

    render(){
        return(
            // <LoginPage/>
            <ServerChat/>
        );
    }
}

export default Controller