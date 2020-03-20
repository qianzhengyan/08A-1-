import { createStore } from 'redux'

let initState = {
    data:[[1,2,3,4],['a','b','c','d']]
}

const reducer = (state = initState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'ADD':
            newState[action.key] = action.value
            return newState;
        default:
            return newState;
    }
};

const store = createStore(reducer)

export default store