import React, { useEffect, useState } from "react";
import CenterMode from './components/CenterMode';

import "./Section6.css";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Section6 = () => {
  return (
    <section className="containerSection6">
      <div className="containerHeader">
        <div>
          <strong>Veja o que as pessoas têm a dizer</strong> sobre o{" "}
          <span>Instituto Potiguar</span>
        </div>
      </div>
      <div id="app" style={{ marginTop: '50px'}}>

       <CenterMode />
      </div>
    </section>
  );
};

export default Section6;
