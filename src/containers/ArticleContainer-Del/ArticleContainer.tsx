import React from "react";
import { Card, Checkbox, Chip, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import styles from "./ArticleContainer.module.scss";

const tag = [
  {
    id: 1,
    name: "History",
  },
  {
    id: 2,
    name: "History",
  },
  {
    id: 3,
    name: "History",
  },
  {
    id: 4,
    name: "History",
  },
  {
    id: 5,
    name: "History",
  },
];

const ArticleContainer = () => {
  return (
    <div className={`font-[Poppins] ${styles.ArticleContainer_wrp}`}>
      <div className="md:grid md:grid-cols-12 flex-wrap flex">
        <div className="col-span-9 p-2">
          <Card className="px-14 py-5 font-[Poppins]">
            <span className="border-4 block border-[#4aa1fe] mb-3"></span>
            <Fragment>
              <Typography variant="h2" color="black" className="break-all ">
                Extra Judicial Killings
              </Typography>
              <div className="flex border-2 gap-4 rounded-xl border-white ">
                <span className="text-lg capitalize font-bold font-[Poppins]">
                  Tags:
                </span>
                <div className="flex-wrap gap-4 flex">
                  {tag.map((item) => {
                    return (
                      <Chip color="blue" value={item.name} key={item.id} />
                    );
                  })}
                </div>
              </div>
              <Card className="bg-[#f6f6f6] px-14 py-5 mt-5 font-[Poppins]">
                <Typography variant="h4" color="blue-gray">
                  What is the National Commission for Protection of Child
                  Rights?
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="mt-3 font-normal"
                >
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </Typography>
              </Card>

              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Because it&apos;s about motivating the doers. Because I&apos;m
                here to follow my dreams and inspire others.
              </Typography>

              <Typography variant="h4" color="blue-gray">
                What are the Guidelines?
              </Typography>
              <Typography
                variant="lead"
                color="#474747"
                className="mt-3 font-normal font-[Poppins]"
              >
                Child suspects should be assessed by a team of experts,
                including a child psychologist or psychiatrist, a medical
                doctor, and a social worker. The assessment should take into
                account the childs age, developmental stage, and maturity level,
                as well as any history of trauma or abuse. The team should also
                consider the childs cognitive abilities and capacity to
                understand the charges against them. The child suspects will be
                provided with legal aid and support from child welfare agencies.
                The Juvenile Justice Board (JJB) will be responsible for
                conducting a preliminary assessment of the child suspect.
              </Typography>

              <ul className="font-[Poppins] pl-12 mt-3 leading-7">
                <li>
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design.
                </li>
                <li>
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design.
                </li>
                <li>
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design. .
                </li>
                <li>
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design.
                </li>
                <li>
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design.
                </li>
              </ul>
              <Card className="px-14 py-5 font-[Poppins]">
                <Typography variant="h4" color="blue-gray">
                  What is the National Commission for Protection of Child
                  Rights?
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Because it&apos;s about motivating the doers. Because I&apos;m
                  here to follow my dreams and inspire others.
                </Typography>
              </Card>
            </Fragment>
          </Card>

          <Card className="bg-[#f6f6f6] px-14 py-5 mt-3 font-[Poppins]">
            <Typography variant="h3" color="black">
              MCQs:
            </Typography>
            <div>
              <ul className="font-[Poppins]">
                <li>
                  What is the National Commission for Protection of Child
                  Rights?
                </li>
              </ul>
              <div className="flex flex-col">
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <Typography variant="h4" color="blue-gray">
                    What is the National Commission for Protection of Child
                    Rights?
                  </Typography>
                </li>
              </ul>
              <div className="flex flex-col">
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
                <Checkbox
                  id="ripple-on"
                  label="Ripple Effect On"
                  ripple={true}
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-3">Ads</div>
      </div>
    </div>
  );
};

export default ArticleContainer;
