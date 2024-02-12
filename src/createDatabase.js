const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

require("dotenv").config();

// Connect to DATABASE
const DATABASE_URL = process.env.MONGO_URI;
mongoose.connect('mongodb://localhost:27017',{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()
