import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { useGesture } from "react-use-gesture";

import izabel from "./../../../../../Assets/6 - depoimento centro.png";
import heloiza from "./../../../../../Assets/6 - depoimento esquerda.png";
import barbara from "./../../../../../Assets/6 - depoimento direita.png";

import "./CenterMode.css";

function CenterMode() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const bind = useGesture({
    onDrag: ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (down && distance > 10) {
        cancel(setGoToSlide(goToSlide + (xDir > 0 ? -1 : 1)));
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        if (goToSlide === 2) {
          setGoToSlide(0);
        } else {
          setGoToSlide(goToSlide + 1);
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [goToSlide, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slides = [
    {
      key: 1,
      content: (
        <button
          className="cardSection6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...bind()}
        >
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
        </button>
      ),
    },
    {
      key: 2,
      content: (
        <button
          className="cardSection6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...bind()}
        >
          <img src={heloiza} alt="izabel" />
          <div className="text">
            Fazer parte da assistência jurídica do Instituto potiguar, que nos
            leva a um o olhar além do "juridiques" das normas, leis e editais,
            nos faz olhar de forma humanizada para educação , ver e poder fazer
            parte dessa história e na história da educação dos nosso municípios
            parceiros, é gratificante.
          </div>
          <div className="containerName">
            <div className="title">HELOIZA PAJEU</div>
            <div className="subtitle">Conselheira Fiscal</div>
          </div>
        </button>
      ),
    },
    {
      key: 3,
      content: (
        <button
          className="cardSection6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...bind()}
        >
          <img src={barbara} alt="izabel" />
          <div className="text">
            Integrar a equipe de comunicação do Instituto Potiguar é sobre estar
            em um lugar de muito aprendizado. Trabalhar gerando ideias e
            fortalecendo projetos sociais e educacionais, poder fazer a
            diferença como profissional e cidadã e ter as melhores oportunidades
            de realizar bons projetos junto ao Instituto Potiguar.
          </div>
          <div className="containerName">
            <div className="title">BÁRBARA FREIRE</div>
            <div className="subtitle">Gerente de comunicação e mídiasa</div>
          </div>
        </button>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={3}
        showNavigation={false}
        swipeable={true}
      />
    </div>
  );
}

export default CenterMode;
