const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'unknown'
    },
    surname: {
        type: String,
        required: true,
        default: 'unknown'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['BUYER', 'FARMER', 'ADMIN'],
        default: 'BUYER'
    },
    profileImg: {
        imageName: String,
        path: String,
        originalName: String
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }]
    
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User