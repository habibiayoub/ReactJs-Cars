import React from 'react';
import MyCars from './Components/MyCars';
import './App.css';

class App extends React.Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
