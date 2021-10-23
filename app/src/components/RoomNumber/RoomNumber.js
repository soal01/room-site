import React from "react";
import { Link } from 'react-router-dom'

export function RoomNumber() {
    return (
        <Link to='/' style={{textDecoration: 'none'}}>
            <div className='room-number'>
                1106
            </div>
        </Link>
    );
}