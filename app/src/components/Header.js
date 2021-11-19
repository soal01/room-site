import { Link } from 'react-router-dom'
import { MenuButton } from './MenuButton';
import { RoomNumber } from './RoomNumber';
import { useState } from 'react';




export default function Header() {
    const [page, setPage] = useState(0)
    return (
        <header>
            <div className='menu'>
                <RoomNumber onClick={() => setPage(0)}/>
                <div className='submenu'>
                    <MenuButton title='Активизм' path='/activity/cleaning' onClick={() => setPage(1)} curPage={page} page={1}/>
                    <MenuButton title='Вики' path='/wiki' onClick={() => setPage(2)} curPage={page} page={2}/>
                    <MenuButton title='Игровая' path='/gaming' onClick={() => setPage(3)} curPage={page} page={3}/>
                    <MenuButton title='Войти' path='/authorisation' onClick={() => setPage(4)} curPage={page} page={4}/>
                    
                </div>
            </div>
        </header>
    );
}