import React from 'react';
import UserImage from '../../../assets/images/people1.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <h1 className='header-title'>Medi Portal</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href="#">Habibur Rahman</a></li>
                    <li>
                        <div className='avatar'>
                            <img src={UserImage} alt="user image" />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;