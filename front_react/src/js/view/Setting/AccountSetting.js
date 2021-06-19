import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({

});

class AccountSetting extends React.Component{
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
          <div className='accountSetting'>                       
            <h1>123</h1>
          </div>   
      );
    }
}
  
export default withStyles(useStyles)(AccountSetting);