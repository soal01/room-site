import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='menu'>
                <div className='room-number'>
                    1106
                </div>
                <div className='submenu'>
                    <div className='menu-button'>
                        Активизм
                    </div>
                    <div className='menu-button'>
                        Вики    
                    </div>
                    <div className='menu-button'>
                        Игровая
                    </div>
                    <div className='aut-button'>
                        Войти
                    </div>
                </div>
            </div>
        </header>
    );
}