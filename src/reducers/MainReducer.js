import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  characters: [],
  episodes: [],
  locations: [],
  paginator: {
    prevPageUrl: null,
    nextPageUrl: null,
    currentPage: null,
    pageCount: null,
  },
};

function MainReducer(state = initialState, action) {
  switch (action.type) {
    case "IS_CHARACTERS":
      return {
        ...state,
        characters: action.payload.characters,
        paginator: action.payload.paginator,
      };
    case "IS_EPISODES":
      return {
        ...state, episodes: action.payload.responseEpisodesArr,
        paginator: action.payload.paginator,
      };
    case "IS_LOCATION":
      return {
        ...state, locations: action.payload.responseLocationArr,
        paginator: action.payload.paginator,
      };
    default:
      return state;
  }
}

let store = createStore(MainReducer, applyMiddleware(thunk));

export default store;
