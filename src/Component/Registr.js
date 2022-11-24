import React, { Component } from 'react'
import { Container, Form, Accordion, } from "react-bootstrap"
import LogoImg2 from "../Assets/logo.png"
import { Button } from 'react-bootstrap'
import MaskedFormControl from 'react-bootstrap-maskedinput'

import "./Registr.css"

export default class Registr extends Component {
  render() {
    return (
        <div className="login__bg-f">
        <div className="bg__fon">
        <Container id="main-container" className='bg-fon d-grid h-100 container'>
            <Form id="sing-in-form" className='login__card w-100 scrollbar'>
            <img 
              src={LogoImg2}
              className=" Logologin"
              alt="Logologin"
              />
              <h1 className='fw-bold'>Регистрация:</h1>
              
              <Accordion className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header className='accordion__header'><p className="title">Студент НУ</p></Accordion.Header>
                    <Accordion.Body>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="number" size="lg" placeholder="ID" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="name" size="lg" placeholder="Имя" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="last_name" size="lg" placeholder="Фамилия" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                    <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="ИИН"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="Адрес электронной почты" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <div className="remeber__me__flex">
                    <Form.Check aria-label="option 1" />
                    <p className="remeber__me"><a href='#'>Даю согласие на обработку персональных данных</a></p>
                    </div>
                    <div className="d-grid">
                    <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Зарегистрироваться</Button>
                    </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><p className="title">Сотрудник НУ</p></Accordion.Header>
                    <Accordion.Body>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="name" size="lg" placeholder="Имя" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="last_name" size="lg" placeholder="Фамилия" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                    <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="ИИН"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="Адрес электронной почты" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <div className="remeber__me__flex">
                    <Form.Check aria-label="option 1" />
                    <p className="remeber__me"><a href='#'>Даю согласие на обработку персональных данных</a></p>
                    </div>
                    <div className="d-grid">
                    <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Зарегистрироваться</Button>
                    </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><p className="title">Выпускник НИШ</p></Accordion.Header>
                    <Accordion.Body>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="name" size="lg" placeholder="Имя" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="last_name" size="lg" placeholder="Фамилия" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                    <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="ИИН"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="Адрес электронной почты" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <div className="remeber__me__flex">
                    <Form.Check aria-label="option 1" />
                    <p className="remeber__me"><a href='#'>Даю согласие на обработку персональных данных</a></p>
                    </div>
                    <div className="d-grid">
                    <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Зарегистрироваться</Button>
                    </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><p className="title">Выпускник НУ</p></Accordion.Header>
                    <Accordion.Body>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="number" size="lg" placeholder="ID" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="name" size="lg" placeholder="Имя" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="last_name" size="lg" placeholder="Фамилия" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                    <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="ИИН"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="Адрес электронной почты" autoComplete="username" className="el-pochta position-relative" />
                    </Form.Group>
                    <div className="remeber__me__flex">
                    <Form.Check aria-label="option 1" />
                    <p className="remeber__me"><a href='#'>Даю согласие на обработку персональных данных</a></p>
                    </div>
                    <div className="d-grid">
                    <Button className="button d-flex justify-content-center mb-4" variant="success" size="lg">Зарегистрироваться</Button>
                    </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className='h-divider'></div>
                <a href='/' className='back__home__reg d-flex mb-2'>Вернуться назад</a>
            </Form> 
        </Container>
        </div>
        </div>
    )
  }
}
