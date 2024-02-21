Title: YouTube Subscription Manager API

Description:
This project provides a RESTful API for managing YouTube subscriptions. The API allows users to retrieve subscriber data, including a list of all subscribers, subscriber names with their subscribed channels, and individual subscriber details.

To set up the project:

Run node src/createDatabase.js to create the database on your local machine. (Note: This requires MongoDB installed locally.)

Start the server by running node src/index.js or npm start from the terminal.

API Endpoints:

GET /subscribers

Description: Retrieve an array of all subscribers.
Response: An array of subscriber objects.
GET /subscribers/names

Description: Retrieve an array of subscribers with only their names and subscribed channels.
Response: An array of subscriber objects containing only the name and subscribedChannel fields.
GET /subscribers/:id

Description: Retrieve the details of a specific subscriber by ID.
Parameters:
id: The ID of the subscriber to retrieve.
Response:
If the subscriber with the given ID is found, respond with the subscriber object.
If the ID does not match any subscriber, respond with a status code 400 and an error message {message: error.message}.
