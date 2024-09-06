import React from 'react';
import './Login.css';
import MinechatLogo from "../../assets/Minechat.png";
import backgroundImage from '../../assets/wp65169849.jpg';

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate('/home'); 
  };
  
  return (
    <section className='centro' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="signin">
        <div className="content">
          <img src={MinechatLogo} alt="Logo do Chat" className="logo" /> {}
          <div className="form">
            <div className="inputBox">
              <input type="text" required />
              <i>Nome de Usuário</i>
            </div>
            <div className="inputBox">
              <input type="password" required />
              <i>Senha</i>
            </div>
            <div className="links">
              <a href="#">Esqueceu a Senha?</a>
              <a href="#">Cadastre-se</a>
            </div>
            <div className="inputBox">
                <input type="submit" value="Entrar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
