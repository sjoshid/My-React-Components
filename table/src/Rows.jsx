import React, { Component } from 'react';
import Columns from './Columns.jsx'

class Rows extends Component {

	render() {
		const rowData = this.props.rowData;
    	return <tr>
    		{rowData.map(d => <Columns columnData = {d} />)}
    	</tr>
    }
}

export default Rows;