import {authAPI} from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CORRECT_LOGIN = 'SET_CORRECT_LOGIN';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    correctLogin: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.value
            }
        case SET_CORRECT_LOGIN:
            return {
                ...state,
                correctLogin: action.value
            }
        default: 
            return state;
    }
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    value: {
        userId: userId,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

export const setCorrectLoginActionCreator = (value) => ({
    type: SET_CORRECT_LOGIN,
    value: value
})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        return authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserDataActionCreator(id, email, login, true));
            }
        })
    }
}

export const loginThunkCreator = (formData) => {
    return (dispatch) => {
        authAPI.login(formData.email, formData.password, formData.rememberMe = false).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthThunkCreator());
                dispatch(setCorrectLoginActionCreator(true));
            }else{
                dispatch(setCorrectLoginActionCreator(false));
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserDataActionCreator(null, null, null, false));
                dispatch(setCorrectLoginActionCreator(true));
            }
        })
    }
}

export default authReducer;