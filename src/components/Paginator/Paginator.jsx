import React from "react";
import { connect } from "react-redux";

const Paginator = (props) => {
  const {
    nextPageUrl,
    prevPageUrl,
    currentPage,
    getNextPage,
    getPrevPage,
  } = props;

  return (
    <div className="Paginator">
      {prevPageUrl && (
        <button onClick={() => getPrevPage(prevPageUrl)}>prevBtn</button>
      )}
      <span>{currentPage}</span>
      {nextPageUrl && (
        <button onClick={() => getNextPage(nextPageUrl)}>nextBtn</button>
      )}
    </div>
  );
};


const mapStateToProps = (state) => ({
  nextPageUrl: state.paginator.nextPageUrl,
  prevPageUrl: state.paginator.prevPageUrl,
  pageCount: state.paginator.pageCount,
  currentPage: state.paginator.currentPage,
  paginatorPage: state.paginator.paginatorPage,
});

const mapDispatchToProps = (dispatch, props) => ({
  getNextPage: (nextPageUrl) => dispatch(props.onPaginatorPage(nextPageUrl)),
  getPrevPage: (prevPageUrl) => dispatch(props.onPaginatorPage(prevPageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
