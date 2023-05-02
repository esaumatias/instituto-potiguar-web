import React from "react";

import imageTop from "../../../../Assets/NOVO - parceiros.png";
import parceiro1 from "../../../../Assets/5 - parceiro 1.png";
import parceiro2 from "../../../../Assets/5 - parceiro 2.png";

import "./Section5.css";

const Section5 = () => {
  return (
    <>
      <div className="lineGreen" />
      <section className="containerSection5">
        <div className="containerHeader">
          <img src={imageTop} alt="titulo" />
          <div className="texto">
            <div className="title">Conheça alguns de nossos parceiros</div>
            <div className="subtitle">e faça parte dessa luta conosco!</div>
          </div>
        </div>
        <div className="containerParceiros">
          <div>
            <img src={parceiro1} alt="logo prefeitura Santa Maria" className="santaMaria"/>
          </div>
          <div>
            <img src={parceiro2} alt="logo Prefeitura Angicos" className="angicos"/>
          </div>
        </div>
        <a
          className="button"
          href="https://api.whatsapp.com/send/?phone=5584991854000&text&-type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >Quero ser parceiro</a>
      </section>
    </>
  );
};

export default Section5;
