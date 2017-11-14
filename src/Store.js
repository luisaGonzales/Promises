import createStore from 'redux-zero';

const initialState = {
    items : [],
    allResults : null,
}

const store = createStore(initialState);

export default store; 