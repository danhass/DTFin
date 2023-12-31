import './App.css';
import { useState } from 'react';
import {Login} from './components/Login';
import {Main} from './components/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLoggedinStatus = (status) => {
    setLoggedIn(status);
  }
  return (
    <div className="App">
      <Main loggedIn={loggedIn} />
      <Login updateLoggedinStatus={updateLoggedinStatus} />
    </div>
  );
}

export default App;
