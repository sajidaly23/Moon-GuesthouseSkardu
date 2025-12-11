import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    guestName: {
        type: String,
        required: [true, 'Please provide the guest name.'],
    },
    guestEmail: {
        type: String,
        required: [true, 'Please provide the guest email.'],
    },
    guestPhone: {
        type: String,
        required: [true, 'Please provide the guest phone number.'],
    },
    checkInDate: {
        type: Date,
        required: [true, 'Please provide the check-in date.'],
    },
    checkOutDate: {
        type: Date,
        required: [true, 'Please provide the check-out date.'],
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending',
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'refunded'],
        default: 'pending',
    },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
