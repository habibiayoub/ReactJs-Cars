import React from 'react';

const Car = ({children, color, year}) => {

    const colorInfo = color ? (`Couleur : ${color}`) : ('Couleur : Néant');
    const yearInfo = year ? (<p>Age : {year} </p>) : (<p>Age : Néant </p>);

    if(children) {
        return(
            <tr>
                <td>Marque : {children}</td>
                <td>{yearInfo}</td>
                <td>{colorInfo}</td>
                
            </tr>
        )
    } else {
        return(
            <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
                <p>Pas de data</p>
            </div>
        )
    }
}

export default Car;