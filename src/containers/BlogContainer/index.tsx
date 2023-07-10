import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import Marquee from "react-marquee-master";
import styles from "./blog.module.scss";
import { GiEarthAfricaEurope } from "react-icons/gi";

const blogCategory = [
  {
    id: 1,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    image: GiEarthAfricaEurope,
  },
  {
    id: 2,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    image: GiEarthAfricaEurope,
  },
  {
    id: 3,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    image: GiEarthAfricaEurope,
  },
  {
    id: 4,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    image: GiEarthAfricaEurope,
  },
];

const BlogContainer = () => {
  const [readingTime, setReadingTime] = useState(0);
  const [isFullTextDisplayed, setisFullTextDisplayed] = useState(false);

  const handleButton = () => {
    setisFullTextDisplayed(true);
  };
  useEffect(() => {
    const wordsPerMinute = 200;
    const text = document.getElementById("read-blog")?.innerText;
    const wordCount = text?.split(/\s+/).length;
    const time = Math.ceil((wordCount as number) / wordsPerMinute);
    setReadingTime(time);
  }, []);

  return (
    <div className="blog_wrp font-[Poppins]">
      <div className="flex flex-wrap-reverse md:grid md:grid-cols-12">
        <div className="md:col-span-3 w-full border-solid rounded-lg ">
         
      <Card className="z-30 w-96 ">
          <p className="text-lg mr-6 text-center mb-11">Latest Blogs</p>
            <Marquee
              marqueeItemClassName="px-4 py-3 flex"
              height={400}
              marqueeItems={blogCategory.map((item) => {
                return (
                  <Card key={item.id} className="mt-5 flex">
                    <item.image className="" />
                    <p className="font-[Poppins] text-lg px-2 py-2">
                      {item.content}
                    </p>
                  </Card>
                );
              })}
            />
          </Card>
        </div>
        <div className="col-sapn-2"></div>
        <div className="col-span-7">
          <div className="blog-header flex justify-between">
            <img src="" alt="ui/ux review check" />
            <div className="">
              <p className="text-lg mr-6">{readingTime} minute read</p>
              <></>
            </div>
          </div>
          <Card className="max-w-[46rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>

              <p
                id="read-blog"
                className={`mt-3 font-normal ${
                  isFullTextDisplayed ? "" : styles.showLess
                }`}
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
                section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
                are also reproduced in their exact original form, accompanied by
                English versions from the 1914 translation by H. Rackham.
              </p>
              {!isFullTextDisplayed && (
                <span className="text-red-500" onClick={handleButton}>
                  Read More
                </span>
              )}
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
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
