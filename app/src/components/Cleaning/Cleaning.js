import React from "react";
import './Cleaning.css';
import { Calendar } from "./Calendar/Calendar";

export function Cleaning(props) {
    const {children, localizer} = props;
    

    return (
        <div className='cleaning-wrapper'>
            График уборки в текущем месяце:
            <Calendar/>
        </div>
    );
}