import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Room from '@/models/Room';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const room = await Room.findById(id);
        if (!room) {
            return NextResponse.json({ success: false, error: 'Room not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: room });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await request.json();
        const room = await Room.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!room) {
            return NextResponse.json({ success: false, error: 'Room not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: room });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const room = await Room.findByIdAndDelete(id);
        if (!room) {
            return NextResponse.json({ success: false, error: 'Room not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
