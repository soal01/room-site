import React from "react";
import './Cleaning.css';
import { Calendar } from "./Calendar/Calendar";

export function Cleaning(props) {
    const {children, localizer} = props;
    
                /* <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>*/

    return (
        <div className='cleaning-wrapper'>
            График уборки в текущем месяце:
            <Calendar/>
        </div>
    );
}