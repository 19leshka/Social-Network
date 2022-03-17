import { createStore, combineReducers } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer'


let reducers = combineReducers({
    myProfile: profileReducer,
    dialogs: dialogsReducer
});

let store = createStore(reducers);

export default store;