import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this room.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for this room.'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price for this room.'],
    },
    capacity: {
        type: Number,
        required: [true, 'Please provide the capacity of this room.'],
    },
    amenities: {
        type: [String],
        default: [],
    },
    images: {
        type: [String],
        default: [],
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

export default mongoose.models.Room || mongoose.model('Room', RoomSchema);
