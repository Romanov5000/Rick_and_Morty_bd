import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    characters: [],
    paginator: {
      prevPageUrl: "https://rickandmortyapi.com/api/episode?page=2",
      nextPageUrl: "https://rickandmortyapi.com/api/episode?page=3",
      pageCount: 6,
    }
}

function MainReducer(state = initialState, action) {
    switch (action.type) {
      case 'IS_CHARACTERS':
        return {...state, characters: action.payload}
        case 'GET_NEXT_PAGE':
          return {...state, paginator: action.payload}
      default:
        return state
    }
}

let store = createStore(MainReducer, applyMiddleware(thunk));

export default store;