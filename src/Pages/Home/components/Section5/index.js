import React from "react";

import imageTop from "../../../../Assets/5 - parceiros.png";
import parceiro1 from "../../../../Assets/5 - parceiro 1.png";
import parceiro2 from "../../../../Assets/5 - parceiro 2.png";

import "./Section5.css";

const Section5 = () => {
  return (
    <>
      <div className="lineGreen" />
      <section className="containerSection5">
        <img src={imageTop} alt="titulo" />
        <div className="containerParceiros">
          <div>
            <img src={parceiro1} alt="logo prefeitura Santa Maria" className="santaMaria"/>
          </div>
          <div>
            <img src={parceiro2} alt="logo Prefeitura Angicos" className="angicos"/>
          </div>
        </div>
        <button className="button">Quero ser parceiro</button>
      </section>
    </>
  );
};

export default Section5;
