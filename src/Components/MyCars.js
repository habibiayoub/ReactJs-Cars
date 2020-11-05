import React from 'react';
import Car from './Cars';

class MyCars extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>

                <Car color="Red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="Blue"></Car>
            </div>
        ) 
    }
}

export default MyCars;