import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';
import menu from '../assets/menu.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="h-20"></div> {/* Spacer to lift the navbar a bit above */}
            <header className="bg-gradient-to-r from-teal-400 to-pink-600 fixed top-0 left-0 w-full z-50 shadow-xl">
                <nav className="border-gray-200 px-4 lg:px-6 py-4">
                    <div className="flex justify-between items-center bg-transparent text-sm text-white">
                        <div>
                            <span>📧 info@unihopekuwait.com</span>
                        </div>
                        <div>
                            <span>📞 +965  9976 6725</span>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div className="flex items-center justify-between mt-5">
                        <Link to="/home" className="flex items-center lg:ml-10">
                            <img
                                src={logo}
                                className="mr-5 h-14 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                                alt="Logo"
                            />
                            <h1 className="text-3xl font-extrabold text-white transform hover:scale-105 transition-all duration-300">Safetronics</h1>
                        </Link>

                        {/* Menu Icon for Small Screens */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-white"
                        >
                            <img src={menu} alt="Menu" className="h-8 w-8" />
                        </button>

                        {/* Navigation Links */}
                        <ul
                            ref={menuRef}
                            className={`flex-col lg:mr-20 lg:flex-row lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:ml-10 absolute lg:static bg-gradient-to-r from-teal-400 to-pink-600 lg:bg-transparent w-full lg:w-auto left-0 lg:ml-0 transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden'}`}
                        >
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/home'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/about'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/services'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    Our Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/partners'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    Our Partners
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/buy'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200 text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 hover:bg-white lg:hover:bg-transparent lg:hover:text-yellow-300 transition-all`
                                    }
                                >
                                    Buy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
