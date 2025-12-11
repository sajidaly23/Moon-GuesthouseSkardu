'use client';

import { useState, useEffect } from 'react';
import { FaBed, FaCalendarCheck, FaDollarSign, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
    // Dummy data for initial render
    const [stats, setStats] = useState({
        totalRooms: 0,
        totalBookings: 0,
        totalRevenue: 0,
        occupancyRate: 0,
    });

    useEffect(() => {
        // Fetch stats from API
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/admin/dashboard');
                const data = await res.json();
                if (data.success) {
                    setStats(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Rooms */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        <FaBed className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Rooms</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.totalRooms}</p>
                    </div>
                </div>

                {/* Total Bookings */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="bg-green-100 p-4 rounded-full mr-4">
                        <FaCalendarCheck className="text-green-600 text-2xl" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Bookings</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="bg-yellow-100 p-4 rounded-full mr-4">
                        <FaDollarSign className="text-yellow-600 text-2xl" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Revenue</p>
                        <p className="text-2xl font-bold text-gray-800">${stats.totalRevenue}</p>
                    </div>
                </div>

                {/* Occupancy Rate */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="bg-purple-100 p-4 rounded-full mr-4">
                        <FaChartLine className="text-purple-600 text-2xl" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Occupancy Rate</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.occupancyRate}%</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Bookings</h2>
                <p className="text-gray-500">No recent bookings to display.</p>
            </div>
        </div>
    );
}
