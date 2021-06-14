import React from 'react';
import { withStyles } from '@material-ui/core/styles';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  
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
        <div className='serverChannel'>
            <div className='serverChannelItem'>
                <typography
                    component="h4" 
                    variant="h4"
                    style={{color:'white',margin:'15pt 15pt'}}
                    > <strong># 幹話R你各位</strong>
                </typography>
            </div>            
            <div className='serverChannelItem'>
                <typography
                    component="h4" 
                    variant="h4"
                    style={{color:'white',margin:'15pt 15pt'}}
                    ># 一般
                </typography>
            </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerPage)