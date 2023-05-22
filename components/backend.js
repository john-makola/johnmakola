import React from "react";
import Styles from "@/styles/frontend.module.css";
import { ProgressBar2 } from "./progressbar";

function BackEnd() {
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
          <li>NodeJs</li>
          <li>Java</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>ExpressJs</li>
          <li>Next.Js</li>
          <li>GraphQl</li>
          <li>Apollo Server</li>
        </ul>
      </div>
      <div className={Styles.sideB}>
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
      </div>
    </div>
  );
}

export default BackEnd;
