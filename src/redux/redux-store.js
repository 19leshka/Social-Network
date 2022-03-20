import { createStore, combineReducers } from 'redux';
import profileReducer from "./profile-reducer";
import peoplesReducer from './peoples-reducer'


let reducers = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer
});

let store = createStore(reducers);
window.store = store;

export default store;