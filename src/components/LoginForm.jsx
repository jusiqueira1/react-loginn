  import React from 'react';

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Logar</button>
    </form>
  );
};

export default LoginForm;
