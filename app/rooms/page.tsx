'use client';

import { useState } from 'react';
import RoomCard from '../../components/RoomCard';

// Dummy data
const roomsData = [
    {
        _id: '3',
        name: 'Family Suite',
        description: 'Large suite suitable for families. Includes two single bed and one master bed.',
        price: 30,
        images: ['/room-3.jpg', '/room-5.jpg'],
        amenities: ['WiFi', 'fan', 'hot water', 'fresh water', 'easy access to the city center'],
    },
    {
        _id: '2',
        name: 'Standard room',
        description: 'Cozy room overlooking the mounatins.',
        price: 20,
        images: ['/room-2.jpg'],
        amenities: ['WiFi', 'fan', 'hot water', 'fresh water', 'easy access to the city center'],
    },
    {
        _id: '1',
        name: ' couple room',
        description: 'Spacious room with a stunning view of the mountains. Includes King size bed.',
        price: 30,
        images: ['/room-1.jpg'],
        amenities: ['WiFi', 'fan', 'hot water', 'fresh water', 'easy access to the city center'],
    },
    {
        _id: '4',
        name: 'standerd rooms',
        description: 'Luxury suite with premium amenities and city view.',
        price: 30,
        images: ['/room-4.jpg', '/room-6.jpg'],
        amenities: ['WiFi', 'fan', 'hot water', 'fresh water', 'easy access to the city center'],
    },
];

export default function Rooms() {
    const [filter, setFilter] = useState('all');

    const filteredRooms = filter === 'all'
        ? roomsData
        : roomsData.filter(room => room.price < 300); // Simple filter example

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Rooms</h1>

                {/* Filter Section */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-4 rounded-lg shadow-md flex space-x-4">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            All Rooms
                        </button>
                        <button
                            onClick={() => setFilter('budget')}
                            className={`px-4 py-2 rounded-md ${filter === 'budget' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            Under $300
                        </button>
                    </div>
                </div>

                {/* Room Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRooms.map((room) => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
}
