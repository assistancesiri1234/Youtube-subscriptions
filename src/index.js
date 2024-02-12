//Import require modules

const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')

require( "dotenv").config();
const port = process.env.PORT || 3000
const uri='mongodb://localhost:27017'

// configuration of env

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
// Local URI
// const DATABASE_URL = "mongodb://localhost/subscribers";

// Connect to MongoDB using Mongoose
// const DATABASE_URL = process.env.DATABASE_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

// If an error ccurs during connection, handle and log the error
 db.on('error', (err) => console.log(err))

// If the connection is successful, log a success message
db.once('open', () => console.log('connected to database'))

// Start Server
//Message will be printed in the console once the server starts running
app.listen(port, () => console.log(`App listening on port ${port}!`))
