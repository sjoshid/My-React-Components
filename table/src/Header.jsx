import React, { Component } from 'react';
import './css/App.css';

class Header extends Component {

	render() {
		const headerData = this.props.headerData;
    	return <tr>
    		{headerData.map((d, i) => <th onClick = {this.props.sortColumnHandler} columnIndex = {i}>{d.displayText}</th>)}
    	</tr>;
    }
}

export default Header;
