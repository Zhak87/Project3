import React, { Component } from 'react'
import { Container, Form,  } from "react-bootstrap"
import LogoImg2 from "../Assets/logo.png"
import { Button } from 'react-bootstrap'

import "./Login.css"

export default class Login extends Component {
  render() {
    return (
      <div className="login__bg-f">
      <div className="bg__fon__home">
        
      <Container id="main-container" className='bg-fon d-grid container padding-cont'>

      <div className="portal__title">Портал проектов и программ <br/>Фонда социального развития</div>


      </Container>

      <Container id="main-container" className='bg-fon d-grid container padding-cont'>
          <Form id="sing-in-form2" className='login__card__home w-100'>
          <img 
            src={LogoImg2}
            className="Logologin"
            alt="Logologin"
            />
            <h1 className='fs-3 fw-bold'>Авторизация:</h1>
            <Form.Group className='mb-3' controlId="sign-in-email-address">
              <Form.Control type="email" size="lg" placeholder="Эл. почта" autoComplete="username" className="el-pochta position-relative" />
            </Form.Group>
            <Form.Group className='mb-3' controlId="sign-in-password">
              <Form.Control type="password" size="lg" placeholder="Пароль" autoComplete="current-password" className="parol position-relative" />
            </Form.Group>
            <div className="remeber__me__flex">
            <Form.Check aria-label="option 1" />
            <p className="remeber__me">Запомнить</p>
            </div>
            <div className="d-grid">
            <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Войти</Button>
            </div>
          <a href='/' className='back__home d-flex mb-2'>Регистрация</a>
          <a href='/' className='back__home'>Забыли пароль?</a>
          </Form> 
      </Container>
      </div>
      </div>
    )
  }
}
