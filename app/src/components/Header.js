import { Link } from 'react-router-dom'
import { MenuButton } from './MenuButton';
import { RoomNumber } from './RoomNumber';
import { useState } from 'react';




export default function Header() {
    const [state, setState] = useState(0)
    return (
        <header>
            <div className='menu'>
                <RoomNumber click={() => setState(0)}/>
                <div className='submenu'>
                    <MenuButton title='Активизм' path='/activity' click={() => setState(1)} curPage={state} page={1}/>
                    <MenuButton title='Вики' path='/wiki' click={() => setState(2)} curPage={state} page={2}/>
                    <MenuButton title='Игровая' path='gaming' click={() => setState(3)} curPage={state} page={3}/>
                    <div className='aut-button'>
                        Войти
                    </div>
                </div>
            </div>
        </header>
    );
}