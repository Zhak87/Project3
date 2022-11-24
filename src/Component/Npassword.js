import React, { Component } from 'react'
import { Container, Form,  } from "react-bootstrap"
import LogoImg2 from "../Assets/logo.png"
import { Button } from 'react-bootstrap'

import "./Npassword.css"

export default class Npassword extends Component {
  render() {
    return (
      <div className="login__bg-f">
        <div className="bg__fon">
        <Container id="main-container" className='bg-fon d-grid h-100 container'>
            <Form id="sing-in-form" className='login__card w-100'>
            <img 
              src={LogoImg2}
              className=" Logologin"
              alt="Logologin"
              />
              <h1 className='fs-3 fw-bold'>Новый пароль:</h1>
              <p className='body__p' id="new__password">Придумайте новый пароль</p>
              <p className='body__p' id="password__desc">Пароль должен состоять не менее чем из 8 символов и содержать заглавные, строчные буквы латинского алфавита, цифры и специальные символы</p>
            <Form.Group className='mb-3' controlId="sign-in-password">
              <Form.Control type="password" size="lg" placeholder="Новый пароль" autoComplete="current-password" className="parol position-relative" />
            </Form.Group>
            <Form.Group className='mb-3' controlId="sign-in-password">
              <Form.Control type="password" size="lg" placeholder="Подтвердить пароль" autoComplete="current-password" className="parol position-relative" />
            </Form.Group>
              <div className="d-grid">
              <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Войти</Button>
              </div>
            <a href='/' className='back__home d-flex mb-2'>Вернуться назад</a>
            </Form> 
        </Container>
        </div>
        </div>
    )
  }
}
