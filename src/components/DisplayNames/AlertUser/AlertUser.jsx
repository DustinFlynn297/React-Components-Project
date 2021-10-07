import React, { Component } from 'react';

class AlertUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alert: ''
         }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.alerts();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Click Me</button>            
            </form>                            
         );
    }
}
 
export default AlertUser;