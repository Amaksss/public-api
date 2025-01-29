const express = require('express');
const cors = require('cors');
const apiRoute = require('./src/Routes/apiRoute');

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();


//Middleware
app.use(cors());
//app.use(express.json());


// Define the root route
app.get('/', (req, res) => {
   res.send('Welcome to the Public API!');
});

//use routes
app.use('/api', apiRoute);

// Catch-all route for undefined endpoints
app.use((req, res) => {
   res.status(404).json({
      message: 'route not found',
   })
})

//start server
app.listen(PORT, ()=> {
   console.log(`Server running at http://localhost:${PORT}`) 
})