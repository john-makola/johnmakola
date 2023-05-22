import React from "react";
import Styles from "@/styles/frontend.module.css";
import { ProgressBar2 } from "./progressbar";

function Databases() {
  return (
    <div className={Styles.containerA}>
      <div className={Styles.sideA}>
        <ul>
          <li>SQL</li>
          <li>MS-SQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>POSTGRESQL</li>
        </ul>
      </div>
      <div className={Styles.sideB}>
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
        <ProgressBar2 />
 
      </div>
    </div>
  );
}

export default Databases;
