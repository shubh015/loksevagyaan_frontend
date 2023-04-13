import { ReactNode } from "react";
import { IconType } from "react-icons";
import { GiEarthAfricaEurope } from "react-icons/gi";

interface CardData {
  id: number | string;
  title: string;
  content: string;
  image: IconType;
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: "History",
    content: "example content",
    image: GiEarthAfricaEurope,
  },
  {
    id: 2,
    title: "Geography",
    content: "example content",
    image: GiEarthAfricaEurope,
  },
  {
    id: 3,
    title: "Polity",
    content: "example content",
    image: GiEarthAfricaEurope,
  },
  {
    id: 4,
    title: "Economics",
    content: "example content",
    image: GiEarthAfricaEurope,
  },
  {
    id: 5,
    title: "Polity",
    content: "example content",
    image: GiEarthAfricaEurope,
  },
];

export const articlesData = [
  {
    id: 1,
    title: "History",
    content:
      "With our source array and list element above, we can return an array access.",
    images: "/assets/example.jpg",
  },
  {
    id: 2,
    title: "Geography",
    content:
      "With our source array and list element above, we can return an array access.",
    images: "/assets/example.jpg",
  },
  {
    id: 3,
    title: "Polity",
    content:
      "With our source array and list element above, we can return an array access. .   ",
    images: "/assets/example.jpg",
  },
  {
    id: 4,
    title: "Economics",
    content:
      " With our source array and list element above, we can return an array of access.    ",
    images: "/assets/example.jpg",
  },
];
