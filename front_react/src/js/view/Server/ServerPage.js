import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

import ServerMemberPage from './ServerMemberPage';
import ServerChannel from './ServerChannel';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  serverContent:{
    display:'flex',
    height:'100vh',
  },
  serverHR:{
    'border-color':GRAY_1,    
    height:'0pt',
    // position:'absolute',
    // margin:'50px 0',
  },
  serverInfo:{
    'background-color': GRAY_2, 
    width : '160pt',
    // display: 'grid',
  },
  serverTalk:{
    width : '62vw',
  },
});

class ServerPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        // this.state = {date:new Date()};
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    render(){
      const classes = this.props.classes;
      return(
        <div className='serverTalk'>
          <div className={classes.serverContent}>
            <div className={classes.serverInfo}>
                <div className='serverName'
                    style={{display:'flex',height:'50px'}}
                >
                    <typography
                    component="h4" 
                    variant="h4"
                    style={{color:'white',margin:'10pt 15pt'}}
                    > <strong>Dogeeeee</strong>
                    </typography>                    
                    <IconButton style={{margin:'10pt 0pt 0pt 20pt',height:'20pt'}}>
                        <SettingsIcon color="action" />
                    </IconButton>                    
                </div>  
                <hr className={classes.serverHR} style={{'width':'160pt'}}/>   
                <ServerChannel/>           
            </div>            
            <div class={classes.serverTalk}>
              <div className='serverChannelName' style={{height:'50px',display:'flex'}}>
                  <typography
                  component="h4" 
                  variant="h4"
                  style={{color:'white',margin:'10pt 15pt'}}
                  > <strong># 幹話R你各位</strong>
                  </typography>                  
              </div>
              <hr className={classes.serverHR} style={{'width':'62vw'}}/>    
            </div>            

            <ServerMemberPage/>

          </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerPage)