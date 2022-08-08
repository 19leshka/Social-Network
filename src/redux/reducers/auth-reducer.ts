import {authAPI} from '../../api/api';
import {securityAPI} from '../../api/api';
import {AuthAction, AuthActionTypes, AuthState} from "../types/auth";

const initialState: AuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
    correctLogin: true
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_USER_DATA:
            return {
                ...state,
                ...action.value
            }
        case AuthActionTypes.SET_CORRECT_LOGIN:
            return {
                ...state,
                correctLogin: action.value
            }
        case AuthActionTypes.SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.value
            }
        default: 
            return state;
    }
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({
    type: AuthActionTypes.SET_USER_DATA,
    value: {
        userId: userId,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

export const setCorrectLoginActionCreator = (value) => ({
    type: AuthActionTypes.SET_CORRECT_LOGIN,
    value: value
})

export const setCaptchaUrlActionCreator = (value) => ({
    type: AuthActionTypes.SET_CAPTCHA_URL,
    value: value
})

export const getAuthThunkCreator = () => async (dispatch) => {
    const response = await authAPI.me()
    if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserDataActionCreator(id, email, login, true));
    }
}

export const loginThunkCreator = (formData) => async (dispatch) => {
    const response = await authAPI.login(formData.email, formData.password, formData.rememberMe = false, formData.captcha);
    if(response.data.resultCode === 0) {
        dispatch(getAuthThunkCreator());
        dispatch(setCorrectLoginActionCreator(true));
    }else{
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }
        dispatch(setCorrectLoginActionCreator(false));
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlActionCreator(captchaUrl))
}

export const logoutThunkCreator = () => async (dispatch) => {
    const response = await authAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
        dispatch(setCorrectLoginActionCreator(true));
        dispatch(setCaptchaUrlActionCreator(null))
    }
}

export default authReducer;