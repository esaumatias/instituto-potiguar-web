import React from "react";
import { AuthorizedLayout } from "../../Components/AuthorizedLayout/index";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import backgrounImage from "../../Assets/1 - juntos somos mais fortes.png";
import buttonSetaBottom from "../../Assets/1 - ícone.png";
import Logo from "../../Assets/LogoWhats.png";

import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

import "./Home.css";

const Home = () => {
  return (
    <AuthorizedLayout>
      <FloatingWhatsApp
        phoneNumber="+5584991854000"
        chatMessage="Olá! Obrigado por visitar o nosso site. Como podemos ajudar você hoje?"
        accountName="Instituto Potiguar"
        avatar={Logo}
        placeholder="Enviar mensagem"
        statusMessage="Juntos pela educação, somos mais fortes!"
        // size="60"
      />

      <div className="lineDIvision" />
      <div className="containerPageInitial">
        <img
          src={backgrounImage}
          alt="imagem juntos somos mais fortes"
          className="backgounImage"
        />
        <div className="containerTextPrincipal">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="titleHeader">Juntos pela educação</div>
            <div className="subtitleHeader">somos mais fortes!</div>
          </div>
          <div>
            <button className="buttonHeader">
              <img src={buttonSetaBottom} alt="" />
            </button>
          </div>
        </div>
      </div>
      <Section2 />
      <div className="lineDIvision" />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </AuthorizedLayout>
  );
};

export default Home;
