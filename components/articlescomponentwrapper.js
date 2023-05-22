import React, { useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/articlecomponent.module.css";
import John from "@/images/johnmakola.jpg";
import { ArticleData } from "@/articles/articlesdata";

function ArticleComponentWrapper({ children }) {

  return (
    <div className={Styles.container}>
      <div className={Styles.column1}>
        <div className={Styles.imageContainer}>
          <Image src={John} fill alt="John Makola" className={Styles.image} />
          <hr />
        </div>
        {ArticleData.map((article , index) => (
          <ul key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <li>{article.title}</li>
              <hr />
            </Link>
          </ul>
        ))}
      </div>
      <div className={Styles.column2}>{children}</div>
    </div>
  );
}

export default ArticleComponentWrapper;
