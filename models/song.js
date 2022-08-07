const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Song = new Schema (
    {
        title: { type : String, required: true },
        artist: { type : String, required: true },
        album: { type : String, required: true },
        track_number: { type : Number, required: true },
        US_chart_position: { type : Number, required: true }
        
    },
    {timestamps: true},
)

module.exports = mongoose.model('songs', Song);