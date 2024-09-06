import React from 'react';
import './chat.css';

function Chat() {
    return (
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-8 col-xl-6 chat">
              <div className="card">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <div className="user_info">
                      <span>Sala 1</span>
                      <p>7 Mensagens</p>
                    </div>
                    <div className="video_cam">
                      <span><i className="fas fa-video"></i></span>
                      <span><i className="fas fa-phone"></i></span>
                    </div>
                  </div>
                  <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                  <div className="action_menu">
                    <ul>
                      <li><i className="fas fa-user-circle"></i> Ver perfil</li>
                      <li><i className="fas fa-users"></i> Adicionar aos amigos próximos</li>
                      <li><i className="fas fa-plus"></i> Adicionar ao grupo</li>
                      <li><i className="fas fa-ban"></i> Bloquear</li>
                    </ul>
                  </div>
                </div>
                <div className="card-body msg_card_body">
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img src="/imagens/ab67616d00001e02da68f609aacbba9fde19fd93.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                      Ei, Alex! Já construiu aquele castelo no Nether?
                      <span className="msg_time">8:40 AM, Hoje</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Steve! Construi sim, mas um ghast quase me explodiu!
                      <span className="msg_time_send">8:55 AM, Hoje</span>
                    </div>
                    <div className="img_cont_msg">
                      <img src="/imagens/download.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img src="/imagens/ab67616d00001e02da68f609aacbba9fde19fd93.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                      Haha, clássicos do Nether! Eu fiquei minerando diamante por horas.
                      <span className="msg_time">9:00 AM, Hoje</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Diamantes! Dá para fazer uma espada nova. Cuidado com os zumbis!
                      <span className="msg_time_send">9:05 AM, Hoje</span>
                    </div>
                    <div className="img_cont_msg">
                      <img src="/imagens/c02890b79f9f26073427232927fe3029.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img src="/imagens/ab67616d00001e02da68f609aacbba9fde19fd93.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                      Pode deixar! Só não me deixa sozinho na mina outra vez...
                      <span className="msg_time">9:07 AM, Hoje</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Haha, foi mal! Te vejo no servidor mais tarde.
                      <span className="msg_time_send">9:10 AM, Hoje</span>
                    </div>
                    <div className="img_cont_msg">
                      <img src="/imagens/8bfdcd28d5fdf76e220717e5acfc781e8611140b.png" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img src="/imagens/ab67616d00001e02da68f609aacbba9fde19fd93.jpg" alt="User" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                      Combinado, até logo, Steve!
                      <span className="msg_time">9:12 AM, Hoje</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                    </div>
                    <textarea className="form-control type_msg" placeholder="Escreva sua mensagem..."></textarea>
                    <div className="input-group-append">
                      <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Chat;