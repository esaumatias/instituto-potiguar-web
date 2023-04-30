import React from "react";
import { ReactSVG } from "react-svg";

import Logo from "../../../../Assets/Logo.png";
import insta from "../../../../Assets/icons8-instagram.svg";
import whats from "../../../../Assets/icons8-whatsapp.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <section className="containerFooter">
      <div className="containerCar">
        <div className="card">
          <img src={Logo} alt="Logo Instituto Potiguar" />
          <div className="texto">Copyright © 2023</div>
          <div className="texto">Todos os direitos reservados</div>
          <div className="texto">CNPJ: 17.837.958/0001-34</div>
          <div className="texto">Vera Cruz/RN</div>
        </div>
        <div className="card">
          <div className="title">LOCALIZAÇÃO</div>
          <div className="title2">Sede Estatutária</div>
          <div className="texto">
            Rua Luiz Lopes, 422, Centro, CEP: 59.184-000, Vera Cruz, Rio Grande
            do Norte.
          </div>
          <div className="title2">Sede Natal</div>
          <div className="texto">
            Avenida Amintas Barros, 3700, Corporate Tower Center, sala 1609,
            CEP: 59.075-810, Natal, Rio Grande do Norte.
          </div>
        </div>
        <div className="card">
          <div className="title">FALE CONOSCO</div>
          <div className="texto">potiguarinstituto@gmail.com</div>
          <div className="texto">(84) 99185-4000 (whatsapp)</div>
          <div className="title" style={{ marginTop: "20px" }}>
            HORÁRIO DE FUNCIONAMENTO
          </div>
          <div className="texto">De segunda à sexta das 8h00 às 18h00</div>
          <div className="containerIconSOcial" style={{ marginTop: '10px'}}>
            <div style={{ backgroundColor: '#047A40'}}>
              <a
                href="https://api.whatsapp.com/send/?phone=5584991854000&text&-type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG src={whats} />
              </a>
            </div>

            <div style={{ backgroundColor: '#047A40'}}>
              <a
                href="https://www.instagram.com/institutopotiguar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG src={insta} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
