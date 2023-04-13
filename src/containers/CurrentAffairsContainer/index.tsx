import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import CurrentModal from "./CurrentModal";

const CurrentAffairsContainer = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-12">
      <div
        className={`filter_wrp bg-white p-2 mt-4 sticky top-[10rem] col-span-3`}
      >
        <h2 className="text-2xl font-bold">Filter</h2>
        <div className="filter_tool">
          <div className={`category_wrp`}>
            <label
              onClick={() => {
                setIsOpenCategory(!isOpenCategory);
              }}
              htmlFor="category_checkbox"
              className={`flex gap-1 items-center font-semibold cursor-pointer`}
            >
              Category
              <TfiAngleRight
                className={`${isOpenCategory ? "rotate-90" : ""} text-xs`}
              />
            </label>
            <ul className={`${!isOpenCategory ? "hidden" : "flex flex-col"}`}>
              <li className="flex gap-2">
                <input type="checkbox" />
                Java
              </li>
              <li className="flex gap-2">
                <input type="checkbox" />
                General Studies
              </li>
              <li className="flex gap-2">
                <input type="checkbox" />
                Geo Politics
              </li>
            </ul>
          </div>
          <hr className="my-2" />
          <h3 className="font-semibold">Date Range</h3>
          <div className="date_wrp flex justify-between items-center">
            <div className="w-[48%]">
              <input
                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff4c60] focus:border-[#ff4c60] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff4c60] dark:focus:border-[#ff4c60]"
                type="date"
              />
            </div>
            <div className="w-[48%]">
              <input
                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff4c60] focus:border-[#ff4c60] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff4c60] dark:focus:border-[#ff4c60]"
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <Card
          onClick={handleOpenModal}
          className="max-w-[24rem] overflow-hidden"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="flex gap-2 absolute">
              <Chip variant="gradient" value="10 April 2023" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              UI/UX Review Check
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
          {/* <CardFooter className="flex items-center justify-between">
            <Typography className="font-normal">January 10</Typography>
          </CardFooter> */}
        </Card>
        <CurrentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default CurrentAffairsContainer;
