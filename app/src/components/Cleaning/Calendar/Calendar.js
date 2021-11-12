import React from "react";
import './Calendar.css';


export function Calendar(props) {


    /*<ul class="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span class="active">10</span></li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
        
        </ul>*/

       /* <td className="day">
        <label>1</label><br/>
        Данила
    </td>
    <td className="day"><label>2</label><br/></td>
    <td className="day"><label>3</label><br/></td>
    <td className="day"><label>4</label><br/></td>
    <td className="day"><label>5</label><br/></td>
    <td className="day"><label>6</label><br/></td>
    <td className="day"><label>7</label><br/></td>*/

    const mounth = [
        {day: 1, cleaner: null}, {day: 2, cleaner: null}, {day: 3, cleaner: null}, {day: 4, cleaner: null},
        {day: 5, cleaner: null}, {day: 6, cleaner: null}, {day: 7, cleaner: "Данила"}, {day: 8, cleaner: null},
        {day: 9, cleaner: null}, {day: 10, cleaner: null}, {day: 11, cleaner: null}, {day: 12, cleaner: null},
        {day: 13, cleaner: null}, {day: 14, cleaner: "Миша"}, {day: 15, cleaner: null}, {day: 16, cleaner: null},
        {day: 17, cleaner: null}, {day: 18, cleaner: null}, {day: 19, cleaner: null}, {day: 20, cleaner: null},
        {day: 21, cleaner: "Вова"}, {day: 22, cleaner: null}, {day: 23, cleaner: null}, {day: 24, cleaner: null},
        {day: 25, cleaner: null}, {day: 26, cleaner: null}, {day: 27, cleaner: "Тимур"}, {day: 28, cleaner: null},
        {day: 29, cleaner: null}, {day: 30, cleaner: null}, {day: null, cleaner: null}, {day: null, cleaner: null},
        {day: null, cleaner: null},
        {day: null, cleaner: null},
        {day: null, cleaner: null},
    ];

    /*<tr className="week">
                {mounth.map((day) => (
                    <td className="day">
                        <label>{day.day}</label><br/>
                        {day.cleaner}
                    </td>
                ))}
            </tr>*/

    const drawDays = (mounth) => {
        let content = [];
        for (let week = 0; week < 5; week++) {
            content.push(
            <tr className="week">
                {mounth.slice(week*7, (week+1)*7).map((day) => (
                    <td className="day">
                        <label>{day.day}</label><br/>
                        {day.cleaner}
                    </td>
                ))}
            </tr>)
        }
        return content;
    };

    return (
    <div className="calendar">
        <div className="header">
            <ul>
                <li>Ноябрь<br/>
                    <div style={{"font-size":"18px"}}>2021</div>
                </li>
            </ul>
        </div>
        
        <table className="days">
            <tr class="weekdays">
                <th className="weekday">Понедельник</th>
                <th className="weekday">Вторник</th>
                <th className="weekday">Среда</th>
                <th className="weekday">Четверг</th>
                <th className="weekday">Пятница</th>
                <th className="weekday">Суббота</th>
                <th className="weekday">Воскресение</th>
            </tr>
            {drawDays(mounth)}

        </table>
        
    </div>
    );
}

