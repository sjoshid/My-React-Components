import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import MainTable from './MainTable.jsx';
import Paginator from './Paginator.jsx';
import tableDataFromResource from './resources/sampleTableData';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {'pagesize': 3, 'tableData': tableDataFromResource.slice(0, 3), 'currentIndex': 0, 'indexes': [0, 3, 6]};
      this.updatePage = this.updatePage.bind(this);
			this.nextPage = this.nextPage.bind(this);
			this.previousPage = this.previousPage.bind(this);
			this.firstPage = this.firstPage.bind(this);
      this.lastPage = this.lastPage.bind(this);
      this.turnPage = this.turnPage.bind(this);
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

  calculateNextPageIndexes() {
    const existingIndexes = this.state.indexes;
    let currentIndex = existingIndexes[existingIndexes.length - 1];
    let newIndexes = [];
    let i = 0;
    while (i++ < existingIndexes.length) {
      const ind = currentIndex + this.state.pagesize;

      if (ind < tableDataFromResource.length) {
        newIndexes.push(ind);
        currentIndex = ind;
      } else {
        break;
      }
    }

    return newIndexes;
  }

  calculatePreviousPageIndexes() {
    const existingIndexes = this.state.indexes;
    let currentIndex = existingIndexes[0];
    let newIndexes = [];
    let i = 3; //This 3 will be some constant. it is better we buffer existingIndexes for easier calculations.
    while (i-- > 0) {
      const ind = currentIndex - this.state.pagesize;
      newIndexes[i] = ind;
      currentIndex = ind;
    }

    return newIndexes;
  }

  calculateIndexes(isNextPageIndexes) {

    if (isNextPageIndexes) {
      return this.calculateNextPageIndexes();
    } else {
      return this.calculatePreviousPageIndexes();
    }
  }

	nextPage(e) {
    const newIndex = this.state.indexes[this.state.indexes.length - 1] + this.state.pagesize;
		//this.updatePage(newIndex, true, true);
	}

	previousPage(e) {
    const newIndex = this.state.indexes[0] - ( 3 * this.state.pagesize); //this 3 should be a constant. 
		//this.updatePage(newIndex, true, false);
	}

	firstPage(e) {
		this.updatePage(0);
	}

	lastPage(e) {
		const newIndex = Math.ceil((tableDataFromResource.length / this.state.pagesize) - 1) * this.state.pagesize;
		this.updatePage(newIndex);
  }
  
  turnPage(e) {
    const pageIndex = e.currentTarget.attributes.index.value;
    this.updatePage(+pageIndex);
  }

  updatePage(startIndex) {
    if(startIndex >= 0 && startIndex < tableDataFromResource.length) {
      const endIndex = startIndex + this.state.pagesize;
      this.setState({ 'tableData': tableDataFromResource.slice(startIndex, Math.min(endIndex, tableDataFromResource.length)), 'currentIndex': startIndex});
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
        <Paginator pageSize={this.state.pagesize} indexesData={this.state.indexes} nextPage={this.nextPage} previousPage={this.previousPage} firstPage={this.firstPage} lastPage={this.lastPage} turnPage={this.turnPage}/>
      </div>
    );
  }
}

export default App;
