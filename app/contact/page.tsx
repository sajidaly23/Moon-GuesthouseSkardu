'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact Form Data:', formData);
        alert('Message sent! (This is a demo)');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Address</h3>
                                    <p className="text-gray-600">Banazir choke skardu</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-blue-600 mr-4" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+92 348 9940526</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-600 mr-4" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@moonguesthouse.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Google Map Integration Placeholder</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
