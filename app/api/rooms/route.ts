import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Room from '@/models/Room';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const rooms = await Room.find({});
        return NextResponse.json({ success: true, data: rooms });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const room = await Room.create(body);
        return NextResponse.json({ success: true, data: room }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
