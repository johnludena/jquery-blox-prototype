import React from "react";
import ReactPaginate from 'react-paginate';

const dataArr = ['Yoooooooo', 'Hello World', 'Sike!']

class TextPanel extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: dataArr,
      offset: 0,
      pageCount: 10
    }
  }

  handlePageClick = (data) => {
    console.log({data})
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    // NOTE: Looks like executing state as callback form is important here...
    this.setState({ offset: offset }, () => {
      // this.loadCommentsFromServer();
      console.log('state has finished being changed...')
    });
  }

  render() {
    return (
        <div className="TextPanel">
          <h2>Understanding the basics</h2>

          <p>
            Programming is often highly collaborative. In addition, our own code
            can quickly become difficult to understand when we return to it—
            sometimes only an hour later! For these reasons, it’s often useful
            to leave notes in our code for other developers or ourselves.
          </p>

          <p>
            As we write JavaScript, we can write comments in our code that the
            computer will ignore{" "}
            <a href="http://www.google.com">as our program runs</a>. These
            comments exist just for human readers.
          </p>

          <p>
            Comments can explain what the code is doing, leave instructions for
            developers using the code, or add any other useful annotations.
          </p>

          <p>There are two types of code comments in JavaScript:</p>

          <p>
            A single line comment will comment out a single line and is denoted
            with two forward slashes // preceding it.
          </p>

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
