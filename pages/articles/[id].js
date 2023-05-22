import React, { useEffect, useState } from "react";
import { ArticleData } from "@/articles/articlesdata";
import ArticleComponentWrapper from "@/components/articlescomponentwrapper";

export async function getStaticPaths() {
  const paths = ArticleData.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
}

export default function Article({ article }) {
  const [data, setData] = useState(article);

  useEffect(() => {
    async function fetchData() {
      setData(article);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ArticleComponentWrapper>
        <h1>{data.title}</h1>
        {data.body.map((paragraph ,index) =>
            <p key={index.id}>
              {paragraph.length > 50 ? paragraph : <h4>{paragraph}</h4>}
            </p>
       
        )}
        <br />
      </ArticleComponentWrapper>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const article = ArticleData.find(
    (article) => article.id === parseInt(params.id)
  );

  return {
    props: {
      article,
    },
  };
}
