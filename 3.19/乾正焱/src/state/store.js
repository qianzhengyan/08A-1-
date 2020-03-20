import data from '../data/data.json';
import { createStore } from 'redux';
let obj={
    list:data
}
function reduce(state=obj,action){
    switch(action.type){
        case '':
            return state;
        default:
            return state;
    }
}
let store = createStore(reduce);
export default store;