import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Login from './Login'; // Ensure this path is correct
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code = {code} /> :
      <Login />
  }

export default App;




/*import Login from './Login';


function App() {
  return < Login />
}

export default App;*/

/*import Login from './Login'; // Adjust the path based on the actual location of Login.js

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;*/
