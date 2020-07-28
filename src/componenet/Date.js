import React, { Component } from "react" ; 


class DateNow extends Component {
constructor (props) {
    super(props) ;
    this.state = {
        time : new Date()
    }
}
componentDidMount(){ 
    setInterval(() => {
        this.setState ({
            time: new Date()
        });
    },1000) 
}

render() {
    return <div style={{marginLeft:'200px' , marginTop:'200px'}}>
        <b>Time is</b> <p style={{ color : 'fff' }} >{this.state.time.toLocaleTimeString()}</p>
    </div>
}
}
export default DateNow ;