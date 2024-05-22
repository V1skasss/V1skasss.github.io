import './Uslugi.css'
import { useState } from 'react';

function Usluggi() {
    return (
      <div className='App'>
        <Gleb2 />
        <UslugiBlock />
        <UniqueOfferBlock/>
      </div>
    );
  }

  /*1 block*/
  function Gleb2() {
    return (
      <section className='container2'>
      </section>
    );
  }

   /*2 block*/

  function UslugiBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedServicePrice, setSelectedServicePrice] = useState(0);
  
    const openModal = (service, price) => {
      setSelectedService(service);
      setSelectedServicePrice(price);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const openConfirmationModal = () => {
      setIsConfirmationModalOpen(true);
    };
  
    const closeConfirmationModal = () => {
      setIsConfirmationModalOpen(false);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты');
        return;
      }
      // После успешной обработки вызываем функцию открытия нового модального окна
      openConfirmationModal();
      // Также закрываем предыдущее модальное окно
      closeModal();
    };
  
    const isValidEmail = (email) => {
      // Регулярное выражение для проверки формата email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    return (
      <section className='uslugi'>
        <h1 className='uslugi-title'>НАШИ УСЛУГИ</h1>
        <div className='uslugi-services'>
          {/* Блок услуги электрогитары */}
          <div className='service service-guitar'>
            <div className='service-content'>
              <h2 className='service-heading'>Обучение игре на электрогитаре</h2>
              <p className='service-text'>
                Каждый ученик получает персонализированный план обучения, который учитывает его уровень владения инструментом и музыкальные предпочтения.
                <br/><br/>
                Занятия проводятся членами группы "Три дня дождя", которые имеют богатый опыт выступлений и записей.
                <br/><br/>
                Занятия проходят в интерактивном онлайн-формате, что дает возможность обучаться, не выходя из дома.
              </p>
              <p className='service-price'>4500 руб./1.5 часа</p>
              <button onClick={() => openModal('Обучение игре на электрогитаре', 4500)}>ЗАПИСАТЬСЯ</button>
            </div>
          </div>
          {/* Блок услуги Обучение проф. вокалу */}
          <div className='service service-guitar'>
            <div className='service-content'>
              <h2 className='service-heading'>Обучение проф. вокалу</h2>
              <p className='service-text'>
                Программа обучения адаптируется под каждого ученика, учитывая его вокальный диапазон, опыт и музыкальные цели.
                <br/><br/>
                Занятия ведутся вокалистами группы, которые обладают значительным опытом в студийной записи.
                <br/><br/>
                Занятия проходят в интерактивном онлайн-формате, что дает возможность обучаться, не выходя из дома.
              </p>
              <p className='service-price'>5000 руб./1.5 часа</p>
              <button onClick={() => openModal('Обучение проф. вокалу', 5000)}>ЗАПИСАТЬСЯ</button>
            </div>
          </div>
          {/* Блок услуги Обучение по написанию песен*/}
          <div className='service service-guitar'>
            <div className='service-content'>
              <h2 className='service-heading'>Обучение по написанию песен</h2>
              <p className='service-text'>
                Каждому ученику предоставляется индивидуальная программа,соответствующая его уровню и интересам.
                <br/><br/>
                Обучение проводится опытными музыкантами группы, которые имеют успешный опыт написания песен и работу в музыкальной индустрии.
                <br/><br/>
                Занятия проходят в интерактивном онлайн-формате, что дает возможность обучаться, не выходя из дома.
              </p>
              <p className='service-price'>4500 руб./1.5 часа</p>
              <button onClick={() => openModal('Обучение по написанию песен', 4500)}>ЗАПИСАТЬСЯ</button>
            </div>
          </div>
        </div>
  
        {/* Модальное окно */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h1 className="modal-title">Подтверждение записи</h1>
              <p>УСЛУГА: {selectedService}</p>
              <p>ЦЕНА: {selectedServicePrice} рублей/1.5 часа</p>
              <input type="text" placeholder="Имя" value={name} onChange={handleNameChange} className="input-field" />
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="input-field" />
              <button onClick={handleSubmit} disabled={!name || !email}>Подтвердить запись</button>
            </div>
          </div>
        )}
        {/* Второе модальное окно с благодарностью */}
        {isConfirmationModalOpen && (
          <div className="modal">
            <div className="thank-you-modal-content">
              <span className="close" onClick={closeConfirmationModal}>&times;</span>
              <p><br />Благодарим за запись на обучение!<br /> Вся подробная информация и ссылка на оплату были отправлены на вашу почту ({email})</p>
            </div>
          </div>
        )}

        </section>
            );
          }


  function UniqueOfferBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  
    const openModal = (service, price) => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const openConfirmationModal = () => {
      setIsConfirmationModalOpen(true);
    };
  
    const closeConfirmationModal = () => {
      setIsConfirmationModalOpen(false);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты');
        return;
      }
      // После успешной обработки вызываем функцию открытия нового модального окна
      openConfirmationModal();
      // Также закрываем предыдущее модальное окно
      closeModal();
    };
  
    const isValidEmail = (email) => {
      // Регулярное выражение для проверки формата email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    
    return (
      <section className='unique-offer'>
        <h1 className='unique-offer-title'>УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h1>
        <div className='offer-container'>
          <div className='offer-rectangle'>
            <div className='pseudo-container'></div>
            <h2 className='offer-heading'>ЗАКАЖИ ВИДЕОПОЗДРАВЛЕНИЕ ОТ <br/>ЛЮБИМОЙ ГРУППЫ НА ЛЮБОЙ ПРАЗДНИК</h2>
            <p className='offer-text'>
              Члены группы лично обращаются к получателю, делая приветствие искренним и запоминающимся.
            <br/>
              Подход к каждому случаю: Видеоприветы могут быть адаптированы для различных событий, будь то дни рождения, юбилеи, свадьбы или другие значимые моменты.
            </p>
            <p className='offer-detail'>
              Эта услуга позволяет создать незабываемый подарок для близких, друзей или коллег, добавляя личный и творческий штрих к особым моментам жизни.
            </p>
            <p className='offer-detail1'>
              ЦЕНА: 6000 РУБ.
            </p>
            <button onClick={() => openModal()} className='offer-button'>ЗАКАЗАТЬ УСЛУГУ</button>
          </div>
        </div>


              {/* Модальное окно */}
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h1 className="modal-title">Видеопоздравление от группы <br /> ТРИ ДНЯ ДОЖДЯ!</h1>
                    <p>Заполните свои контактные данные,<br /> чтобы мы могли с вами связаться</p>
                    <p>ЦЕНА: 6000 рублей</p>
                    <input type="text" placeholder="Имя" value={name} onChange={handleNameChange} className="input-field" />
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="input-field" />
                    <button onClick={handleSubmit} disabled={!name || !email}>Подтвердить запись</button>
                  </div>
                </div>
              )}
              {/* Второе модальное окно с благодарностью */}
              {isConfirmationModalOpen && (
                <div className="modal">
                  <div className="thank-you-modal-content">
                    <span className="close" onClick={closeConfirmationModal}>&times;</span>
                    <p><br />На вашу почту ({email}) были высланы реквизиты для оплаты и подробная инструкция для связи с менеджером, чтобы уточнить все детали вашего заказа</p>
                  </div>
                </div>
              )}
      
              </section>
    );
  }
  

  export default Usluggi;