import React from "react";
import Styles from "@/styles/frontend.module.css";
import { ProgressBar1 } from "./progressbar";

function FrontEnd() {
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
          <li>Html</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.Js</li>
          <li>Next.Js</li>
          <li>Vue.Js</li>
          <li>React Native</li>
          <li>DJANGO</li>
        </ul>
      </div>
      <div className={Styles.sideB}>
        <ProgressBar1 />
        <ProgressBar1 />
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

export default FrontEnd;
