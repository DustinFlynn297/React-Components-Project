import React from 'react';


const DisplayNames = (props) => {
    return ( 
        <div className="col-md-4">
            <h1>{props.name.firstName} {props.name.lastName}</h1> 
        </div>
     );
}
 
export default DisplayNames;