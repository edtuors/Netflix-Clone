import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitileCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Imagem Principal" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Título Principal" className="caption-img" />
          <p>
          The Protector acompanha um jovem que descobre um legado místico e precisa defender sua cidade de forças sombrias. Em meio a segredos e desafios, ele encontra coragem para cumprir seu destino.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Ícone de Reprodução" />
              Reproduzir
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Ícone de Informação" />
              Mais Informações
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Filmes Blockbuster"} category={"top_rated"} />
        <TitleCards title={"Só na Netflix"} category={"popular"} />
        <TitleCards title={"Em Breve"} category={"upcoming"} />
        <TitleCards title={"Principais Escolhas para Você"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
