import React from "react";
import Styles from "@/styles/frontend.module.css";
import { ProgressBar1 } from "./progressbar";

function CssStyles() {
  const html = 95;
  const css = 98;
  const javascript = 93;
  const typescript = 85;
  const reactjs = 90;
  const nextjs = 72;
  const vuejs = 85;
  const django = 76;

  return (
    <div className={Styles.containerA}>
      <div className={Styles.sideA}>
        <ul>
          <li>CSS</li>
          <li>SASS</li>
          <li>BootStrap</li>
          <li>Material Ui</li>
          <li>TailWind</li>
          <li>Semantic UI</li>
          <li>Chakra UI</li>
        </ul>
      </div>
      <div className={Styles.sideB}>
        <ProgressBar1 />
        <ProgressBar1 />
        <ProgressBar1 />
        <ProgressBar1 />
        <ProgressBar1 />
        <ProgressBar1 />
      </div>
    </div>
  );
}

export default CssStyles;
