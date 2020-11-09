import React from 'react';
import MyCars from './Components/MyCars';
import './App.css';

class App extends React.Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  changeTitle = () => {
    this.setState({
      titre: 'Nouveau Catalogue Voitures'
    })
  }

  changeTitleWithParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeTitleViaBind = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeTitleViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />

        <table>
          <tr>
            <td>
              <button onClick={this.changeTitle}>Changer le nom en dur</button>
            </td>
            <td>
              <button onClick={() => this.changeTitleWithParam('Titre via param')}>Changer le nom via param</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.changeTitleViaBind.bind(this, 'Titre via bind')}>Changer le nom via bind</button>
            </td>
            <td>
              <input type="text" onChange={this.changeTitleViaInput} value={this.state.titre} />
            </td>
          </tr>
        </table>
        
      </div>
    );
  }
}

export default App;
