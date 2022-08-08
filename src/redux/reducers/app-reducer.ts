import {getAuthThunkCreator} from './auth-reducer';
import {AppAction, AppActionTypes, AppState} from "../types/app";

const initialState: AppState = {
    initialized: false
}

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.SET_INITIALIZED:
            return {
                ...state,
                initialized: action.payload
            }
        default: 
            return state;
    }
}

export const setInitializedActionCreator = (value) => ({
    type: AppActionTypes.SET_INITIALIZED,
    payload: value
})

export const initializeAppThunkCreator = () => async (dispatch) => {
    const dispatchPromise = await dispatch(getAuthThunkCreator());
    const response = await dispatchPromise;
    dispatch(setInitializedActionCreator(true));
}

export default appReducer;