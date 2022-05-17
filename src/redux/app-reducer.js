import {getAuthThunkCreator} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.value
            }
        default: 
            return state;
    }
}

export const setInitializedActionCreator = (value) => ({
    type: SET_INITIALIZED,
    value: value
})

export const initializeAppThunkCreator = () => async (dispatch) => {
    const dispatchPromise = await dispatch(getAuthThunkCreator());
    const response = await dispatchPromise;
    dispatch(setInitializedActionCreator(true));
}

export default appReducer;