import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* IMGS */
import LogoAnim from '../assets/imgs/LogoAnim.gif'

function Navbar() {
    const [links, setLinks] = useState([
        {
            id: 0,
            displayText: 'Voices of the Domain',
            url: '/voicesofthedomain',
        },
        {
            id: 1,
            displayText: 'Story',
            url: '/story',
        },
        {
            id: 2,
            displayText: 'The Civilization',
            url: '/thecivilization',
        },
        {
            id: 3,
            displayText: 'Cards',
            url: '/cards/',
        },
        {
            id: 4,
            displayText: 'Chapters',
            url: '/chapters',
        },
        {
            id: 5,
            displayText: 'About',
            url: '/about',
        },
    ]);

    const [isOpen,setIsOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    const openMenu = () => {
        setIsOpen(!isOpen); 

        const body = document.body;
        body.style.overflowY = body.style.overflowY === 'hidden' ? 'auto' : 'hidden';
    }

    return (
        <nav className={`z-50 font-thesans flex top-0 left-0 w-full text-white items-center flex-col lg:flex-row lg:justify-between py-9 pr-6 tablet:pr-12 xl:pr-64 2xl:pr-72 landscape:pr-6 
                        ${isOpen ? 'h-full fixed top-0 left-0  overflow-y-hidden bg-black' : 'sticky h-26'}
                        ${scrollTop > 0 ? 'bg-black bg-opacity-80' : ''}
                        `}>
            <div className="flex w-full lg:w-auto items-center justify-between">
                <Link className="ml-6 w-auto tablet:ml-12 xl:ml-16 xl:w-48 2xl:w-56 landscape:ml-6" to="/" onClick={() => {setIsOpen(false); document.body.style.overflowY = 'auto'}}>
                    <img className="h-12" alt="Animated Logo" src={LogoAnim}/>
                </Link>


                <div className={`lg:hidden menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => {openMenu()}}>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <ul className={`flex mt-4 flex-1 justify-center flex-wrap lg:flex lg:mt-0 ${isOpen ? 'flex-col items-center ml-6 mt-0' : 'hidden'}`}>
                {links.map((navItem) => {
                    return(
                        <li key={navItem.id} className={`${isOpen ? `${navItem.id !== 0 ? 'mt-6 smobile:mt-10' : ''} text-lg smobile:text-xl` : ''} ${navItem.id !== 0 ? 'lg:pl-16' : ''}`}>
                            <NavLink to={navItem.url} onClick={() => {setIsOpen(false); document.body.style.overflowY = 'auto'; window.scrollTo(0, 0)}} className={isActive => "relative overflow-auto customUnderline " + (isActive ? 'navActive' : '')}>
                                {navItem.displayText}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;
