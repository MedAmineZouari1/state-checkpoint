import React from 'react';
import myImage from "./myimage.png"
import DateNow from "./componenet/Date"
class Toggle extends React.Component {
  state = {
    person:{fullName: "medamine", bio:"I'm 16", profession:"Developper"},
      
    
    show: true,
  }

  
 
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          Click Here
        </button>    
    {this.state.show && <div className="text">{this.state.person.fullName},{this.state.person.bio},{this.state.person.profession} <img src={myImage} alt ='myImage' /></div>}
      <DateNow/>
      </div>
     );
  }
}

export default Toggle;

