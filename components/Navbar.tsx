'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            Moon Guest House
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/rooms" className="text-gray-600 hover:text-gray-900">
                            Rooms
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                        <Link href="/book" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Book Now
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link href="/rooms" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            Rooms
                        </Link>
                        <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            Contact
                        </Link>
                        <Link href="/book" className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center" onClick={toggleMenu}>
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
