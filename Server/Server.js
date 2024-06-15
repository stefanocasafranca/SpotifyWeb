const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'fb8fd9e5ef964a758c0585c41330f11a',
    clientSecret: '???'
    })
    })
