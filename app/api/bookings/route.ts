import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const bookings = await Booking.find({}).populate('room');
        return NextResponse.json({ success: true, data: bookings });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const booking = await Booking.create(body);
        return NextResponse.json({ success: true, data: booking }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
