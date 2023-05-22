import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/pagecomponent.module.css";
import John from "@/images/johnmakola.jpg";

function PageComponent({children}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.column1}>
        <div className={Styles.imageContainer}>
          <Image src={John} fill alt="John Makola" className={Styles.image} />
          <hr />
        </div>
        <ul>
          <Link href="/">
            <li>About me</li>
            <hr />
          </Link>
          <Link href="/">
            <li>Skill Set</li>
            <hr />
          </Link>
          <Link href="/">
            <li>Projects</li>
            <hr />
          </Link>
          <Link href="/">
            <li>Get In Touch</li>
            <hr />
          </Link>
          <Link href="/">
            <li>Articles</li>
            <hr />
          </Link>
        </ul>
      </div>
      <div className={Styles.column2}>{children}</div>
    </div>
  );
}

export default PageComponent;
