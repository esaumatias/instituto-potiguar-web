import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "react-spring-3d-carousel";

import izabel from './../../../../../Assets/6 - depoimento centro.png';
import heloiza from './../../../../../Assets/6 - depoimento esquerda.png';
import barbara from './../../../../../Assets/6 - depoimento direita.png';

import "./CenterMode.css";

function CenterMode() {
  const [autoplay, setAutoplay] = useState(true);
  const [goToSlide, setGoToSlide] = useState(0);
  const slides = [
    {
      key: 1,
      content: (
        <div className="cardSection6">
          <img src={izabel} alt="izabel" />
          <div className="text">
            Sou Ana Izabel Hister, palestrante, professora de sociologia,
            pedagoga e terapeuta integrativa. No instituto estou a frente da
            parte pedagógica e da gestão de pessoas focada no desenvolvimento
            emocional, pessoal e institucional. Para mim é uma honra estar
            somando ness equipe tão qualificada e preocupada com a educação,
            nossa missão é quebrar barreiras, repensando a educação com um novo
            olhar.
          </div>
          <div className="containerName">
            <div className="title">IZABEL HISTER</div>
            <div className="subtitle">Coordenadora Pedagógica</div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="cardSection6">
          <img src={heloiza} alt="izabel" />
          <div className="text">
          Fazer parte da assistência jurídica do Instituto potiguar, que nos leva a um o olhar além do "juridiques"
das normas, leis e editais, nos faz olhar de forma humanizada para educação , ver e poder fazer parte
dessa história e na história da educação dos nosso municípios parceiros, é gratificante.
          </div>
          <div className="containerName">
            <div className="title">HELOIZA PAJEU</div>
            <div className="subtitle">Conselheira Fiscal</div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="cardSection6">
          <img src={barbara} alt="izabel" />
          <div className="text">
          Integrar a equipe de comunicação do Instituto Potiguar é sobre estar em um lugar de muito aprendizado.
Trabalhar gerando ideias e fortalecendo projetos sociais e educacionais, poder fazer a diferença como profissional e cidadã e ter as melhores oportunidades de
realizar bons projetos junto ao Instituto Potiguar.
          </div>
          <div className="containerName">
            <div className="title">BÁRBARA FREIRE</div>
            <div className="subtitle">Gerente de comunicação e mídiasa</div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (goToSlide === 3) {
        setGoToSlide(0);
      } else {
        setGoToSlide(goToSlide + 1);
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, [goToSlide]);
  
  

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        // animationConfig={config.gentle}
        offsetRadius={3}
        showNavigation={false}
      />
    </div>
  );
}

export default CenterMode;
