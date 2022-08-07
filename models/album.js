const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Album = new Schema(
    {
        title: { type : String, required: true },
        album_tracks: { type : Number, required: true },
        release_date: { type : String, required: true },
        explicit_rating: { type : Boolean, required: true },
        //^does the album have an explicit rating or not
        label: { type: String, required: true }

    },
    {timestamps: true},
)
module.exports = mongoose.model('albums', Album);