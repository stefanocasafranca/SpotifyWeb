import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fb8fd9e5ef964a758c0585c41330f11a&response_type=code&redirect_uri=http://localhost:3001&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function login() {
  return (
    <Container>
        < a className = "btn btn-success btn lg" href= {AUTH_URL}>Welcome to My Spotify</a>
         </Container>
  )
}
