const express = require('express');
const cors = require('cors');
const apiRoute = require('./src/Routes/apiRoute');

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();


//Middleware
app.use(cors());
//app.use(express.json());

//use routes
app.use('/api', apiRoute);

//start server
app.listen(PORT, ()=> {
   console.log(`Server running at http://localhost:${PORT}`) 
})