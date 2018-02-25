import React, { Component } from 'react';

class Columns extends Component {

	render() {
		const columnData = this.props.columnData;
    	return <td>
    		{columnData}
    	</td>
    }
}

export default Columns;