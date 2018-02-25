import React, { Component } from 'react';
import './App.css';
import tableData from './sampleTableData';
import Rows from './Rows.jsx';
import Header from './Header.jsx';

class MainTable extends Component {
	constructor(props) {
	    super(props);
	    this.state = {'tableData': tableData};
	    this.sortColumnHandler = this.sortColumnHandler.bind(this);
	    this.sortNumberCol = this.sortNumberCol.bind(this);
	    this.sortStringColumn = this.sortStringColumn.bind(this);
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
	    	if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0
	    });

	    return a;
	}

	render() {
		const tableMetaData = this.props.tableMetaData; // <<=== This metadata should come from props?
		const tableData = this.state.tableData;
    	return <div>
    		<table border='1'>
    			<Header headerData = {tableMetaData} sortColumnHandler = {this.sortColumnHandler}/>
    			{tableData.map(d => <Rows rowData = {d} />)}
    		</table>
    	</div>;
    }
}

export default MainTable;