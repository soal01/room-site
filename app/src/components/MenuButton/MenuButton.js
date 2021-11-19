import React from "react";
import { Link } from 'react-router-dom';


export function MenuButton(props) {
    const {title, path, onClick, curPage, page} = props
    let button = "menu-button"
    if (curPage === page) {
        button = "active-menu-button"
    }
    return (
        <Link to={path} onClick={onClick} className='link'>
            <div  className={button} >
                {title}
            </div>
        </Link>
    );
}