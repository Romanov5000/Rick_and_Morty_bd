import React from 'react';
import { connect } from 'react-redux';


const Paginator = (props) => {
    const { nextPageUrl, prevPageUrl, pageCount, getNextPage} = props;
    return (
        <div className='paginator'>
            { prevPageUrl && <button>prevBtn</button>}
            { nextPageUrl && <button onClick={getNextPage}>nextBtn</button>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    nextPageUrl: state.paginator.nextPageUrl,
    prevPageUrl: state.paginator.prevPageUrl,
    pageCount: state.paginator.pageCount,
})

const mapDispatchToProps = (dispatch) => ({
    getNextPage: () => dispatch({type: 'GET_NEXT_PAGE'}),

})

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);