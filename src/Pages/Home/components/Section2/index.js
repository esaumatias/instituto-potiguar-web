import React, { useEffect, useRef, useState } from "react";

import simbolo from "../../../../Assets/2 - Símbolo.png";

import "./Section2.css";

const Section2 = () => {
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
    <section className="containerSection2">
      <div style={{ flex: 1 }} className="content">
        <div className="containerTextTitle">
          <div className="title">O instituto Potiguar</div>
          <div className="subtitle">Social e Educacional</div>
        </div>

        <div className="containerText">
          <div className="text">
            Investindo no desenvolvimento de uma{" "}
            <strong>educação pública</strong> integral com equidade e de
            qualidade, o Instituto Potiguar realiza iniciativas de apoio e
            fomento educacional. Criador de vias de capacitação e expansão
            humana.
          </div>

          <div className="text">
            Somos <strong>geradores de oportunidades</strong> e caminhos de
            fortalecimento socioeducacional a partir do conhecimento
          </div>
        </div>

        <div style={{ display: "flex", gap: "25px", marginTop: "25px" }}>
          <button className="button">
            <a
              href="https://api.whatsapp.com/send/?phone=5584991854000&text&-type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça a gente
            </a>
          </button>
          <button className="button">
            <a href="#nossas-soluções">Nossas soluções</a>
          </button>
        </div>
      </div>

      <div className="image-container">
        <img
          ref={imageRef}
          src={simbolo}
          alt="simbolo"
          className={visible ? "slide-up" : "animated"}
        />
      </div>
    </section>
  );
};

export default Section2;
