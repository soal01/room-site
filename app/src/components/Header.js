import { Link } from 'react-router-dom'
import { MenuButton } from './MenuButton';
import { RoomNumber } from './RoomNumber';

export default function Header() {
    return (
        <header>
            <div className='menu'>
                <RoomNumber/>
                <div className='submenu'>
                    <MenuButton title='Активизм' path='/activity'/>
                    <MenuButton title='Вики' path='/wiki'/>
                    <MenuButton title='Игровая' path='gaming'/>
                    <div className='aut-button'>
                        Войти
                    </div>
                </div>
            </div>
        </header>
    );
}