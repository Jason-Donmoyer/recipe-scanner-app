/*
 * Basic Express server setup for the MERN project.
 *
 * This file initializes an Express application, applies CORS and body-parser
 * middleware, defines a simple health check route, and starts the server on
 * a specified port. The port defaults to 5000 but can be configured via
 * the PORT environment variable.
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

// Create an instance of an Express application
const app = express();

// CORS configuration: allow all origins by default
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());
// Parse URL-encoded data with extended syntax
app.use(bodyParser.urlencoded({ extended: true }));

// Health check route
// app.get('/', (req, res) => {
//   res.json({ message: 'Server is running and healthy!' });
// //   console.log("LOCKED AND LOADED");
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello from your Express Server!</h1>');
  });

// Determine the port from environment variables or default to 5000
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
