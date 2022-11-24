import React, { useState } from 'react'
import { Button, Container, Modal, } from 'react-bootstrap' 
import "./Homefond.css"





export default function Homefond()  {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (    
      <>
        <Container className="portal__home">
          <Container className="portal__content">
             <h1 className="title__home">Конкурсы</h1>
             <Container className="comp__card">
              <div className="portal__card__home1"> 
              <h2 className="comp__title">Jas Social Impact 2022</h2>
              <p className="comp__description">Гранты на социальные проекты и социальное предпринимательство.  
              Участниками могут быть любые команды с лидером-заявителем из сообщества Назарбаев Университета и выпускников Назарбаев Интеллектуальной Школы.</p>

              
              <p className="portal__text">Статус конкурса</p>
              <p className="portal__pi__text">Сбор заявок</p>
              <p className="portal__text">Дата начала сбора заявок</p>
              <p className="portal__pi__text">11 апреля 2022</p>
              <p className="portal__text">Дата окончания сбора заявок</p>
              <p className="portal__pi__text">31 мая 2022</p>

               
              <Button className="button1 d-flex justify-content-center" size="lg">Подать заявку</Button>
              <Button className="button3 d-flex justify-content-center mt-mb-10" variant="success" size="lg" id="submit">Посмотреть заявку</Button>
              <Button className="button2 d-flex justify-content-center margin-none" variant="light" size="lg" onClick={handleShow}>Отозвать заявку</Button>
              </div>

              <div className="portal__card__home2"> 
              <h2 className="comp__title">Talap 2022</h2>
              <p className="comp__description">Конкурс на присуждение стипендии «Талап» Корпоративного фонда «Фонд социального развития» для обучения по программе докторантуры Doctor of Philosophy (PhD), Doctor of Education (EdD), Executive Doctor of Education (Executive EdD), Doctor of Business Administration (DBA) за рубежом (далее-Конкурс). </p>

              
              <p className="portal__text">Статус конкурса</p>
              <p className="portal__pi__text">Сбор заявок</p>
              <p className="portal__text">Дата начала сбора заявок</p>
              <p className="portal__pi__text">11 апреля 2022</p>
              <p className="portal__text">Дата окончания сбора заявок</p>
              <p className="portal__pi__text">31 мая 2022</p>

               
              <Button className="button1 d-flex justify-content-center" size="lg">Подать заявку</Button>
              <Button className="button3 d-flex justify-content-center mt-mb-10" variant="success" size="lg" id="submit">Посмотреть заявку</Button>
              <Button className="button2 d-flex justify-content-center margin-none" variant="light" size="lg" onClick={handleShow}>Отозвать заявку</Button>
              </div>
             </Container>
          </Container>
        </Container>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header>
              <Modal.Title>Вы действительно хотите отозвать заявку?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button className="modal-padding1 d-flex justify-content-center" id="modal__button" variant="success" size="lg">Да</Button>
          <Button className="modal-padding2 d-flex justify-content-center" id="modal__button" variant="light" size="lg">Нет</Button>
          </Modal.Body>
      </Modal>
        </>



    );
  };