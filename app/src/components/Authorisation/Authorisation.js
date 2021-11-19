import React from "react";
import './Authorisation.css';


export function Authorisation() {
    const [login, setLogin] = React.useState();
    const [password, setPassword] = React.useState();

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
                    <button
                        type='submit'
                        className='login-button'
                    >
                        Войти
                    </button>
               
            </form>
        </div>
    );
}