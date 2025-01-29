const express = require('express');
const cors = require('cors');
const apiRoute = require('./src/Routes/apiRoute');

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
//app.use(express.json());

//use routes
app.use('/api', apiRoute);

//start server
app.listen(PORT, ()=> {
   console.log(`Server running at http://localhost:${PORT}`) 
})