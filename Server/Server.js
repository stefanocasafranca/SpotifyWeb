
    const express = require('express'); // Import the Express framework
    const SpotifyWebApi = require('spotify-web-api-node'); // Import the Spotify Web API Node.js library
    const app = express(); // Create an instance of an Express application
    
    // Define the HTTP POST method and the Route Path at '/login'. Finally There is the callback function saying: Request and Response 
    app.post('/login', (req, res) => {
      const code = req.body.code; // Extract the 'code' from the request body
      
      // Create an instance of SpotifyWebApi with the necessary credentials
      const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
           clientId: 'fb8fd9e5ef964a758c0585c41330f11a',
            clientSecret: '???'
      });
    
      // Additional logic to handle the login route: 3 Parameters needed
      spotifyApi.authorizationCodeGrant (code) .then(data => {
        res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
                })
        })
    .catch(() => {
    res.sendStatus (400)
            })
    });
    