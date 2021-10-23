import React from "react";
import { Link } from 'react-router-dom'


export function MenuButton(props) {
    const {title, path} = props

    return (
        <Link to={path} style={{textDecoration: 'none'}}>
            <div className='menu-button'>
                {title}
            </div>
        </Link>
    );
}