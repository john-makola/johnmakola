import { ArticleData } from "@/articles/articlesdata";

export default (req, res) => {
  res.status(200).json(JSON.stringify(ArticleData));
};
