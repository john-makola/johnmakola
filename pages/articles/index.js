import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/articlecomponent.module.css";
import John from "@/images/johnmakola.jpg";

import { ArticleData } from "../../articles/articlesdata";

function Articles() {
  return (
    <div className={Styles.container}>
      <div className={Styles.column1}>
        <div className={Styles.imageContainer}>
          <Image src={John} fill alt="John Makola" className={Styles.image} />
          <hr />
        </div>
        {ArticleData.map((article) => (
          <ul key={article.id}>
            <Link href={`articles/${article.id}`} passHref>
              <li>{article.title}</li>
              <hr />
            </Link>
          </ul>
        ))}
      </div>
      <div className={Styles.column2}>
        {ArticleData.map((article) => (
          <div className={Styles.grid}>
            <div className={Styles.card} key={article.id}>
              <h4>{article.title}</h4>           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;




