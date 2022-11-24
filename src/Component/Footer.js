import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import LogoWhite from "../Assets/logowhite.png"
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (   
    <Container fluid className="footer">
        <Container className="footer__content">
          <div className="footer__item">
            <img 
              src={LogoWhite}
              className="logowhite"
              alt="Logologin"
              />
              <h2 className="footer__title">Связаться с нами</h2>
              <p className="footer__text__title">По вопросам конкурса:</p>
              <p className="footer__text">+7 (771) 055-79-41</p>
              <p className="footer__text">sdfgrants@nu.edu.kz</p>
              <p className="footer__text__title2">По техническим вопросам:</p>
              <p className="footer__text">+7 (771) 055-79-42 (Whatsapp)</p>
              <p className="footer__text__portal">© Портал проектов и программ Фонда социального развития, 2022 г. Все права защищены.</p>
            </div>      
        </Container> 
    </Container>
    )
  }
}
