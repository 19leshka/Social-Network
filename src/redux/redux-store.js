import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profile-reducer';
import peoplesReducer from './peoples-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;