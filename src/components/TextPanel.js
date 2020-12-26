import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

class TextPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markDownData: this.props.lessons[this.props.lessonKey].textPanelsMd,
      activePageIndex: 0,
      pageCount: 10,
    };
  }

  handlePageClick = (data) => {
    let selectedPage = data.selected;

    this.setState({
      activePageIndex: selectedPage,
    });
  };

  render = () => {
    return (
      <div className="TextPanelWrapper">
        <div className="TextPanel">
          <div className="ReactMarkDown">
            <ReactMarkdown>
              {this.state.markDownData[this.state.activePageIndex]}
            </ReactMarkdown>
          </div>

          
        </div>

        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
      </div>
    );
  };
}

const mapStateToProps = function (state) {
  const { lessons } = state.lessonsReducer;
  return { lessons };
};

export default connect(mapStateToProps)(TextPanel);
