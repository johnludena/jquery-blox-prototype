import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";


class TextPanel extends React.Component {
  constructor(props) {
    super(props);

    let lessonData = this.props.lessons[this.props.lessonKey]

    this.state = {
      markDownData: lessonData.textPanelsMd,
      activePageIndex: 0,
      pageCount: lessonData.textPanelsMd.length || 0,
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
        <div className="TextPanel">
          <div className="ReactMarkDown">
            <ReactMarkdown>
              {this.state.markDownData[this.state.activePageIndex]}
            </ReactMarkdown>
          </div>

          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={"ReactPaginate"}
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
