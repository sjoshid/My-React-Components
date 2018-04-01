import React, { Component } from 'react';

class Paginator extends Component {

	render() {
    const pageSize = this.props.pageSize;
    return <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
					<li class="page-item"><label class="page-link" onClick = {this.props.firstPage}>First</label></li>
          <li class="page-item"><label class="page-link" onClick = {this.props.previousPage}>Previous</label></li>

          {this.props.indexesData.map((ind, i) => <li class="page-item"><label class="page-link" index={ind} onClick={this.props.turnPage}>{ind !== -1? ind/pageSize+1: 0}</label></li>)}

          <li class="page-item"><label class="page-link" onClick = {this.props.nextPage}>Next</label></li>
					<li class="page-item"><label class="page-link" onClick = {this.props.lastPage}>Last</label></li>
        </ul>
      </nav>
    </div>
  }
}

export default Paginator;
