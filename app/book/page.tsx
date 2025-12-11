'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BookContent() {
    const searchParams = useSearchParams();
    const roomId = searchParams.get('roomId');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomId: roomId || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking Data:', formData);
        alert('Booking submitted! (This is a demo)');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Stay</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check-In Date</label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    name="checkIn"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check-Out Date</label>
                                <input
                                    type="date"
                                    id="checkOut"
                                    name="checkOut"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Hidden Room ID if passed via URL */}
                        {!roomId && (
                            <div>
                                <label htmlFor="roomId" className="block text-sm font-medium text-gray-700">Select Room</label>
                                <select
                                    id="roomId"
                                    name="roomId"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                                    value={formData.roomId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a room</option>
                                    <option value="1">Deluxe Mountain View</option>
                                    <option value="2">Standard Garden View</option>
                                    <option value="3">Family Suite</option>
                                    <option value="4">Executive Suite</option>
                                </select>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function Book() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookContent />
        </Suspense>
    );
}
