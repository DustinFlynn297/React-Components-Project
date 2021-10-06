import React from 'react';

const NamesList = (props) => {
    return ( 
        <div>
            <ol>
                
                <li>{props.listNames.names[0]}</li>
                <li>{props.listNames.names[1]}</li>
                <li>{props.listNames.names[2]}</li>
                <li>{props.listNames.names[3]}</li>
                <li>{props.listNames.names[0]}</li>
            </ol>
        </div>
     );
}
 
export default NamesList;