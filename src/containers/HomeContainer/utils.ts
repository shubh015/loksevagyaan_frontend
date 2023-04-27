import { IconType } from "react-icons";
import { GiBlackBook } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

import { cardData } from "../CoursesCategory/utils";


interface CardData {
    id: number | string;
    experts: string;
    totalCourse: string;
    image: IconType;
  }
  
export const ExpertsData :CardData[] = [
    {
      id: 1,
      image: GiBlackBook,
      totalCourse: "TotalCourses",
      experts: "10k+",
    },
    {
      id: 2,
      image: GiBlackBook,
      totalCourse: "Family",
      experts:"20k+"
    },
    {
      id: 3,
      image: BsPeopleFill,
      totalCourse: "Student Family",
      experts: "30k+"
    },
    
  ];
  