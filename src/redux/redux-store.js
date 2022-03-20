import { createStore, combineReducers } from 'redux';
import profileReducer from "./profile-reducer";
import peoplesReducer from './peoples-reducer'
import friendsReducer from './friends-reducer'


let reducers = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer,
    friends: friendsReducer
});

let store = createStore(reducers);
window.store = store;

export default store;