import React, { Component } from 'react';
import './css/App.css';
import Rows from './Rows.jsx';
import Header from './Header.jsx';

class MainTable extends Component {
	constructor(props) {
	    super(props);
	    this.state = {'tableData': this.props.tableData};
	    this.sortColumnHandler = this.sortColumnHandler.bind(this);
	    this.sortNumberCol = this.sortNumberCol.bind(this);
	    this.sortStringColumn = this.sortStringColumn.bind(this);
	 }

  componentWillMount() {
    //console.log("main table componentWillMount");
  }

  componentDidMount() {
    //console.log("main table componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    //console.log("main table componentWillReceiveProps. Updating state..");
		this.setState({'tableData': nextProps.tableData}); //We will always get new data so diff between nextProps and current props is NOT required.
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log("main table componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("main table componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("main table componentWillUnmount");
  }

  componentDidCatch(error, info) {
    //console.log("main table componentDidCatch");
  }

	sortColumnHandler(e) {
	 	let columnIndex = e.currentTarget.attributes.columnIndex.value;
	 	const tableMetaData = this.props.tableMetaData;
	 	let columnType = tableMetaData[columnIndex].type;

	 	if(columnType === 'number') {
		 	let sortedData = this.sortNumberCol(this.state.tableData, columnIndex);
		 	this.setState({'tableData': sortedData});
		} else if (columnType === 'string') {
			let sortedData = this.sortStringColumn(this.state.tableData, columnIndex);
		 	this.setState({'tableData': sortedData});
		}
	}

	sortNumberCol(a, colIndex){
	    a.sort((a, b) => a[colIndex] - b[colIndex]);
    	return a;
	}

	sortStringColumn(a, colIndex){
	    a.sort((a, b) => {
	    	if (a[colIndex] < b[colIndex]) {
				return -1;
			}
			if (a[colIndex] > b[colIndex]) {
				return 1;
			}
			return 0
	    });

	    return a;
	}

	render() {
		const tableMetaData = this.props.tableMetaData; // <<=== This metadata should come from props?
		const tableData = this.state.tableData;
    	return <div align="center">
    		<table border='1'>
					<tbody>
	    			<Header headerData = {tableMetaData} sortColumnHandler = {this.sortColumnHandler}/>
	    			{tableData.map(d => <Rows rowData = {d} />)}
					</tbody>
    		</table>
    	</div>;
    }
}

export default MainTable;
