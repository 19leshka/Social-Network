import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './reducers/profile-reducer';
import peoplesReducer from './reducers/peoples-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';
import newsReducer from './reducers/news-reducer';
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers({
    myProfile: profileReducer,
    peoples: peoplesReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    news: newsReducer
});

export type RootState = ReturnType<typeof rootReducer>

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store;