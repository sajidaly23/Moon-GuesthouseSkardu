import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';
import Room from '@/models/Room';

export async function GET() {
    try {
        await dbConnect();

        const totalRooms = await Room.countDocuments();
        const totalBookings = await Booking.countDocuments();

        // Calculate total revenue from confirmed/completed bookings
        const revenueResult = await Booking.aggregate([
            { $match: { status: { $in: ['confirmed', 'completed'] } } },
            { $group: { _id: null, total: { $sum: '$totalPrice' } } },
        ]);
        const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

        // Calculate occupancy (simplified: active bookings / total rooms)
        // In a real app, this would be more complex based on date ranges
        const activeBookings = await Booking.countDocuments({ status: 'confirmed' });
        const occupancyRate = totalRooms > 0 ? (activeBookings / totalRooms) * 100 : 0;

        return NextResponse.json({
            success: true,
            data: {
                totalRooms,
                totalBookings,
                totalRevenue,
                occupancyRate: Math.round(occupancyRate * 100) / 100,
            },
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
