import React from 'react';
import '../App.css';

const LoginForm = ({ nomedeusuario, senha, setUsername, setPassword, handleLogin }) => {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Faça seu Login: </h2>
      <div className="input-grupo">
        <label>Nome do Usuário:</label>
        <input
          type="text"
          value={nomedeusuario}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-grupo">
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-button" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
