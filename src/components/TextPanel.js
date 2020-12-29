import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark as syntaxHighlighterTheme} from 'react-syntax-highlighter/dist/esm/styles/prism'


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

    // markdown with JS code highlights renderer
    const renderers = {
      code: ({language, value}) => {
        return <SyntaxHighlighter style={syntaxHighlighterTheme} language={language} children={value} />
      }
    }

    const markDownData = this.state.markDownData[this.state.activePageIndex];

    return (
        <div className="TextPanel">
          <div className="ReactMarkDown">
            <ReactMarkdown renderers={renderers} children={markDownData} />
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
