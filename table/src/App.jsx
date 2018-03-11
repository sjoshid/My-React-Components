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
			this.nextPage = this.nextPage.bind(this);
			this.previousPage = this.previousPage.bind(this);
			this.firstPage = this.firstPage.bind(this);
			this.lastPage = this.lastPage.bind(this);
	 }

  componentWillMount() {
    //console.log("componentWillMount");
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps");
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch");
  }

	nextPage(e) {
    const newIndex = this.state.currentIndex + this.state.pagesize;
		this.updatePage(newIndex);
	}

	previousPage(e) {
    const newIndex = this.state.currentIndex - this.state.pagesize;
		this.updatePage(newIndex);
	}

	firstPage(e) {
		this.updatePage(0);
	}

	lastPage(e) {
		const newIndex = Math.ceil((tableDataFromResource.length / this.state.pagesize) - 1) * this.state.pagesize;
		this.updatePage(newIndex);
	}

  updatePage(startIndex) {
    if(startIndex >= 0 && startIndex < tableDataFromResource.length) {
      const endIndex = startIndex + this.state.pagesize;
      this.setState({'tableData': tableDataFromResource.slice(startIndex, Math.min(endIndex, tableDataFromResource.length)), 'currentIndex': startIndex});
    }
  }

  render() {
    let tableMetaData = [{'displayText': 'H1', 'type': 'number'}, {'displayText': 'H2', 'type': 'string'}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Table Component in React</h1>
        </header>

        <MainTable tableMetaData = {tableMetaData} tableData = {this.state.tableData}/>
        <Paginator nextPage = {this.nextPage} previousPage = {this.previousPage} firstPage = {this.firstPage} lastPage = {this.lastPage} />
      </div>
    );
  }
}

export default App;
