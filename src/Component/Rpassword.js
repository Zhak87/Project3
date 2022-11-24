import React, { Component } from 'react'
import { Container, Form,  } from "react-bootstrap"
import LogoImg2 from "../Assets/logo.png"
import { Button } from 'react-bootstrap'

import "./Rpassword.css"

export default class Rpassword extends Component {
  render() {
    return (
      <div className="login__bg-f"> 
        <div className="bg__fon">
        <Container id="main-container" className='bg-fon d-grid h-100 container'>
            <Form id="sing-in-form" className='login__card w-100'>
            <img 
              src={LogoImg2}
              className="Logologin"
              alt="Logologin"
              />
              <h1 className='fs-3 fw-bold'>Восстановить пароль:</h1>
              <p className="email__w">Введите е-mail для восстановления</p>
              <Form.Group className='mb-3' controlId="sign-in-email-address">
                <Form.Control type="email" size="lg" placeholder="Эл. почта" autoComplete="username" className="el-pochta position-relative" />
              </Form.Group>
              <div className="d-grid">
              <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Отправить</Button>
              </div>
            <a href='/' className='back__home d-flex mb-2'>Вернуться назад</a>
            </Form> 
        </Container>
        </div>
        </div>
    )
  }
}
