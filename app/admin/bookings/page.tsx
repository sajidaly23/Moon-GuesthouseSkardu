'use client';

import { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface Booking {
    _id: string;
    guestName: string;
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
    status: string;
    room: {
        name: string;
    };
}

export default function AdminBookings() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch('/api/bookings');
                const data = await res.json();
                if (data.success) {
                    setBookings(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await fetch('/api/bookings');
            const data = await res.json();
            if (data.success) {
                setBookings(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch bookings:', error);
        }
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/bookings/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                fetchBookings(); // Refresh list
            } else {
                alert('Failed to update booking status');
            }
        } catch (error) {
            console.error('Failed to update booking status:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Booking Management</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.guestName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.room?.name || 'Unknown Room'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(booking.checkInDate).toLocaleDateString()} - {new Date(booking.checkOutDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${booking.totalPrice}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                booking.status === 'cancelled' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {booking.status === 'pending' && (
                                        <>
                                            <button onClick={() => handleStatusChange(booking._id, 'confirmed')} className="text-green-600 hover:text-green-900 mr-4" title="Confirm">
                                                <FaCheck className="inline" />
                                            </button>
                                            <button onClick={() => handleStatusChange(booking._id, 'cancelled')} className="text-red-600 hover:text-red-900" title="Cancel">
                                                <FaTimes className="inline" />
                                            </button>
                                        </>
                                    )}
                                    {booking.status === 'confirmed' && (
                                        <button onClick={() => handleStatusChange(booking._id, 'cancelled')} className="text-red-600 hover:text-red-900" title="Cancel">
                                            <FaTimes className="inline" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {bookings.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
