import React, { Component } from 'react';

class Paginator extends Component {
	constructor(props) {
	    super(props);
      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
	 }

  nextPage(e) {
    const pageSize = this.props.pagesize;
    const newIndex = this.props.currentindex + pageSize;
    this.props.updatepage(newIndex);
  }

  previousPage(e) {
    const pageSize = this.props.pagesize;
    const newIndex = this.props.currentindex - pageSize;
    this.props.updatepage(newIndex);
  }

	render() {
    return <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item"><label class="page-link" onClick = {this.previousPage}>Previous</label></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">..</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><label class="page-link" onClick = {this.nextPage}>Next</label></li>
        </ul>
      </nav>
    </div>
  }
}

export default Paginator;
