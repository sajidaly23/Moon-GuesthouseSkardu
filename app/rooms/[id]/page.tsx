'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Dummy data (should fetch from API based on ID)
const roomsData = [
    {
        _id: '1',
        name: 'Deluxe Mountain View',
        description: 'Spacious room with a stunning view of the mountains. Includes King size bed, private balcony, and jacuzzi. Perfect for couples looking for a romantic getaway.',
        price: 250,
        images: ['/room-1.jpg', '/bathroom.jpg', '/bathroom-2.jpg'],
        amenities: ['WiFi', 'AC', 'TV', 'Breakfast', 'Jacuzzi', 'Mountain View'],
        capacity: 2,
    },
    {
        _id: '2',
        name: 'Standard Garden View',
        description: 'Cozy room overlooking the lush garden. Perfect for a relaxing getaway. Enjoy the peace and quiet of nature.',
        price: 150,
        images: ['/room-2.jpg', '/bathroom-3.jpg'],
        amenities: ['WiFi', 'AC', 'TV', 'Garden View'],
        capacity: 2,
    },
    {
        _id: '3',
        name: 'Family Suite',
        description: 'Large suite suitable for families. Includes two bedrooms, a living area, and kitchenette. Plenty of space for everyone.',
        price: 350,
        images: ['/room-3.jpg', '/room-5.jpg'],
        amenities: ['WiFi', 'AC', 'TV', 'Kitchen', 'Breakfast', 'Living Area'],
        capacity: 4,
    },
    {
        _id: '4',
        name: 'Executive Suite',
        description: 'Luxury suite with premium amenities and city view. Ideal for business travelers.',
        price: 400,
        images: ['/room-4.jpg', '/room-6.jpg'],
        amenities: ['WiFi', 'AC', 'TV', 'Minibar', 'Gym Access', 'Work Desk'],
        capacity: 2,
    },
];

export default function RoomDetail() {
    const params = useParams();
    // useParams returns params directly in Client Components, no need to await or type as Promise
    // But let's be safe and check if it's working as expected.
    // In Next.js 15+, useParams hook returns ReadonlyURLSearchParams or similar, but for dynamic segments it returns the object.
    // Wait, useParams is a hook, it returns the params object directly.
    // The issue with Promise is only for Server Components props.
    // So this file might be fine if it's 'use client'.
    // However, I should check if I need to do anything else.
    // The previous error was about `params` in `app/api/...` which are Server Components (Route Handlers).
    // Client components using `useParams` hook should be fine.

    const { id } = params;

    const room = roomsData.find(r => r._id === id);

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800">Room not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={room.images[0] || '/placeholder-room.jpg'}
                                alt={room.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        {/* Additional Images Grid */}
                        {room.images.length > 1 && (
                            <div className="grid grid-cols-3 gap-4">
                                {room.images.slice(1).map((img, index) => (
                                    <div key={index} className="relative h-24 rounded-lg overflow-hidden shadow-md">
                                        <Image
                                            src={img}
                                            alt={`${room.name} ${index + 2}`}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Room Details */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{room.name}</h1>
                        <p className="text-2xl font-bold text-blue-600 mb-6">${room.price} <span className="text-gray-500 text-lg font-normal">/ night</span></p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">{room.description}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {room.amenities.map((amenity, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="mr-2 text-green-500">✓</span> {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Capacity</h3>
                            <p className="text-gray-600">{room.capacity} Guests</p>
                        </div>

                        <Link href={`/book?roomId=${room._id}`} className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                            Book This Room
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
