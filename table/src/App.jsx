import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import MainTable from './MainTable.jsx';
import Paginator from './Paginator.jsx';
import tableDataFromResource from './resources/sampleTableData';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {'pagesize': 3, 'tableData': tableDataFromResource.slice(0, 3), 'currentIndex': 0};
      this.updatePage = this.updatePage.bind(this);
	 }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }

  updatePage(startIndex) {
    if(startIndex >= 0 && startIndex < tableDataFromResource.length) {
      const endIndex = startIndex + this.state.pagesize;
      this.setState({'tableData': tableDataFromResource.slice(startIndex, Math.min(endIndex, tableDataFromResource.length - 1)), 'currentIndex': startIndex});
    }
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
        <Paginator pagesize = {this.state.pagesize} updatepage = {this.updatePage} currentindex = {this.state.currentIndex}/>
      </div>
    );
  }
}

export default App;
