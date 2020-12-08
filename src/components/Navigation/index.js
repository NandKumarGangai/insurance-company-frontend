import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './style.css';

const NavigationBar = () => {
    return (
        <div className='navigation'>
            <ul>
                <RouterLink to='/' className='navigation-nav'>
                    <li >All Records</li>
                </RouterLink>
                <RouterLink to='/check-user' className='navigation-nav'>
                    <li >Check User</li>
                </RouterLink>
                <RouterLink to='/car-register' className='navigation-nav'>
                    <li >Check Car</li>
                </RouterLink>
            </ul>
        </div>
    )
}

export default NavigationBar;

