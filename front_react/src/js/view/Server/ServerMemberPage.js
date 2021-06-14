import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Doge from '../../../img/doge.png';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  serverMember:{
    'background-color': GRAY_2,
    width : '160pt',
    // display: 'grid',
  },
  serverMemberItem:{
    margin:'0px 10px',
    display:'flex',
    height:'60px',
  },
  serverMemberIcon:{
    margin : '15pt 10pt 0pt 17pt',
  },
  serverMemberName:{
    color:'white',
    margin:'20pt 0',
  }
});

class ServerMemberPage extends React.Component{
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
        <div class={classes.serverMember}>
            <div class={classes.serverMemberItem}>
                <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
                />
                <typography className={classes.serverMemberName}
                            component="h3" 
                            variant="h3"
                > <strong>Toby</strong>
                </typography>
            </div>
            <div class={classes.serverMemberItem}>
                <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
                />
                <typography className={classes.serverMemberName}
                            component="h3" 
                            variant="h3"
                > <strong>Toby Fox</strong>
                </typography>
            </div>
            <div class={classes.serverMemberItem}>
                <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
                />
                <typography className={classes.serverMemberName}
                            component="h3" 
                            variant="h3"
                > <strong>Toby Yooo</strong>
                </typography>
            </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerMemberPage)