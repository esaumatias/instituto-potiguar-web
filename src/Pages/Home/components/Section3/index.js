import React, { useEffect, useRef, useState } from "react";

import impacto1 from "../../../../Assets/3 - impacto 1.png";
import impacto2 from "../../../../Assets/3 - impacto 2.png";
import impacto3 from "../../../../Assets/3 - impacto 3.png";

import "./Section3.css";

const data = [
  {
    image: impacto1,
    value: "+200",
    text: "Pessoas em processo de alfabetização e letramento",
  },
  {
    image: impacto2,
    value: "+200",
    text: "Profissionais preparados para os desafios da educação",
  },
  {
    image: impacto3,
    value: "+200",
    text: "Alunos em formação interdisciplinar",
  },
];

const Section3 = () => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = imageRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      if (!visible && scrollTop + windowHeight >= offsetTop) {
        setVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <div className="container">
      <section className="containerSection3">
        <div style={{ flex: 1 }} className="titleSection">
          Veja o <span>impacto</span> que o nosso trabalho já causou
        </div>
        <div className="containerCards">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={visible ? "card slide-up" : "card animated"}
              ref={imageRef}
            >
              <img src={item.image} alt="imagem do card" />
              <div className="title">{item.value}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section3;
