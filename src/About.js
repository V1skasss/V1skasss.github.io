import './About.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Aboutt() {
    return (
      <div className='App'>
        <AboutUs/>
      </div>
    );
  }

  function AboutUs() {
    return (
      <div className="AboutUss">
        <div className="about-container">
          <h1>О НАС</h1>
          <div className="image-block-container">
            <div className="image-block">
              <div className="pseudo-container"></div>
              <div class="content">
                <p>Наши концерты — это вихрь эмоций и энергии, и мы приглашаем вас стать частью этого незабываемого опыта.  <Link to="/concerts">Билеты</Link> на предстоящие выступления доступны на нашем сайте.<br/><br/></p>
                <p>Мы предлагаем <Link to="/uslugi">курсы</Link> по игре на электрогитаре, вокалу и написанию песен, чтобы вы могли разделить с нами радость творчества. Наши опытные музыканты помогут вам освоить инструменты и техники, которые сделали нас известными.<br/><br/></p>
                <p>Ищете особенный подарок? Наша эксклюзивная услуга <Link to="/uslugi">"Видеопоздравление от группы"</Link> позволит вам заказать персонализированное видео, в котором мы поздравим вас или ваших близких с любым праздником, добавив тепла и личного отношения.<br/><br/><br/></p>
                <p class="centered-text">Присоединяйтесь к нашему путешествию, оставайтесь на волне "Три дня дождя"<br /> и пусть каждый ваш день будет наполнен музыкой!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  

  export default Aboutt;