import React, { Component } from 'react'
import { Button, Container,  Tabs, Tab, Form, } from 'react-bootstrap'
import MaskedFormControl from 'react-bootstrap-maskedinput'
import "./Cabinet.css"

export default class Cabinet extends Component {
  render() {
    return (
        <Container className="portal__home wrapper">
        <Container className="portal__content">
           <h1 className="title__cabinet">Мой кабинет</h1>
           <Container className="comp__card">
            <div className="cabinet__card"> 
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabs__cabinet">
                <Tab eventKey="home" title="Профиль">
                <div className='h-divider tap_divider'></div>
                <div className="home__cabinet__flex">
                    <div className="home__cadinet" id="home__cadinet1">
                        <h2 className="title__cabinet__form">Личные данные</h2>
                    <div className="home__content">
                        <div className="cabinet__content__flex"></div>
                            <h2 className="input__header">Фото</h2>
                            <div className="general-info__avatar">
                            <div>
                                <p className="general-info__botton">3 x 4</p>
                                <p className="general-info__botton">Фото</p>
                            </div>
                            </div>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Имя</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="name" size="lg" placeholder="Ваше имя" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Фамилия</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="last_name" size="lg" placeholder="Ваша фамилия" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Отчество</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="last_name" size="lg" placeholder="Ваше очество" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Дата рождения</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='datarange' mask='11.1111' placeholder="мм.гггг" />
                            </Form.Group>
                        </div>
                        <div className="home__content gender__flex">
                            <h2 className="input__header title__flex">Пол</h2>
                            <Form className="radio__flex__gender">
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Мужской"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Женский"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}
                        </Form>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">ИИН</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="Введите ИИН"/>
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Гражданство</h2>
                            <Form.Select>
                            <option>KAZAKHSTAN</option>
                            <option value="1">DENMARK</option>
                            <option value="2">RUSSIAN</option>
                            <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Семейное положение</h2>
                            <Form.Select>
                            <option className="title__select">не женат/не замужем</option>
                            <option value="1" className="content__select">женат/замужем</option>
                            <option value="2" className="content__select">разведен(а)</option>
                            <option value="3" className="content__select">вдовец/вдова</option>
                            </Form.Select>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Телефон</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='phoneNumber' mask='+1 (111) 111-1111' />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Эл. почта</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="email" size="lg" placeholder="Ваша эл. почта" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="home__cadinet" id="home__cadinet2">
                    <h2 className="title__cabinet__form">Образование</h2>
                    <div className="home__content">
                            <h2 className="input__header">Тип заявителя</h2>
                            <Form.Select>
                            <option>Сотрудник НУ</option>
                            <option value="1">Студент НУ</option>
                            <option value="2">Выпускник НИШ</option>
                            <option value="3">Выпускник НУ</option>
                            </Form.Select>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">ID Номер</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="number" size="lg" placeholder="Ваш ID номер" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Университет</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите университет" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Факультет</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите факультет" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Специальность</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите специальность" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Год начала</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='datarange' mask='11.1111' placeholder="мм.гггг" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Год окончания</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='datarange' mask='11.1111' placeholder="мм.гггг" />
                            </Form.Group>
                        </div>
                        <div className="home__content radio__flex">
                        <Form.Check aria-label="option 1" />
                        <h2 className="input__header title__flex__radio">Обладатель Болашак</h2>
                        </div>
                    </div>
                    <div className="home__cadinet" id="home__cadinet3">
                    <h2 className="title__cabinet__form">Дополнительная информация</h2>
                        <div className="home__content">
                            <h2 className="input__header">Адрес</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Ваш адрес" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Контактное лицо</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Контактное лицо" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Организация</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите организация" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Департамент/отдел</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите департамент/отдел" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Позиция</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="text" size="lg" placeholder="Укажите позицию" autoComplete="current-password" className="parol cabinet__frm position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content radio__flex">
                        <Form.Check aria-label="option 1" />
                        <h2 className="input__header title__flex__radio">Не работаю</h2>
                        </div>
                    </div>
                    </div>
                
                    
    
                    <Button className="button3 save__button d-flex justify-content-center mb-4" variant="success" size="lg">Сохранить</Button>
                </Tab>
                <Tab eventKey="profile" title="Мои заявки">
                <div className='h-divider tap_divider'></div>
                <div className='application__container'>
                    <div className='application__content1'>
                    <p className="portal__text tab__form__header">Номер заявки</p>
                    <p className='subtitle-cabinet'>22-NJC-00099</p>
                    <p className="portal__text tab__form__header">Дата подачи</p>
                    <p className='subtitle-cabinet'>11 апреля 2022</p>
                    <p className="portal__text tab__form__header">Статус</p>
                    <p className='subtitle-cabinet'>Ожидает рассмотрения</p>
                    <p className="portal__text tab__form__header">Конкурса</p>
                    <p className='subtitle-cabinet'>Jas Social Impact 2022</p>
                    <p className="portal__text tab__form__header">Статус конкурса</p>
                    <p className='subtitle-cabinet'>Сбор заявок</p>
                    <Button className="button3 save__button d-flex justify-content-center mb-4" variant="success" size="lg">Посмотреть заявку</Button>
                    </div> 

                    <div className='header__divider__cabinet'></div>

                    <div className='application__content2'>
                    <p className="portal__text tab__form__header">Номер заявки</p>
                    <p className='subtitle-cabinet'>22-NJC-00099</p>
                    <p className="portal__text tab__form__header">Дата подачи</p>
                    <p className='subtitle-cabinet'>11 апреля 2022</p>
                    <p className="portal__text tab__form__header">Статус</p>
                    <p className='subtitle-cabinet'>Ожидает рассмотрения</p>
                    <p className="portal__text tab__form__header">Конкурса</p>
                    <p className='subtitle-cabinet'>Jas Social Impact 2022</p>
                    <p className="portal__text tab__form__header">Статус конкурса</p>
                    <p className='subtitle-cabinet'>Сбор заявок</p>
                    <Button className="button3 save__button d-flex justify-content-center mb-4" variant="success" size="lg">Посмотреть заявку</Button>
                    </div> 
                    </div>

        
                </Tab>
                <Tab eventKey="contact" title="Настройки" >
                <div className='h-divider tap_divider'></div>
                        <div className="home__content">
                            <h2 className="input__header">Логин</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="email" size="lg" placeholder="Эл. почта" autoComplete="current-password" className="parol cabinet__frm3 position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Старый пароль</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="password" size="lg" placeholder="Введите старый пароль" autoComplete="current-password" className="parol cabinet__frm3 position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Новый пароль</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="password" size="lg" placeholder="Введите новый пароль" autoComplete="current-password" className="parol cabinet__frm3 position-relative" />
                            </Form.Group>
                        </div>
                        <div className="home__content">
                            <h2 className="input__header">Подвердить пароль</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="password" size="lg" placeholder="Подвердите новый пароль" autoComplete="current-password" className="parol cabinet__frm3 position-relative" />
                            </Form.Group>
                        </div> 
                        <Button className="button3 save__button d-flex justify-content-center mb-4" variant="success" size="lg">Сохранить</Button>
                </Tab>
            </Tabs>   
            </div>
           </Container>   
        </Container>
      </Container>
    )
  }
}
