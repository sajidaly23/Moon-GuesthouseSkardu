import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name.'],
    },
    rating: {
        type: Number,
        required: [true, 'Please provide a rating.'],
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: [true, 'Please provide a comment.'],
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
