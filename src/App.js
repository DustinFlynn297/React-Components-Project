import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames';
import NamesList from './components/DisplayNames/NamesList/NamesList';
import AlertUser from './components/DisplayNames/AlertUser/AlertUser';
import SuperheroTable from './components/DisplayNames/SuperheroTable/SuperheroTable';


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
    this.hero = {
      superheroes: [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondaryAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondaryAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondaryAbility: 'Shoots web'
          }
      ]
    }
  }
  alertUser = () => {
    alert("devCodeCamp")
  }

  render() { 
    return ( 
      <div>
        <h1>Names</h1>
        <hr />        
        <DisplayNames name={this.state}/>   
        <NamesList listNames={this.list.names}/>
        <h1>Alert user</h1>
        <hr />        
        <AlertUser alerts={this.alertUser}/>
        <h1>Super Heroes Table</h1>
        <hr /> 
        <SuperheroTable hero={this.hero.superheroes}/>

      </div>
     );
  }
}
 
export default App;
