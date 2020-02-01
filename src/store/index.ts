import { createStore, combineReducers } from 'redux';
interface Person {
    type: string;
    data: object;
}
function reducer1(state = { data: [] }, action: Person) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'DATA':
            newState.data = action.data;
            return newState;
        default:
            return newState;
    }
}
function reducer2(state = [], action: any) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'ADDDATA':
            newState.data = action.data;
            return newState;
        default:
            return newState;
    }
}
let reducers = combineReducers({ reducer1, reducer2 });
let store = createStore(reducers);
export default store;
