import React from "react";
import './Authorisation.css';
import { useAuth } from "../hooks/useAuth";


export function Authorisation(props) {
    const { setIsLogin } = props;
    const [login, setLogin] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState();
    const { onAuth } = useAuth(setIsLogin, setError);

    React.useEffect(() => {
        if (error) {
          setError('');
        }
      }, [login, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!login) {
            setError('Введите логин');
            return;
        }
        if (!password) {
            setError('Введите пароль');
            return;
        }
        try {
            await onAuth(login, password);
        } catch {
            //setError('Возникли проблемы, авторизируйтесь ещё раз');
        }
    };


    return (
        <div className="wrapper">
            <form className='auth-form'>
                <div className='login-input'>
                    <label>Логин</label>
                    <input
                        name='login'
                        type='text'
                        value={login}
                        onChange={(event) => {
                            setLogin(event.target.value);
                        }}
                    />
                </div>

                <div className='password-input'>
                    <label>Пароль</label>
                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                {error ? 
                <div className='error-message'>{error}</div> :
                <div className='error-message'></div>}
                    <button
                        type='submit'
                        className='login-button'
                        onClick={handleSubmit}
                    >
                        Войти
                    </button>
               
            </form>
        </div>
    );
}