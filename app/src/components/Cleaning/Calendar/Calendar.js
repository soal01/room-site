import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCleaningMounths } from "../../../actions/CleaningMounths";
import './Calendar.css';

const default_mounth = [
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

const days = {
    'Январь': 31, 'Февраль': 28, 'Март': 31, 'Апрель': 30,
    'Май': 31, 'Июнь': 30, 'Июль': 31, 'Август': 31,
    'Сентябрь': 30, 'Октябрь': 31, 'Ноябрь': 30, 'Декабрь': 31
};

function get_mounth(info) {
    let ans_len = 35;
    if ((info['first_day'] == 6 && days[info['mounth_name']] == 31) ||
        (info['first_day'] == 7 && days[info['mounth_name']] >= 30)) {
            ans_len = 42;
    }
    let ans = new Array(ans_len);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = {day: null, cleaner: null};
    }
    for (let i = 1; i <= days[info['mounth_name']]; i++) {
        ans[i + info['first_day'] - 2] = {day: i, cleaner: null};
    }
    let cleaners = info['cleaners'];
    cleaners = cleaners.split(' ');
    for (let i = 0; i < cleaners.length; ++i) {
        ans[i*7 + 6] = {day: i*7 + 8 - info['first_day'], cleaner: cleaners[i]}
    }
    return ans;
}


export function Calendar(props) {
    const [mounth_name, setMounthName] = React.useState('Декабрь');
    const [current_mounth, setCurrentMounth] = React.useState(0);
    const [year, setYear] = React.useState('2021');
    const [mounth, setMounth] = React.useState(default_mounth);
    const dispatch = useDispatch();
    const mounthList = useSelector((state) => {
        //console.log(state);
        return state.cleaningMounths.mounthList;
    });

    const info = useSelector((state) => {
        return state.cleaningMounths.mounths[mounthList[current_mounth]];
    });
    
    React.useEffect(()=> {
        dispatch(fetchCleaningMounths());
    }, []);

    

    const nextClick = (event) => {
        event.preventDefault();
        let n = mounthList.length;
        setCurrentMounth((current_mounth + 1) % n);
        //let info = state.mounths[mounthList[current_mounth]];
        setYear(info['year']);
        setMounthName(info['mounth_name']);
        console.log(info);
        setMounth(get_mounth(info));
        //onButtonClick(article);
    };

    const prevClick = (event) => {
        event.preventDefault();
        let n = mounthList.length;
        setCurrentMounth((current_mounth + n - 1) % n);
        //let info = state.mounths[mounthList[current_mounth]];
        setYear(info['year']);
        setMounthName(info['mounth_name']);
        console.log(info);
        setMounth(get_mounth(info));
        //onButtonClick(article);
    };

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
        let weeks = mounth.length / 7;
        for (let week = 0; week < weeks; week++) {
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
                <li>{mounth_name}<br/>
                    <div style={{"font-size":"18px"}}>{year}</div>
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
        <button className="prev_button"
                onClick={prevClick}>
            Предыдущий месяц 
        </button>
        <button className="next_button"
                onClick={nextClick}>
            Следующий месяц 
        </button>

        
    </div>
    );
}

