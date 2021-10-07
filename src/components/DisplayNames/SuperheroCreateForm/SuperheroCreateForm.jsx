import React, { Component } from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''

         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSuperhero(this.state)
    }


    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label> Set a Superhero ID # </label>                
                <input name="id" onChange={this.handleChange} value={this.state.id}/>
                <br />
                <label> Superhero Name </label>
                <input name="name" onChange={this.handleChange} value={this.state.name}/>
                <br />
                <label> Primary Ability </label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                <br />
                <label> Secondary Ability </label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}/>
                <br />
                <button type="submit"> Create Superhero</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;