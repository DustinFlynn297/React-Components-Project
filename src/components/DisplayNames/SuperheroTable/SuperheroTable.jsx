import React from 'react';

const SuperheroTable = (props) => {
    return ( 
        <table>
            <tr>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </tr>
            {props.hero.map((item =>
            <tr><td key={item.superheroId}>{item.name}</td>
            <td key={item.superheroId}>{item.primaryAbility}</td>
            <td key={item.superheroId}>{item.secondaryAbility}</td>
            
            </tr>
            ))}
        </table>
     );
}
 
export default SuperheroTable;