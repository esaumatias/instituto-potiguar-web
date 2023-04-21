import React from "react";
import { AuthorizedLayout } from "../../Components/AuthorizedLayout/index";

import backgrounImage from "../../Assets/1 - juntos somos mais fortes.png";
import buttonSetaBottom from "../../Assets/1 - ícone.png";

import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

import "./Home.css";

const Home = () => {
  return (
    <AuthorizedLayout>
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
      <div className="lineDIvision"/>
      <Section3 />
      <Section4 />
    </AuthorizedLayout>
  );
};

export default Home;
