import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>    
                    <Link to='/quiz1' className='navbar-logo' onClick={closeMobileMenu}>
                        WHCH <i className='fas fa-barcode'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/quiz1/hometown' className='nav-links' onClick={closeMobileMenu}>
                                Hometown
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz1/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz1/food' className='nav-links' onClick={closeMobileMenu}>
                                Food
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz1/tourist' className='nav-links' onClick={closeMobileMenu}>
                                Tourist
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>HOME</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar