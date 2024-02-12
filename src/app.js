

const express = require('express');
const path = require("path");
const subscriber = require("./models/subscribers");

// create an express application
const app = express()


// to use static file we need to give permission of the public folder
app.use(express.static("public"));
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//API to render Html file
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/index.html"));
});


// API to get all data of subscribers
app.get("/subscribers", async(req,res) => {
    try{
        let subscribers = await subscriber.find();
        //response data
        res.send (subscribers)
    } catch (error) {
        res.status(404);
        res.send(error);
    }
});


// API to get subscribers by name and subscribedchannel
app.get("/subscribers/names", async(req,res) => {
    try{
        let subscribers = await subscriber.find(
            {}, {name: 1, subscribedChannel:1, _id:0}
        );
        //response data
        res.status(200).send(subscribers);
    }catch (error) {
        // error status and message
        res.status(404).send({Error_message: "No Subscriber name."});
    }
});

//API to get subscribers by id
app.get("/subscribers/:id", async(req,res) => {
    try{
        let subscribers = await subscriber.findById(req.params.id);
        res.status(200).send(subscribers);
    } catch (error) {
        res.status(400)
        .send({ Error_message: "No subscriber found to this id."});
    }
});
  


// post call to input an data
// app.post('/subscriber', async (req, res) => {
//     try {
//         console.log(req.body)
//     const { name, subscribedChannel } = req.body;
//     let user = await subscriber.findOne({ name: name });
//     if (user) {
//     res.send("User exists")
//     }
//     else{
//         user = await subscriber.create({
//         name, subscribedChannel
//         });
//         console.log(user)
//         res.send({"new user":user});
//         }
//         } catch (err) {
//         res.send(err)
//         }
        
//         })


// Handles all the unwanted request
app.use((req,res) => {
    res.status(404).json({message: "Error - Route not found"});
});

module.exports = app;