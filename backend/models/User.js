const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
    },
    profile: {
        bio: { type: String },
        location: { type: String },
        languages: { type: [String] },
        destinations: { type: [String] },
        profilePicture: { type: String },
        socialLinks: {
            facebook: { type: String },
            twitter: { type: String },
            instagram: { type: String },
        },
    },
    badges: { type: [String] },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
