import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; 
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <div className="welcome">
          <h2>Bem-vindo, {username}!</h2>
          <button className="logout-button" onClick={handleLogout}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default App;
