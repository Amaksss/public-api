# public-api for HNG 12 Task

## Table of Contents
1. [Project Description](#Project-Description)
2. [Installation](#installation)
3. [API Documentation](#api-documentation)
4. [Backlinks](#Backlinks)

   

## Project Description
This is a simple API that provides response in json format.The API returns
- The registered email address used in the slack workspace
- The current datetime in 1SO 8601 format
- The github url of this project codebase

The API is built using Nodejs and Express and is deployed to a publicly accessible endpoint.

## Features
- Supports GET requests
- Returns response in JSON format
- Handles cors (Cross-Origin Request Sharing)
- Fast response time (<500ms)

## Getting started

### Pre-requisites
- Nodejs

### Installation
1. Clone the repository
 git clone https://github.com/Amaksss/public-api.git
 cd public-api

2. Install dependencies
   npm install

3. Run the server
   node app.js
   By default, the server runs on http://localhost:3000/api/hng12

### API Documentation

## Endpoint 

- **GET**
    - **Endpoint**: `/api/hng12`
    - **Method**: GET
    - **Description**: Access the api route.
    - **Response Format**:
        ```json
        Success (200 OK)
        {
         "email": "your-email@example.com",
         "current_datetime": "2025-01-30T09:30:00Z",
         "github_url": "https://github.com/Amaksss/public-api"
        }
        ```

## Error Handling
If an invalid route is requested, the API returns
{
  "error": "Route not found"
}


### Deployment
The app is deployed at https://public-api-lvu5.onrender.com/api/hng12

### Backlinks

Backlinks to:
https://hng.tech/hire/python-developers

https://hng.tech/hire/csharp-developers

https://hng.tech/hire/golang-developers

https://hng.tech/hire/php-developers

https://hng.tech/hire/java-developers

https://hng.tech/hire/nodejs-developers

### Technologies Used
- Nodejs for Backend runtime
- Expressjs for Web framework
- CORS to handle cross origin requests
- GitHub for Version Control

## License
This project is available under the MIT License.

