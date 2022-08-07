const db = require('../db')
const Song = require('../models/song')

db.on('error',console.error.bind(console, 'MongoDB connection error: '))

const main = async () => {
    const songs = [

        { title: "Punk",
        artist: "Gorillaz", 
        album: "Gorillaz", 
        track_number: 7, 
        US_chart_position: 14 },

        { title: "Monkey Racket",
        artist: "Gorillaz",
        album: "Laika Come Home",
        track_number: 4,
        US_chart_position: 156 },

        { title: "Feel Good Inc.",
        artist: "Gorillaz",
        album: "Demon Days",
        track_number: 6,
        US_chart_position: 6 },

        { title: "On Melancholy Hill",
        artist: "Gorillaz",
        album: "Plastic Beach",
        track_number: 10,
        US_chart_position: 2 },

        { title: "Detroit",
        artist: "Gorillaz",
        album: "The Fall",
        track_number: 4,
        US_chart_position: 24 },
    ]

    await Song.insertMany(songs)
    console.log("Created songs")
}

const run = async () => {
    await main()
    db.close()
}
run();