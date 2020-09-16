import React from "react";
import { connect } from "react-redux";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
  const {
    nextPageUrl,
    prevPageUrl,
    currentPage,
    getNextPage,
    getPrevPage,
  } = props;

  return (
    <div className={styles.Paginator}>
      {prevPageUrl && (
        <button onClick={() => getPrevPage(prevPageUrl)}>Prev List</button>
      )}
      <span>{currentPage}</span>
      {nextPageUrl && (
        <button onClick={() => getNextPage(nextPageUrl)}>Next List</button>
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
