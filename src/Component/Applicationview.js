import React, { Component } from 'react'
import { Button, Container, Form, } from 'react-bootstrap'
import MaskedFormControl from 'react-bootstrap-maskedinput'
import "./Applicationview.css"

export default class Applicationview extends Component {
  render() {
    return (
        <Container className="portal__home wrapper">
        <Container className="portal__content">
           <h1 className="title__cabinet">Просмотр заявки</h1>
           <Container className="">
           <div className="portal__card__home"> 
              <h2 className="comp__title">Jas Social Impact 2022</h2>
               

                <container className="status__tab">
              <section className="status__tab1">
              <p className="portal__text">Номер заявки</p>
              <p className="portal__pi__text">22-NJC-00166</p>
              <p className="portal__text">Статус</p>
              <p className="portal__pi__text">Заявка подписана</p>
              <p className="portal__text">Заявитель</p>
              <p className="portal__pi__text">Zhakenov Duman Dusenovich</p>
              <p className="portal__text">Дата подачи</p>
              <p className="portal__pi__text last-child">18 мая 2022</p>
              </section>

              <section className="status__tab2">
              <p className="portal__text">Дата начала сбора заявок</p>
              <p className="portal__pi__text">11 апреля 2022</p>
              <p className="portal__text">Дата окончания сбора заявок</p>
              <p className="portal__pi__text">31 мая 2022</p>
              <p className="portal__text">Статус конкурса</p>
              <p className="portal__pi__text last-child">Сбор заявок</p>
              </section>
                </container>

                <div className='compform__divider'></div>

                <container className="comp__program__form">
                
                
                
            
              <div className="home__content">
                            <h2 className="input__header">Название проекта</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="name" size="lg" placeholder="" autoComplete="current-password" className="parol cabinet__frm position-relative" value="Привет мир" disabled="disabled" />
                            </Form.Group>
                </div>

                <div className="home__content">
                            <h2 className="input__header">Продолжительность проекта (с .. по)</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <MaskedFormControl type='text' name='datarange' mask='11.1111-11.1111' placeholder="мм.гггг-мм.гггг" value="452657254156" disabled="disabled"/>
                            </Form.Group>
                </div>

                <div className="home__content gender__flex">
                            <h2 className="input__header title__flex">Заявитель отметьте нужное, кликанием на опцию</h2>
                            <Form className="radio__flex__gender">
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Организация"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked
                                />
                                <Form.Check
                                    inline
                                    label="Индивидуальный Предприниматель"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                                ))}
                                </Form>
                                </div>

                                <div className="home__content">
                            <h2 className="input__header">Название организации (только для организаций)</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="name" size="lg" placeholder="" autoComplete="current-password" className="parol cabinet__frm position-relative" value="Привет мир" disabled="disabled"/>
                            </Form.Group>
                            </div>

                            <div className="home__content">
                            <h2 className="input__header">Направление деятельности (только для организаций) Кратко опишите, чем занимается ваша организация</h2>
                            <Form.Group className='mb-3' controlId="sign-in-password">
                            <Form.Control type="name" size="lg" placeholder="" autoComplete="current-password" className="parol cabinet__frm position-relative" value="Привет мир" disabled="disabled"/>
                            </Form.Group>
                            </div>

                                <div className="home__content">
                            <h2 className="input__header">Относитесь ли Вы к одной из следующих категорий?</h2>
                            <Form.Select>
                            <option>Сельская молодежь</option>
                            <option value="1">Кандасы</option>
                            <option value="2">Не отношусь ни к одной из категории</option>
                            <option value="3">Three</option>
                            </Form.Select>
                        </div>

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">I. ПОТЕНЦИАЛ ОРГАНИЗАЦИИ</h1>
                        <h2 className="form__question">1. Действующий бизнес</h2>
                        <p className="form__question__descrption">Кратко опишите продукт или услугу, которую Вы реализуете? Кто Ваши клиенты (B2B, B2C, C2C, B2B2C, B2G)? Опишите свое соответствие признакам импакт предпринимательства</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>  

                        <h2 className="form__question">2. Финансовая модель проекта после масштабирования</h2>    
                        <p className="form__question__descrption">Приложите документы, подтверждающие наличие прибыли/убытков за последний год или более (форму финансовой отчетности и (или) утвержденную/аудированную отчетность и (или) иные документы подтверждающие указанные сведения)</p>              

                        <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="fn__table">
                                    <tr className="first__table-title">
                                        <th id='widht-60'></th>
                                        <th id='widht-20'>2020</th>
                                        <th id='widht-20'>2021</th>
                                    </tr>
                                    <tr>
                                        <p className="fn__table-title">Выручка</p>
                                    </tr>
                                    <tr>
                                        <th>Товары, работы, услуги</th>
                                        <td>
                                            <input className="fn__input" name="services" type="text" value="11651917" disabled="disabled"/>
                                        </td>
                                        <td>
                                            <input className="fn__input" name="services" type="text"  value="142412124" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Итого выручка</th>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <p className="fn__table-title">Выручка</p>
                                    </tr>
                                    <tr>
                                        <th>Прямые</th>
                                        <td>
                                            <input className="fn__input" name="directCosts" type="text"  value="123123123" disabled="disabled"/>
                                        </td>
                                        <td>
                                            <input className="fn__input" name="directCosts" type="text" value="12312441" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Маркетинг, административные и тд</th>
                                        <td>
                                            <input className="fn__input" name="marketing" type="text" value="12312312312" disabled="disabled" />
                                        </td>
                                        <td>
                                            <input className="fn__input" name="marketing" type="text"  value="13123123123" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Итого расходы</th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Доход до учета налогов</th>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>Налоговые расходы</th>
                                        <td>
                                            <input className="fn__input" name="taxExpenses" type="text"  value="123123123" disabled="disabled"/>
                                        </td>
                                        <td>
                                            <input className="fn__input" name="taxExpenses" type="text"  value="3123123123" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Чистый доход</th>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </table>
                                </div>
                                </div>
                                

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">II. СОЦИАЛЬНЫЙ ИМПАКТ</h1>
                        <h2 className="form__question">3. Социальная проблема</h2>
                        <p className="form__question__descrption">Опишите, какую проблему будет решать Ваш проект? Необходимо привести подтверждающую информацию, актуальные ссылки на источники</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>  

                        <div className="section__text__input">
                        <h2 className="form__question"><a href='#'>4. Благополучатели</a></h2>
                        <p className="form__question__descrption">Чьи проблемы решает Ваш проект? Кто получит пользу от Вашего проекта? Сколько человек получит пользу</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">5. Мотивационный вопрос</h2>
                        <p className="form__question__descrption">Почему Вы решили заниматься решением данной проблемы? Опишите, что мотивирует Вас заняться решением именно этой проблемы. Возможно, Вы уже что-то предпринимали в этом направлении, опишите</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>

                        <div className="section__text__input">
                        <h2 className="form__question">6. География реализации</h2>
                        <p className="form__question__descrption">Укажите конкретно в каких регионах, областях, городах, селах Казахстана будет реализовываться Ваш проект. Проекты, реализуемые вне Казахстана, рассматриваться не будут</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>


                        <div className="section__text__input">
                        <h2 className="form__question">7. Индикаторы успешности проекта</h2>
                        <p className="form__question__descrption">Укажите, как Вы поймете, что проект успешно реализуется. Какими конкретными качественными и количественными показателями, которые логически связаны с целями и задачами, Вы сможете замерить успех проекта. Каким образом будет происходить замер? Например, к количественным показателям относится количество людей, публикаций и другие; к качественным показателям – какие изменения произойдут с бенефециарами Вашего проекта, например, 70 % девочек повысят знания в той или иной деятельности</p>
                        </div>

                        <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                    <tr className="first__table-title">
                                        <th id="widht-60">Наименование индикатора</th>
                                        <th id="widht-20">Единица измерения</th>
                                        <th id="widht-20">Конечная цель</th>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td m-t-10'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="ultimateGoal_0" type="number" name="ultimateGoal" value="123123123" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_1" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_1" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="ultimateGoal_1" type="number" name="ultimateGoal" value="3123123" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_2" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_2" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="ultimateGoal_2" type="number" name="ultimateGoal"value="14141243" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_3" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="unit_3" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="ultimateGoal_3" type="number" name="ultimateGoal" value="3123123" disabled="disabled"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                               

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">III. МАСШТАБИРУЕМОСТЬ</h1>
                        <h2 className="form__question">8. Идея масштабирования</h2>
                        <p className="form__question__descrption">Опишите какую часть своего бизнеса Вы собираетесь масштабировать? В чем заключается идея?</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">9. Цель масштабирования</h2>
                        <p className="form__question__descrption">Укажите, к какому результату Вы стремитесь (цель) и что будете делать для ее достижения</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>

                        <div className="section__text__input">
                        <h2 className="form__question">10. Календарный план</h2>
                        <p className="form__question__descrption">Мероприятие/Действие/Работа – это то, что нужно провести/организовать/разработать, чтобы реализовать проект</p>
                                
                        <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                    <tr className="first__table-title">
                                        <th classsName="white-space">Наименование действия / мероприятия/работы</th>
                                        <th classsName="white-space">Срок выполнения</th>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                        <MaskedFormControl type='text' name='datarange' mask='11.1111-11.1111' placeholder="мм.гггг-мм.гггг" id="mask-pd" value="43453453456456" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_1" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                        <MaskedFormControl type='text' name='datarange' mask='11.1111-11.1111' placeholder="мм.гггг-мм.гггг" id="mask-pd" value="564564532135" disabled="disabled"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                        </div>

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">IV. БИЗНЕС МОДЕЛЬ ПРОЕКТА ПОСЛЕ МАСШТАБИРОВАНИЯ</h1>
                        <h2 className="form__question">11. Портрет клиента</h2>
                        <p className="form__question__descrption">Портрет клиента Опишите портрет клиента. Укажите примерный возраст, местожительство, семейное положение, сферу занятости и уровень зарплаты, потребности и желания Какие боли своих клиентов вы будете решать?</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 


                        <div className="section__text__input">
                        <h2 className="form__question">12. Каналы маркетинга</h2>
                        <p className="form__question__descrption">Как Вы будете выходить на своих клиентов, какие каналы использовать? Какие каналы использовать?</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>

                        <div className="section__text__input">
                        <h2 className="form__question">13. Финансовая модель проекта после масштабирования</h2>
                        
                           
                            <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                    <tr className="first__table-title">
                                        <th classsName="white-space p-b">Стоимость и объем реализуемых товаров/оказываемых услуг</th>
                                        <th classsName="white-space">Статьи расходов</th>
                                        <th classsName="white-space">Распределение чистого дохода</th>    
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="unit_0" type="text" name="unit" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        </div>

                        
                        

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">V. РЕСУРСЫ</h1>
                        <h2 className="form__question">15. Кто входит в Вашу команду?</h2>
                        <p className="form__question__descrption">Опишите роль каждого из них в проекте</p>

                                
                                <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>E-mail лидера/члена проектной команды</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                            <input className="expense-plan__input" id="name_0" type="email" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>ИИН</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                        <MaskedFormControl type='text' name='phoneNumber' mask='111111111111' placeholder="" id="mask-pd" value="5154915665181" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>Имя</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>Фамилия</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>Отчество</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <th classsName="white-space" id='widht-70'>Соответствующий задачам проекта опыт работы</th>
                                        <td className='expense-plan__td' id='widht-30'>
                                            <input className="expense-plan__input" id="name_0" type="number" name="name" value="9811995" disabled="disabled"/>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title" id='widht-70'>
                                        <th>Резюме (CV) (приложенный файл)</th>
                                        <td className='expense-plan__td' id="button-cv">
                                        <p className="attachment_file__pdf">Резюме.pdf</p> 
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">16. Партнеры проекта</h2>
                        <p className="form__question__descrption">Обращались ли Вы куда-либо с данной идеей для получения финансирования? Получали ли вы ранее финансирование для этого проекта? Перечислите, при наличии, спонсоров, инвесторов, партнеров проекта Кто, по Вашему мнению, может стать партнером, инвестором или спонсором проекта?</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div>

                        <div className="section__text__input">
                        <h2 className="form__question">17. Бюджет проекта</h2>
                        <p className="form__question__descrption-p">Обязательно предусмотрите расходы на ведение бухгалтерского и налогового учета. Какие расходы Вы понесете проекта, за счет средств гранта Фонда? Например, услуги типографии, закуп швейного оборудования. Если Вы планируете вложить собственные средства или средства софинансирования (из других источников) в проект, то нужно включить и указать источник финансирования</p>
                        <p className="form__question__descrption-p">Не рекомендуется включать следующие расходы:</p>
                        <p className="form__question__descrption-p"><li>На заработную плату проектной команды;</li> </p>
                        <p className="form__question__descrption-p"><li>Инфраструктурные проекты (в качестве основной идеи проекта), включая проекты, предусматривающие какие-либо виды строительных работ или работ по реконструкции/ремонту;</li> </p>
                        <p className="form__question__descrption-p"><li>Услуги религиозных организаций (ремонт или строительство церквей, мечетей и т.п., религиозное образование, издание религиозной литературы и т.д.);</li> </p>
                        <p className="form__question__descrption-p"><li>Покупку оборудования (в качестве основной идеи проекта);</li> </p>
                        <p className="form__question__descrption-p"><li>Автотранспорта для местных административных органов, прочих государственных учреждений или неправительственных организаций;</li> </p>
                        <p className="form__question__descrption-p"><li>Приобретение земельных участков (в качестве основной идеи проекта);</li> </p>
                        <p className="form__question__descrption-p"><li>Проведение научных исследований;</li> </p>
                        <p className="form__question__descrption-p"><li>Написание, издание рукописей в типографии (в качестве основной деятельности по проекту);</li> </p>
                        <p className="form__question__descrption-p"><li>Издание журналов, газет (в качестве основной идеи проекта);</li> </p>
                        <p className="form__question__descrption-p"><li>Поддержание политической деятельности (деятельность политических партий, отдельного политического лица);</li> </p>
                        <p className="form__question__descrption-p"><li>Осуществление деятельности, которая может привести к дискриминации по мотивам происхождения, социального, должностного и имущественного положения, пола, расы, национальности, языка, отношения к религии, убеждений, места жительства или по любым иным обстоятельствам</li></p>


                                 
                                <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                <tr className="first__table-title">
                                        <th classsName="white-space" id="widht-30">Статья расходов</th>
                                        <th classsName="white-space" id="widht-15">Кол-во ед.</th>
                                        <th classsName="white-space" id="widht-15">Стоимость</th>
                                        <th classsName="white-space" id="widht-15">Сумма</th>
                                        <th classsName="white-space" id="widht-25">Источник </th>
                                    </tr>
                                    <tr className="first__table-title">
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_0" type="number" name="name" value="12321312" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            <input className="expense-plan__input" id="name_0" type="number" name="name" value="12312415" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td'>
                                            
                                        </td>
                                        <td className='expense-plan__td'>
                                        <Form.Select>
                                            <option className="title__select">Средства гранта Фонда</option>
                                            <option value="1" className="content__select">Собственные средства</option>
                                            <option value="2" className="content__select">Со-финансирование</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                    <tr className="first__table-title">
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_0" type="number" name="name" value="12312415" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_0" type="number" name="name" value="12431515" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                           
                                        </td>
                                        <td className='expense-plan__td '>
                                        <Form.Select>
                                            <option className="title__select">Средства гранта Фонда</option>
                                            <option value="1" disabled="disabled" className="content__select">Собственные средства</option>
                                            <option value="2" disabled="disabled" className="content__select">Со-финансирование</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                            <p className="table__subtitle-p m-t">Средства гранта Фонда:  <p className='total__number'> 1 000 000</p></p>
                            <p className="table__subtitle-p">Собственные средства:  <p className='total__number'> 1 000 000</p></p>
                            <p className="table__subtitle-p">Со-финансирование:  <p className='total__number'> 1 000 000</p></p>
                            <p className="table__subtitle-p total-amount">Итого:  <p className='total__number'> 3 000 000</p></p>


                        </div>

                        <div className="section__text__input">
                        <h2 className="form__question">18. Материально-техническая база</h2>
                        <p className="form__question__descrption">Укажите какие и для чего будет использована имеющееся в Вашей собственности материально-техническая база. Материально-техническая база- это совокупность материальных и технических средств, необходимых для ведения хозяйственной деятельности, к примеру, оборудование, инфраструктура (помещение, здания) и инструменты</p>

                                <div className="application-table__body m-t">
                            <div className="application-table">
                                <table className="second__table">
                                <tr className="first__table-title">
                                        <th classsName="white-space">Наименование</th>
                                        <th classsName="white-space">Цель</th>
                                    </tr>
                                    <tr className="first__table-title">
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                        <td className='expense-plan__td '>
                                            <input className="expense-plan__input" id="name_0" type="text" name="name" value="Привет мир" disabled="disabled"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                                
                        </div>

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">VI. ИННОВАЦИОННОСТЬ</h1>
                        <h2 className="form__question">19. Инновационность в проекте</h2>
                        <p className="form__question__descrption">Что служит новаторской разработкой, подходом, тенденцией в Вашем проекте? Под инновационностью понимается создание и применение новых или модернизация существующих способов, методов, подходов, инструментов при решении социальных проблем, новые формы организации и сотрудничества, новизна образа мышления, ценностей и убеждений</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">20. Конкуренты</h2>
                        <p className="form__question__descrption">Кто на рынке предлагает такие же или схожие услуги? В чем Ваше конкурентное преимущества</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <div className='compform__divider'></div>
                        <h1 className="main__question">VII. ЭКОЛОГИЧНОСТЬ</h1>
                        <h2 className="form__question">21. Экологичность вашего товара, продукта, услуги</h2>
                        <p className="form__question__descrption">Подробно опишите, в чем она заключаются</p>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">22. Экологичные методы, подходы и ресурсы в процессе реализации Проекта</h2>
                        <p className="form__question__descrption">Опишите, какие эко методы, подходы и ресурсы вы используете в процессе реализации проекта? К примеру: обеспечение экологической безопасности и благоприятных экологических условий труда, использование экологических материалов при производстве товаров, или применение подходов и ресурсов, способствующих охране окружающей среды</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">23. Экологически благоприятная среда для благополучателей</h2>
                        <p className="form__question__descrption">Предусмотрено ли в Вашем проекте создание подобной среды? Необходимо объяснить свой ответ</p>
                        <Form.Group className="mb-3 paragraph__text" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className="form__padding" value="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен." disabled="disabled"/>
                        </Form.Group>
                        </div> 

                        <div className="section__text__input">
                        <h2 className="form__question">24. Будете ли Вы проходить полную программу <a className='tabs__link' href='https://fund.nu.edu.kz/jas-social-impact-2022/'>JAS Camp</a> (до 8 недель инкубации+до 2 недель модуль импакт предпринимательства + оценка команды)?</h2>
                        <Form className="radio__flex__gender2">
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Да, буду проходить полную программу (до 8 недель инкубации+до 2 недель модуль импакт предпринимательства + оценка команды)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    className="radio__tb1"
                                />
                                <Form.Check
                                    inline
                                    label="Нет, буду проходить сокращенную программу JAS Camp (до 2 недель модуль импакт предпринимательства + оценка команды) и прилагаю документы, подтверждающие успешное окончание акселерации/инкубации с аналогичной идеи за последние два года"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    className="radio__tb2"
                                    checked
                                />
                                </div>
                                ))}
                                </Form>
                        </div>
                        
                        <section className='attachment__section'>
                        <p className="form__question__descrption">Документы, подтверждающие прохождение акселерации/инкубации в течение последних двух лет (1 zip архив)</p>
                        <p className="attachment_file">Файл.zip</p>   
                        </section>


                        <div className='compform__divider'></div>


                        <p className="application_status">Заявка подписана</p>
              
                </container>
               

                <container className="button__flex">
                <Button className="button2 d-flex justify-content-center" id="withdraw-margin" variant="light" size="lg">Отозвать заявку</Button>
              </container>

              </div>
           </Container>   
        </Container>
      </Container>
    )
  }
}
