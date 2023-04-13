import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { GiBlackBook } from "react-icons/gi";
import { CourseCategory } from "../CoursesCategory";
import TestimonialsContainer from "../TestimonialsContainer";
import { Newsletter } from "../Newsletter";
import styles from "./Home.module.scss";
import { ExpertsData } from "./utils";

interface HomeContainerProps {
  classNames?: string;
}
export const HomeContainer: React.FC<HomeContainerProps> = ({ classNames }) => {
  const courseClassNames = ["h-11 w-11 bg-white rounded-sm items-center"].join(
    " "
  );
  return (
    <div className={`px-6 md:px-10 ${styles.hero_wrp}`}>
      <div className="flex md:flex-row flex-col-reverse">
        <div className="w-full flex-col flex justify-center">
          <h1 className="md:text-3xl text-sm w-[97%] uppercase font-bold mb-4 font-[Poppins]">
            Getting Quality Content For All Government Exams Is now More Easy
          </h1>
          <p className="text-xs w-[97%] font-medium font-[Poppins]">
            Start Your Journey With Free Videos, Test Series, Quizzes, Notes, &
            Information About Government Exams
          </p>
          <div className="gap-4 flex mt-5 md:justify-start md:gap-4 justify-center">
            <Button className="rounded-full">Get Started</Button>
            <Button className="rounded-full">Get Free</Button>
          </div>
        </div>
        <div className="justify-center items-center md:flex flex">
          <Image
            src={"/assets/hero.png"}
            height={500}
            width={500}
            alt={"icon"}
          />
        </div>
      </div>
      <div className="flex w-full justify-between mt-5 items-center bg-[#f6f6f6] px-3 mb-5 flex-wrap">
        {ExpertsData.map((item) => {
          return (
            <div
              key={item.id}
              className={`${styles.course_wrp} flex justify-center rounded-sm text-center h-24 gap-64 items-center`}
            >
              <div className="flex">
                <div className={courseClassNames}>
                  <item.image className="h-full w-full" />
                </div>

                <div className="">
                  <h1 className="">{item.experts}</h1>
                  <h1>{item.totalCourse}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* course section started */}
      <div className="">
        <CourseCategory src={""} alt={""} height={0} width={0} />
      </div>
      <div className="">
        <TestimonialsContainer />
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};
