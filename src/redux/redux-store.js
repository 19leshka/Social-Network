import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from "./profile-reducer";
import peoplesReducer from './peoples-reducer'
import friendsReducer from './friends-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;