import {useState} from 'react';
import {useEffect} from 'react';
import React from 'react'
import DarkMode from './darkMode'

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () =>{
            setLargeur(window.innerWidth);
            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return() => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return (
        
        <nav>
            <DarkMode/>
            {(toggleMenu || largeur > 500) && (
                <ul className='list'>
                <li className='items'>Acceuil</li>
                <li className='items'>About</li>
                <li className='items'>Contact</li>
            </ul>
            )}
            
            <button onClick={toggleNavSmallScreen} className='btnNav'>
                <span></span>
                <span></span>
                <span></span>
                </button>
           
        </nav>
    )
}

export default NavBar;