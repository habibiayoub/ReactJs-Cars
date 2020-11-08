import React from 'react';

const Car = ({children, color, year}) => {

    const colorInfo = color ? (<p>Couleur : {color} </p>) : (<p>Couleur : Néant </p>);
    const yearInfo = year ? (<p>Age : {year} </p>) : (<p>Age : Néant </p>);

    if(children) {
        return(
            <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
                <p>Marque : {children}</p>
                {colorInfo}
                {yearInfo}
            </div>
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