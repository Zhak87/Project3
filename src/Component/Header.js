import React, { Component } from 'react'
import LogoImg from "../Assets/logo.png"
import { Navbar, Container, Nav, NavDropdown, Breadcrumb} from "react-bootstrap"


import "./Header.css"

export default class Header extends Component {
  render() {
    return (
        <>
        <div className="body__header">
        <Navbar expand="lg">
      <Container className='wrapper'>
        <Navbar.Brand className="img__header"><img 
            src={LogoImg}
            className="Logoheader d-inline-block aling-top"
            alt="Logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://portal.sdf.kz">Конкурсы</Nav.Link>
            <Nav.Link href="https://portal.sdf.kz/cabinet/personal">Мой кабинет</Nav.Link>
            <NavDropdown title="RU" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">KZ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home" id="SignOut__section">
        <Nav.Item id="nav__end__flex">
          <Nav.Link href="/home">Выйти</Nav.Link>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Container className='wrapper'>
  <div className='header__divider'></div>
</Container>
    

<Container className='wrapper' id="header__section2">
    <section className='header__section2'>
  <section className='header__breadcrumbs'>
 <Breadcrumb className="breadcrumbs__header">
                    <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>Мой кабинет</Breadcrumb.Item>
            </Breadcrumb>
</section>
            <section className="header__name">
                    <div className="authorized__name__content">
                            <p className='applicant__type'>Студент НУ |</p>
                            <p className="authorized__name1">Иванов</p>
                            <p className="authorized__name2">Иван</p>
                            <p className="authorized__name3">Иванович</p>
                    </div>
              </section>
              </section>
              </Container>
      </div>
      </>
    );
  }
}
