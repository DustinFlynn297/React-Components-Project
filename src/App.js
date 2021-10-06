import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames';
import NamesList from './components/DisplayNames/NamesList/NamesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: 'Reggie',
      lastName: 'White'
     }
    this.names = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
    this.stateNames = {
      nameNumber: 0
    }
  }
  goToNextName = () => {
    let tempNameNumber = this.stateNames.nameNumber;
    tempNameNumber++;

  }

  render() { 
    return ( 
      <div>
        <h1>Names</h1>
        <hr />
        <DisplayNames name={this.state}/>   
        <NamesList listNames={this.names} nextName={this.goToNextName}/>     
      </div>
     );
  }
}
 
export default App;
