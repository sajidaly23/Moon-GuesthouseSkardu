import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb.js';
import Booking from '@/models/Booking.js';
import Room from '@/models/Room.js';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();

        const totalRooms = await Room.countDocuments();
        const totalBookings = await Booking.countDocuments();

        const revenueResult = await Booking.aggregate([
            { $match: { status: { $in: ['confirmed', 'completed'] } } },
            { $group: { _id: null, total: { $sum: '$totalPrice' } } },
        ]);

        const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

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
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
