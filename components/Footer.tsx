import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Moon Guest House</h3>
                        <p className="text-gray-400">
                            Experience comfort and luxury at Moon Guest House. Your home away from home.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/rooms" className="text-gray-400 hover:text-white">
                                    Rooms
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400">Banazir choke skardu</p>
                            <p className="text-gray-400">Phone: +92 348 9940526</p>
                            <p className="text-gray-400">Email: info@moonguesthouse.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Moon Guest House. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
