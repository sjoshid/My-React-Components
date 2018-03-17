import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import MainTable from './MainTable.jsx';
import Paginator from './Paginator.jsx';
import tableDataFromResource from './resources/sampleTableData';

const pagesToShow = 3; //Maybe we can read this value from a config file or something,
const pageSize = 3; //This one too.

class App extends Component {
	constructor(props) {
	    super(props);
      this.state = { 'tableData': tableDataFromResource.slice(0, pageSize), 'indexes': [0, 3, 6]};
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

  calculateNextPageIndexes(lastIndexOfCurrentPage) {
    let currentIndex = lastIndexOfCurrentPage;
    let newIndexes = [];
    let i = 0;
    while (i++ < pagesToShow) {
      const ind = currentIndex + pageSize;

      if (ind < tableDataFromResource.length) {
        newIndexes.push(ind);
        currentIndex = ind;
      } else {
        newIndexes.push(-1); //invalid to buffer up
      }
    }

    return newIndexes;
  }

  calculatePreviousPageIndexes() {
    const existingIndexes = this.state.indexes;
    let currentIndex = existingIndexes[0];
    let newIndexes = [];
    let i = pagesToShow;
    while (i-- > 0) {
      const ind = currentIndex - pageSize;
      newIndexes[i] = ind;
      currentIndex = ind;
    }

    return newIndexes;
  }

	nextPage(e) {
    const lastIndex = this.state.indexes[this.state.indexes.length - 1];
    if(lastIndex !== -1) {
      let nextIndexes = this.calculateNextPageIndexes(lastIndex);
      this.setState({ 'indexes': nextIndexes });
      
      let nextPageFirstIndex = nextIndexes[0];
      if (nextPageFirstIndex !== -1) {
        this.updatePage(nextPageFirstIndex);
      }
    }
	}

	previousPage(e) {
    const firstIndex = this.state.indexes[0];
    if (firstIndex !== 0) {
      let previousIndexes = this.calculatePreviousPageIndexes();
      this.setState({ 'indexes': previousIndexes });
      
      let lastIndexOfPreviousPage = previousIndexes[previousIndexes.length - 1];
      this.updatePage(lastIndexOfPreviousPage);
    }
	}

	firstPage(e) {
    let nextIndexes = this.calculateNextPageIndexes(-3);
    this.setState({ 'indexes': nextIndexes });
		this.updatePage(0);
	}

	lastPage(e) {
    const totalRecords = pageSize * pagesToShow;
    const remainder = tableDataFromResource.length % totalRecords;
    if(remainder !== 0) {
      let firstIndexOfLastPage = tableDataFromResource.length - remainder;
      let nextIndexes = this.calculateNextPageIndexes(firstIndexOfLastPage - pageSize);
      this.setState({ 'indexes': nextIndexes });
      this.updatePage(nextIndexes[0]);
    } else {
      let nextIndexes = this.calculateNextPageIndexes(tableDataFromResource.length - totalRecords - pageSize);
      this.setState({ 'indexes': nextIndexes });
      this.updatePage(nextIndexes[0]);
    }
  }
  
  turnPage(e) {
    const pageIndex = e.currentTarget.attributes.index.value;
    this.updatePage(+pageIndex);
  }

  updatePage(startIndex) {
    if(startIndex >= 0 && startIndex < tableDataFromResource.length) {
      const endIndex = startIndex + pageSize;
      this.setState({'tableData': tableDataFromResource.slice(startIndex, Math.min(endIndex, tableDataFromResource.length))});
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
        <Paginator pageSize={pageSize} indexesData={this.state.indexes} nextPage={this.nextPage} previousPage={this.previousPage} firstPage={this.firstPage} lastPage={this.lastPage} turnPage={this.turnPage}/>
      </div>
    );
  }
}

export default App;
