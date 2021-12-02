import React from "react";
import './ActivityWrapper.css'
import { Link } from "react-router-dom";

export function ActivityWrapper(props) {
    const {children} = props;
    return (
        <div className='wrapper'>
            <Link to='/activity/cleaning' className='link'>
                <div className='first-side-menu-button'>
                    Уборка
                </div>
            </Link>
            <Link to='/activity/housework' className='link'>
                <div className='second-side-menu-button'>
                    Хоз
                </div>
            </Link>
            <Link to='/activity/homework' className='link'>
                <div className='third-side-menu-button'>
                    Домашка
                </div>
            </Link>
            <div className='activity-wrapper'>
                {children}
            </div>
        </div>
    );
}