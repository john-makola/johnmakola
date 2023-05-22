import React from "react";
import Styles from "@/styles/skillset.module.css";

function SkillSet() {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerA}>
        <p>I can help you with:</p>
      </div>
      <div className={Styles.title}>Designs</div>
      <div className={Styles.containerA}>
        <ul>
          <li>Ideation and Product Designs</li>
          <li>Creative UI/UX</li>
          <li>Web adn Mobile Apps Mock-Ups</li>
          <li>Profesional Powerpoint Presentation</li>
          <li>Software Requirements Inputs</li>
        </ul>
      </div>
      <div className={Styles.title}>Development</div>
      <div className={Styles.containerA}>
        <ul>
          <li>Web Site Development</li>
          <li>Application Development</li>
          <li>FrontEnd and BackEnd Coding</li>
          <li>Building and Intergrating APIs</li>
          <li>Testing and Documentation</li>
        </ul>
      </div>
      <div className={Styles.title}>Apps Deployment</div>
      <div className={Styles.containerA}>
        <ul>
          <li>Web App Deploment</li>
          <li>Azure</li>
          <li>AWS</li>
          <li>Google</li>
          <li>C-PANEL</li>
        </ul>
      </div>
      <div className={Styles.title}>Research and Analytics</div>
      <div className={Styles.containerA}>
        <ul>
          <li>IT System Infrastructure Designs</li>
          <li>Apps Development</li>
          <li>Business Processes Optimization</li>
          <li>System Security Intrusion Prevention</li>
          <li>Artificial Intelligence</li>
          <li>Data Strutures </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillSet;
