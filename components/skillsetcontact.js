import React from "react";
import Styles from "@/styles/skillsetcontact.module.css";
import BackEnd from "./backend";
import ContactMe from "./contactme";
import CssStyles from "./cssstyles";
import SkillSet from "./skillset";

function SkillSetContact() {
  return (
    <div className={Styles.techSection}>
      <div className={Styles.container}>
        <div></div>
        <div className={Styles.containerA}>
          <h3>Skill Set</h3>
          <SkillSet />
        </div>
        <div className={Styles.containerB}>
          <h3>Contact Me</h3>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default SkillSetContact;
