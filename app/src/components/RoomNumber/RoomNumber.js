import React from "react";
import { Link } from 'react-router-dom'

export function RoomNumber(props) {
    const {onClick} = props

    return (
        <Link to='/' onClick={onClick} className='link'>
            <div className='room-number'>
                1106
            </div>
        </Link>
    );
}