import { createStore } from 'redux';

const initialState = {
    characters: []
}

function CharactersListReducer(state = initialState, action) {
    switch (action.type) {
      case 'IS_CHARACTERS':
        return {...state, characters: action.payload}
      default:
        return state
    }
}

let store = createStore(CharactersListReducer);

export default store;