const express = require("express");
const cors = require('cors') // This is new
const app = express();
require('./config/mongoose.config'); // This is new
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/person.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
