import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';

export async function GET() {
    try {
        await dbConnect();
        const reviews = await Review.find({ isApproved: true });
        return NextResponse.json({ success: true, data: reviews });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const review = await Review.create(body);
        return NextResponse.json({ success: true, data: review }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
