import React from "react";
import styles from "./CourseCategory.module.scss"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { cardData, articlesData } from "./utils";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

interface CourseProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}
export const CourseCategory = ({ src, alt, height, width }: CourseProps) => {
  return (
    <div className={styles.courseCategory_wrp}>
      <>
        <div className="flex md:justify-center">
          <h1 className="text-xl w-[76%] uppercase font-bold mb-4 font-[Poppins]">
            Explore Courses By Category
          </h1>
        </div>
        <div className="flex md:justify-between w-[97%] justify-center flex-wrap">
          <p className="text-xs w-[76%] font-medium mb-4 font-[Poppins] flex items-center">
            Browse top class courses by browsing our category section which will
            be more easy for you
          </p>
          <Button className="rounded-full">Browse</Button>
        </div>
      </>
      <div className="card_wrp gap-6 grid md:grid-cols-3 mt-8 flex-wrap justify-center">
        {cardData.map((item) => {
          return (
            <Card className="w-[70%] flex flex-row" key={item.id}>
              <CardHeader color="blue" className="relative h-20 w-24 mt-0">
                <item.image className="h-[98%] w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {item.title}
                </Typography>
                <Typography>{item.content}</Typography>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <div className="articles_wrp mt-4">
        <div>
          <div className="flex">
            <h1 className="text-xl w-full uppercase font-bold mb-4 font-[Poppins]">
              Recent Articles
            </h1>
          </div>
          <div className="flex md:justify-between w-[97%] flex-wrap justify-center">
            <p className="text-xs w-[76%] font-medium mb-4 font-[Poppins] flex items-center">
              Browse articles which are trending in news
            </p>
            <Button className="rounded-full">Browse</Button>
          </div>
        </div>
        <div className="card_wrp gap-6 grid md:grid-cols-4 flex-wrap mt-8 h-4/5">
          {articlesData.map((item) => {
            return (
              <Card className="max-w-[24rem] overflow-hidden" key={item.id}>
                <CardHeader color="blue" className="relative h-56">
                  <Image
                    src={item.images}
                    alt="ui/ux review check"
                    height={400}
                    width={400}
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h4" color="blue-gray">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 font-normal font-[Poppins] text-sm"
                  >
                    {item.content}
                  </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                    <Tooltip content="Candice Wu">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  </div>
                  <Typography className="font-normal">January 10</Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                    5.0
                  </Typography>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
