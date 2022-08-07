const db = require('../db')
const Album = require('../models/album')

db.on('error',console.error.bind(console, 'MongoDB connection error: '))

const main = async () => {
    const albums = [

        { title: "Gorillaz", 
        album_tracks: 17, 
        release_date: "April 24, 2001",
        explicit_rating: true,
        label: "Parlophone Records Limited" },

    { title: "Laika Come Home", 
        album_tracks: 12, 
        release_date: "July 16, 2002",
        explicit_rating: false,
        label: "Parlophone Records Ltd"},

    { title: "Demon Days", 
        album_tracks: 15, 
        release_date: "May 24, 2005",
        explicit_rating: false,
        label: "Parlophone Records Ltd"},

    { title: "Plastic Beach", 
        album_tracks: 16, 
        release_date: "March 8, 2010",
        explicit_rating: false,
        label: "Parlophone Records Limited"},

    { title: "The Fall", 
        album_tracks: 15, 
        release_date: "December 25, 2010",
        explicit_rating: false,
        label: "Parlophone Records Ltd"},
]
    await Album.insertMany(albums)
    console.log("Created albums")
}
const run = async () => {
    await main()
    db.close()
}
run();