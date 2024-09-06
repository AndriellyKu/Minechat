import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/dirtquedirt.png';

function Home() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();

      navigate('/chat'); 
    };

    return (
        <div className='contWord' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="header">
                    <h1>Selecione a Sala</h1>
                </div>
                <div className="worldList">
                    <div className="worldItem" onClick={toChat}>
                        <img src="https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png" alt="Sala 1" />
                        <div className="world-info">
                            <p>Sala 1</p>
                            <span>Modo: Bate-papo, Criada em: 28/08/2024</span>
                        </div>
                    </div>
                    <div className="worldItem" onClick={toChat}>
                        <img src="https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png" alt="Sala 2" />
                        <div className="world-info">
                            <p>Sala 2</p>
                            <span>Modo: Conversa, Criada em: 28/08/2024</span>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={toChat}>Entrar</button>
                    <button onClick={() => navigate('/')}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
