import React from "react";
import CheckIcon from "@mui/icons-material/Check";

import imageLogo from "../../../../Assets/4 - criança.png";

import "./Section4.css";

const list = [
  "Jornadas pedagógicas",
  "Conferências",
  "Formações e capacitações",
  "Busca ativa escolar",
  "Oficinas pedagógicas",
  "Avaliações diagnósticas",
  "Cursos preparatórios",
  "Cursos profissionalizantes",
];

const Section4 = () => {
  return (
    <section className="containerSection4" id="nossas-soluções">
      <div className="containerTitle">
        <div className="title">
          Como enfretamos os desafios em prol da educação pública
        </div>
        <div className="subtitle">
          de qualidade, integral, inclusiva e com equidade
        </div>
      </div>
      <div className="containerContent">
        <div className="containerImage">
          <img src={imageLogo} alt="criança" />
        </div>
        <div className="containerCheckList">
          <div className="title">Nossas soluções</div>
          {list.map((item, idx) => (
            <div key={idx} className="card">
              <CheckIcon
                sx={{
                  backgroundColor: "#02913F",
                  color: "#F6F6F6",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <div>{item}</div>
            </div>
          ))}
          <button className="button">
            <a
              href="https://api.whatsapp.com/send/?phone=5584991854000&text&-type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
