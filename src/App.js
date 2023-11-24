import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import SelectAdventurer from "./SelectAdventurer";
import ShowPath from './ShowPath';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAdventurer: ""
    };

    this.setAdventurer = this.setAdventurer.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {(this.state.selectedAdventurer === "Prinna" || this.state.selectedAdventurer === "Rain" || this.state.selectedAdventurer === "Nimbus") ?
          <ShowPath adventurerName={this.state.selectedAdventurer} selectAdventurer={this.setAdventurer}/>
        :
          <SelectAdventurer selectAdventurer={this.setAdventurer}/>}
        </header>
      </div>
    );
  }

  setAdventurer(adventurerName) {
    this.setState({
      selectedAdventurer: adventurerName
    });
  }
}

export default App;
