import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ServerPage from './Server/ServerPage';
import ServerListPage from './Server/ServerListPage';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  mainPage:{
    display:'flex',
    height:'100vh',
    width:'100vw',
    'background-color': GRAY_3,
  },
});

class ServerChat extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          channel:[],
          member:[],
          message:[],
        }
        // this.state = {date:new Date()};
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    getChannel(){
      return this.state.channel;
    }

    getMember(){
      return this.state.member;
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.mainPage}>
                      
          <ServerListPage/>

          <ServerPage/> 

        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerChat)