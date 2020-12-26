import React from "react";
import ReactPaginate from 'react-paginate';

const dataArr = ['Yoooooooo', 'Hello World', 'Sike!']

class TextPanel extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: dataArr,
      activePageIndex: 0,
      pageCount: 10
    }
  }

  handlePageClick = (data) => {
    let selectedPage = data.selected;

    this.setState({ 
      activePageIndex: selectedPage,
    });
  }

  render() {
    return (
        <div className="TextPanel">
          {this.state.data[this.state.activePageIndex]}

          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        </div>

    );
  }
}

export default TextPanel;
