import { ReactNode } from "react";
import { IconType } from "react-icons";
import { GiBlackBook } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

interface CardData {
  id: number | string;
  title: string;
  content: string;
  image: IconType;
}

export const articlesContainerData: CardData[] = [
  {
    id: 1,
    title: "Policy of Subordinate Isolation (1813-1858)",
    content: "example content",
    image: GiBlackBook,
  },
  {
    id: 2,
    title: "Lord Ripon (1880-1884): A well-meaning Governor-General",
    content: "example content",
    image: GiBlackBook,
  },
  {
    id: 3,
    title: "Lord Ripon (1880-1884): A well-meaning Governor-General",
    content: "example content",
    image: GiBlackBook,
  },
  {
    id: 4,
    title: "Lord Ripon (1880-1884): A well-meaning Governor-General",
    content: "example content",
    image: GiBlackBook,
  },
  {
    id: 5,
    title: "Lord Ripon (1880-1884): A well-meaning Governor-General",
    content: "example content",
    image: GiBlackBook,
  },
];

