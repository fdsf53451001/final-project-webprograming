import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Doge from '../../../img/doge.png';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  serverTalk:{
    width : '62vw',
  },
  chatItem:{
    display : 'flex',
  },
  generalTalkText:{

  },
});

class ServerTalkArea extends React.Component{
    // initialize
    constructor(props){
        super(props);
        // this.state = {date:new Date()};
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    talkItemProvider(){
      const classes = this.props.classes;
      let MsgArray = [];
      for(let i=0;i<10;i++){
        MsgArray.push((
          <ListItem className={classes.chatItem}>
            <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
            />
            <div className='chatItemText'>                    
                <typography className={classes.serverMemberName}
                            component="h3" 
                            variant="h3"
                > <strong>Toby Fox</strong>
                </typography> 
                <br/>
                <typography className={classes.serverMemberName}
                            component="h5" 
                            variant="h5"
                > This is a sentence.
                </typography> 
            </div>    
          </ListItem>
        ));
      }      
      
      return MsgArray;
    }

    render(){
      const classes = this.props.classes;
      return(         
        <div className='serverTalkArea'>
        <List className='serverTalkList'>
            <ListItem className={classes.chatItem}>
            <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
            />
            <div className='chatItemText'>                    
                <typography className={classes.serverMemberName}
                            component="h3" 
                            variant="h3"
                > <strong>Toby Fox</strong>
                </typography> 
                <br/>
                <typography className={classes.serverMemberName}
                            component="h5" 
                            variant="h5"
                > This is a sentence.
                </typography> 
            </div>    
            </ListItem>     
            {/* {this.talkItemProvider()} */}
        </List>               
        
        </div>   
            
      );
    }
}
  
export default withStyles(useStyles)(ServerTalkArea)