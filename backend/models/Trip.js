const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    itinerary: {
        type: [String],
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    budget: {
        type: Number,
    },
    ratings: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number },
        review: { type: String },
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Trip', TripSchema);
