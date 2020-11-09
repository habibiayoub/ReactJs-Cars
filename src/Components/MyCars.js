import React, {Component, Fragment} from 'react';
import Car from './Cars';

class MyCars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'Red', year: 2000},
            {name: 'Mercedes', color: 'Black', year: 2010},
            {name: 'Peugeot', color: 'Green', year: 2018},
        ]
    }

    noCopy = () => {
        alert('Merci de ne pas copier le test!');
    }

    addStyle = (e) => {
        console.log(e);

        if(e.target.classList.contains('styleOnHover')) {
            e.target.classList.remove('styleOnHover');
        } else {
            e.target.classList.add('styleOnHover');
        }
        
    }

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {return param.year -= 10;})

        this.setState({
            updatedState
        })
    }

    render() {

        const curentYear = new Date().getFullYear();

        return(
            <>
                <h1 onMouseOver = {this.addStyle}>{this.props.title}</h1>
                <p onCopy = {this.noCopy}>Show popup when copy.</p>

                <button onClick={this.addTenYears}> + 10 ans</button>

                {/* <Car year={curentYear - this.state.voitures[0].year + ' ans'} color={this.state.voitures[0].color}>{this.state.voitures[0].name}</Car>
                <Car year={curentYear - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
        <Car year={curentYear - this.state.voitures[2].year + ' ans'} color={this.state.voitures[2].color}>{this.state.voitures[2].name}</Car> */}
            
                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>
                    {
                        this.state.voitures.map((voiture, index) => {
                            return(
                                <Fragment key={index}>
                                    <Car year={curentYear - voiture.year + ' ans'} color={voiture.color}>{voiture.name}</Car>
                                </Fragment>
                            )
                        })
                    }
                </table>
            
            </>
        ) 
    }
}

export default MyCars;