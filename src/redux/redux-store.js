import { createStore, combineReducers } from 'redux';
import profileReducer from "./profile-reducer";
import peoplesReducer from './peoples-reducer'
import friendsReducer from './friends-reducer'
import usersReducer from './users-reducer'


let reducers = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer,
    friends: friendsReducer,
    users: usersReducer
});

let store = createStore(reducers);
window.store = store;

export default store;