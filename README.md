# public-api for HNG 12 Task

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
 git clone https://github.com/yourusername/your-repo.git
 cd your-repo

2. Install dependencies
   npm install

3. Run the server
   node app.js
   By default, the server runs on http://localhost:3000/api/hng12

### API Documentation

## Endpoint 
GET /api/hng12

## Response Format
Success (200 OK)
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

## Error Handling
If an invalid route is requested, the API returns
{
  "error": "Route not found"
}

## Endpoint 
GET /

## Response
A simple message welcoming users to the public API

### Deployment
The app is deployed at

### Technologies Used
- Nodejs for Backend runtime
- Expressjs for Web framework
- CORS to handle cross origin requests
- GitHub for Version Control

## License
This project is available under the MIT License.

