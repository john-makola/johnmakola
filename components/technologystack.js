import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/technologystack.module.css";
import techStack from "@/images/technologystack.png";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Databases from "./databases";
import CssStyles from "./cssstyles";

function TechnologyStack() {
  return (
    <div className={Styles.techSection}>
      <div className={Styles.title}>
        <h3>TechnologyStack</h3>
        <div className={Styles.imageContainer}>
          <Image
            src={techStack}
            fill
            alt="John Makola"
            className={Styles.image}
          />
        </div>
      </div>
      <div className={Styles.container}>
        <div></div>
        <div className={Styles.containerA}>
          <h5>FrontEnd</h5>
          <FrontEnd />
        </div>
        <div className={Styles.containerA}>
          <h5>Databases</h5>
          <Databases />
        </div>
      </div>
      <div className={Styles.container}>
        <div></div>
        <div className={Styles.containerA}>
          <h5>Backend Stacks</h5>
          <BackEnd />
        </div>
        <div className={Styles.containerA}>
          <h5>CSS Frameworks</h5>
          <CssStyles />
        </div>
      </div>
    </div>
  );
}

export default TechnologyStack;
