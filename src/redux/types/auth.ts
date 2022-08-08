export enum AuthActionTypes {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_CORRECT_LOGIN = 'SET_CORRECT_LOGIN',
    SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
}


export interface AuthState {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string,
    correctLogin: boolean
}

interface SetUserDataAction {
    type: AuthActionTypes.SET_USER_DATA,
    value: {
        userId: null | number,
        email: null | string,
        login: null | string,
        isAuth: boolean,
    }
}

interface SetCorrectLoginAction {
    type: AuthActionTypes.SET_CORRECT_LOGIN,
    value: null | boolean
}

interface SetCaptchaUrlAction {
    type: AuthActionTypes.SET_CAPTCHA_URL,
    value: null | string
}

export type AuthAction = SetUserDataAction | SetCorrectLoginAction | SetCaptchaUrlAction;
