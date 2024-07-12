import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; 
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <h1>Faça seu Login:</h1>
      {!loggedIn ? (
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <div>
          <h2>Bem-vindo, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
