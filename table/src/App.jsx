import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import MainTable from './MainTable.jsx';
import Paginator from './Paginator.jsx';
import tableDataFromResource from './resources/sampleTableData';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {'pagesize': 3, 'tableData': {tableDataFromResource}};
      this.updatePage = this.updatePage.bind(this);
	 }

  componentWillMount() {
    this.setState({'tableData': tableDataFromResource.slice(0, this.state.pagesize)});
  }

  updatePage(startIndex) {
    const endIndex = startIndex + this.state.pagesize;
    this.setState({'tableData': tableDataFromResource.slice(startIndex, endIndex)});
  }

  render() {
    let tableMetaData = [{'displayText': 'H1', 'type': 'number'}, {'displayText': 'H2', 'type': 'string'}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{1 + 2}</h1>
        </header>

        <MainTable tableMetaData = {tableMetaData} tableData = {this.state.tableData}/>
        <Paginator pagesize = {this.state.pagesize} updatepage = {this.updatePage}/>
      </div>
    );
  }
}

export default App;
