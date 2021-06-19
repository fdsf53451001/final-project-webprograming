import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ServerPage from './Server/ServerPage';
import ServerListPage from './ServerListPage';

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
          member:[{rank:'lvl1',member:[{userid:1,avater:'avater',nick:'nick',state:'state',online:true}]}],
          message:[{
            group:'文字頻道',rooms:[{
              room:'幹話R你各位',type:'text',chat:[
                {time:'2021-06-14',userid:1,nick:'nick',message:'message'},
                {time:'2021-06-15',userid:1,nick:'nick',message:'message'},
                {time:'2021-06-16',userid:1,nick:'nick',message:'message'},
                {time:'2021-06-17',userid:1,nick:'nick',message:'message'},
                {time:'2021-06-18',userid:1,nick:'nick',message:'message'},            
              ]
            }
            ]            
          }
          ]
        }
        this.getChannel = this.getChannel.bind(this);
        this.getMember = this.getMember.bind(this);
        this.getMessage = this.getMessage.bind(this);
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

    getMessage(){
      return this.state.message;
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.mainPage}>
                      
          <ServerListPage/>

          <ServerPage getMessage={this.getMessage}/> 

        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerChat)