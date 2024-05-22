import './App.css';
import './index.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Gleb />
      <InfoGroup />
      <Alboms />
      <Video />

    </div>
  );
}

/* 1 blok */
function Gleb(){
  return (
    <section className="container1"> 
        <div className="concerts">
            <h2>КОНЦЕРТЫ 2024</h2>
            <Link to="/concerts">
              <button className='knopka1'>Купить билеты</button>
            </Link>
        </div>
    </section>
  )
}

/* 2 blok */
function InfoGroup(){
  var settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      speed: 700,
      autoplay: true, // Автоматическое перелистывание
      autoplaySpeed: 3000,
  };
  return (
    <section className="info-group"  >
      <div className="info-content">
        <h2>О ГРУППЕ</h2>

        <div className="content-wrapper">
        <Slider {...settings}>
          <div className='slide'>
            <div className='rounded-block'>
              <img src="s1.webp" alt=""/>
            </div>
          </div>

          <div className='slide'>
            <div className='rounded-block'>
              <img src="s2.webp" alt="" />
            </div>
          </div>

          <div className='slide'>
            <div className='rounded-block'>
              <img src="s3.webp" alt=""  />
            </div>
          </div>

          <div className='slide'>
            <div className='rounded-block'>
              <img src="s4.webp" alt="" />
            </div>
          </div>
        </Slider>
        <div className="group-description">
          <p className="paragraph">Три дня дождя - российская рок-группа, зажигающая сцены своим энергичным звучанием и яркими текстами. Сочетание рока, панка и альтернативы делает нашу музыку уникальной и запоминающейся.</p>
          <p className="paragraph1">Группа активно выступает как в России, так и за ее пределами, завоевывая сердца поклонников с каждым концертом. Погрузитесь в мир "Три дня дождя" и почувствуйте энергию и страсть нашей музыки!</p>
        </div>
      </div>
    </div>
    </section>
  )
}

/* 3 blok */
function Alboms(){
  return (
    <section className="info-alboms" >
      <div className="info-content">
        <h2>АЛЬБОМЫ И СИНГЛЫ</h2>
        <div className="photos-row"> 
          <div className="photo">
            <a href="https://music.yandex.ru/album/9528970" target="_blank" rel="noopener noreferrer">
              <img src="krasota.webp" alt="krasota"/>
            </a>
            <div className="caption">КРАСОТА</div>
            <div className="year">2019</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/10151833" target="_blank" rel="noopener noreferrer">
            <img src="druzia.webp" alt="druzia"/>
            </a>
            <div className="caption">МОИ ДРУЗЬЯ</div>
            <div className="year">2020</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/12327951" target="_blank" rel="noopener noreferrer">
            <img src="privichka.webp" alt="privichka"/>
            </a>
            <div className="caption">ПРИВЫЧКА</div>
            <div className="year">2020</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/13448690" target="_blank" rel="noopener noreferrer">
            <img src="umru.webp" alt="esli umru"/>
            </a>
            <div className="caption">ЕСЛИ Я УМРУ</div>
            <div className="year">2021</div>
          </div>
        </div>
        <div className="photos-row">
          <div className="photo">
            <a href="https://music.yandex.ru/album/13937523" target="_blank" rel="noopener noreferrer">
            <img src="kosmos.webp" alt="kosmos"/>
            </a>
            <div className="caption">КОСМОС</div>
            <div className="feat">feat. Лали</div>
            <div className="year">2021</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/21732123" target="_blank" rel="noopener noreferrer">
            <img src="vidihai.webp" alt="vidihai"/>
            </a>
            <div className="caption">ВЫДЫХАЙ</div>
            <div className="feat">feat. Zivert</div>
            <div className="year">2022</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/24298569" target="_blank" rel="noopener noreferrer">
            <img src="perezimuy.webp" alt="perezimuy"/>
            </a>
            <div className="caption">ПЕРЕЗИМУЮ</div>
            <div className="feat">feat. Наша Таня</div>
            <div className="year">2022</div>
          </div>
          <div className="photo">
            <a href="https://music.yandex.ru/album/27856013" target="_blank" rel="noopener noreferrer">
            <img src="melanholia.webp" alt="melanholia"/>
            </a>
            <div className="caption">MELANCHOLIA</div>
            <div className="year">2023</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 4 blok */
function Video() {
  return (
    <section className="klip">
      <div className="info-content">
        <h2>САМЫЙ ПОПУЛЯРНЫЙ КЛИП</h2>
        <div className="video-wrapper">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/W9RCD7gML8o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}



export default App;


