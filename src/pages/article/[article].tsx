import ArticleContainer from "@/src/containers/ArticleContainer-Del/ArticleContainer";
import { useRouter } from "next/router";
import React from "react";

const Article = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <ArticleContainer />
    </div>
  );
};

export default Article;
