import React, { Component } from 'react';

class Paginator extends Component {
	constructor(props) {
	    super(props);
	 }

	render() {
    return <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
					<li class="page-item"><label class="page-link" onClick = {this.props.firstPage}>First</label></li>
          <li class="page-item"><label class="page-link" onClick = {this.props.previousPage}>Previous</label></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">..</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><label class="page-link" onClick = {this.props.nextPage}>Next</label></li>
					<li class="page-item"><label class="page-link" onClick = {this.props.lastPage}>Last</label></li>
        </ul>
      </nav>
    </div>
  }
}

export default Paginator;
