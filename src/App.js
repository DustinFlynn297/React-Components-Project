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
    this.list = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
  }

  render() { 
    return ( 
      <div>
        <h1>Names</h1>
        <hr />        
        <DisplayNames name={this.state}/>   
        <NamesList listNames={this.list.names}/>     
      </div>
     );
  }
}
 
export default App;
