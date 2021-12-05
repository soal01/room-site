import React from "react";
import './MainWrapper.css'

export function MainWrapper(props) {
    const {user, isLogin} = props;
    return (
        <div className='wrapper'>
            <div className='main-wrapper'>
                Добро пожаловать, {isLogin ? user : 'незнакомец'}!!!<br/>
                Сайт находится в разработке<br/>
                Приносим свои извинения за доставленные неудобства
            </div>
        </div>
    );
}