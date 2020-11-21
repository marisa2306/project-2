const mongoose = require('mongoose')
const Schema = mongoose.Schema

const farmSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido'
    },
    surname: {
        type: String,
        required: true,
        default: 'Desconicido'
    },
    farmname: {
        type: String,
        unique: true
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
    description: String,
    role: {
        type: String,
        enum: ['BUYER', 'FARMER', 'ADMIN'],
        default: 'BUYER'
    },
    profileImg: String,
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    address: String,

}, { timestamps: true })

farmSchema.index({ location: '2dsphere' })

const Farm = mongoose.model('Farm', farmSchema)

module.exports = Farm