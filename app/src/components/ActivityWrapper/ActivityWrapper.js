import React from "react";
import './ActivityWrapper.css'
import { Link } from "react-router-dom";

export function ActivityWrapper(props) {
    const {children} = props;
    return (
        <div className='wrapper'>
            <Link to='/activity/cleaning' style={{textDecoration: 'none'}}>
                <div className='first-side-menu-button'>
                    Уборка
                </div>
            </Link>
            <Link to='/activity/housework' style={{textDecoration: 'none'}}>
                <div className='second-side-menu-button'>
                    Хоз
                </div>
            </Link>
            <Link to='/activity/homework' style={{textDecoration: 'none'}}>
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