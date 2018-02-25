import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './App.css';
import MainTable from './MainTable.jsx';

class App extends Component {

  render() {
    let tableMetaData = [{'displayText': 'H1', 'type': 'number'}, {'displayText': 'H2', 'type': 'string'}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{1 + 2}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> 2 and save to reload. Bonkers!
        </p>
        <MainTable tableMetaData = {tableMetaData} />
      </div>
    );
  }
}

export default App;
