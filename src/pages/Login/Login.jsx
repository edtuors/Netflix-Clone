import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState('Entrar');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault(); 
    setLoading(true);
    if (signState === "Entrar") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Carregando" />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login-logo' alt="Logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Cadastrar" ? (
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Seu nome' 
              />
            ) : null}
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder='E-mail' 
            />
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder='Senha' 
            />
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remenber"> {/* Mantido o nome original da classe */}
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Lembrar de mim</label>
              </div>
              <p>Precisa de ajuda?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Entrar" ? (
              <p>
                Novo na Netflix?{" "}
                <span onClick={() => setSignState("Cadastrar")}>Cadastre-se agora</span>
              </p>
            ) : (
              <p>
                Já tem uma conta?{" "}
                <span onClick={() => setSignState("Entrar")}>Entre agora</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
