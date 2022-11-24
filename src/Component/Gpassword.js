import React, { Component } from 'react'
import { Container, Form,  } from "react-bootstrap"
import LogoImg2 from "../Assets/logo.png"
import { Button } from 'react-bootstrap'

import "./Gpassword.css"

export default class Gpassword extends Component {
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
              <h1 className='fs-3 fw-bold'>Спасибо за обращение</h1>
              <p className="body__p">На указанный Вами адрес электронной почты было отправлено письмо. Для продолжения перейдите по ссылке, указанной в письме.</p>
              
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
