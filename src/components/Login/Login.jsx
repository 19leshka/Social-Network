import s from './Login.module.css';
import {loginThunkCreator} from '../../redux/reducers/auth-reducer';
import {logoutThunkCreator} from '../../redux/reducers/auth-reducer';
import {getAuthThunkCreator} from '../../redux/reducers/auth-reducer';
import {connect} from 'react-redux';
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom';

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
};

const validate = (values) => {
    let errors = {};

    if(!values.email) {
        errors.email = 'Required'
    }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
        errors.email = 'Invalid email'
    }

    if(!values.password) {
        errors.password = 'Required'
    }

    return errors;
}

const LoginForm = (props) => {
    const navigate = useNavigate();

    const onSubmit = (values) => {
        let formData = {
            email: values.email,
            password: values.password, 
            rememberMe: values.rememberMe,
            captcha: values.captcha
        }
        login(formData);
    }

    let formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const login = (formData) => {
        props.login(formData);
        navigate(`/profile/${props.userId}`);
    }

    return (
        <>
            <form className={s.loginForm} onSubmit={formik.handleSubmit}>
                <div className={s.loginInput}>
                    <input className={s.emailInput} name="email" required={true} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.login}/>
                    <span className={s.bar}></span>
                    <label className={s.textInputLabel}>Email</label>
                    {formik.errors.email && formik.touched.email ? <div className={s.error}>{formik.errors.email}</div> : null}
                </div>
                <div className={s.loginInput}>
                    <input className={s.passwordInput} name="password" required={true} type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
                    <span className={s.bar}></span>
                    <label className={s.textInputLabel}>Password</label>
                    {formik.errors.password && formik.touched.password ? <div className={s.error}>{formik.errors.password}</div> : null}
                </div>
                <div className={s.loginInput}>
                    <label>Remember me:</label>
                    <input className={s.rememberInput} name="rememberMe" type="checkbox" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rememberMe}/>
                </div>
                {props.captchaUrl && <div className={s.captchaImg}><img src={props.captchaUrl}/></div>}
                {props.captchaUrl && <div className={s.loginInput}>
                    <input className={s.captchaInput} name="captcha" required={true} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.captcha}/>
                    <span className={s.bar}></span>
                    <label className={s.textInputLabel}>Captcha</label>
                    {formik.errors.email && formik.touched.email ? <div className={s.error}>{formik.errors.email}</div> : null}
                </div>}
                {props.correctLogin
                    ? null
                    : <div className={s.incorrectLogin}>Incorrect email or password</div>}
                <button className={s.submitBtn} type="submit">Login</button>
                <div className={s.forTest}>
                    <span><b>FOR TEST</b></span>
                    <p><b>Email:</b> free@samuraijs.com</p>
                    <p><b>Pass:</b> free</p>
                </div>
            </form>
        </>
    )
}

const Login = (props) => {
    const navigate = useNavigate();
    if(props.isAuth && props.userId != null){
        navigate(`/profile/${props.userId}`)
    }

    return (
        <div>
            <div className={s.loginFormContainer}>
                <LoginForm {...props}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        correctLogin: state.auth.correctLogin,
        captchaUrl: state.auth.captchaUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (formData) => {
            dispatch(loginThunkCreator(formData));
        },
        logout: () => {
            dispatch(logoutThunkCreator());
        },
        getAuth: () => {
            dispatch(getAuthThunkCreator());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);