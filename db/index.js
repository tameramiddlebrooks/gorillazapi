const mongoose = require('mongoose');
const express = require('express');
const app = express();

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/songsDatabase'

mongoose.connect(MONGODB_URI, {useUnifiedTopology : true, useNewUrlParser : true}).then(() => {
    console.log('Successfully connection to MongoDB')
}).catch((e) => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection

module.exports = db