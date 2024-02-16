//Import require modules

const express = require('express')
const app = require('./app.js')
const port = process.env.PORT || 3000

// Start Server
//Message will be printed in the console once the server starts running
app.listen(port, () => console.log(`App listening on port ${port}!`))
