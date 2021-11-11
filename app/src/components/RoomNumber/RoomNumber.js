import React from "react";
import { Link } from 'react-router-dom'

export function RoomNumber(props) {
    const {click} = props

    return (
        <Link to='/' onclick={click} style={{textDecoration: 'none'}}>
            <div className='room-number'>
                1106
            </div>
        </Link>
    );
}