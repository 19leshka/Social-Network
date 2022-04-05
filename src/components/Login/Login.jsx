import s from './Login.module.css'

const Login = () => {
    return (
        <div>
            <h2>Login there:</h2>
            <div className={s.loginPageBtn} onClick={() => window.open('https://social-network.samuraijs.com/login')}>Login</div>
        </div>
    )
}

export default Login;