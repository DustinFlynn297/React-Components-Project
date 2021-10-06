import React from 'react';

const NamesList = (props) => {
    return ( 
        <div>
            <ol>                
                {props.listNames.map(function(stuff){
                    return <li>{stuff}</li>
                })}               
            </ol>
        </div>
     );
}
 
export default NamesList;