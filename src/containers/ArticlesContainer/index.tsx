import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import styles from "./articles.module.scss";
import { articlesContainerData } from "./utils";

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
const ArticlesContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-2 rounded-xl border-white ">
          <h1 className="text-xl w-full capitalize font-bold mb-4 font-[Poppins]">
            Tags:
          </h1>
          <div className="flex-wrap gap-4 flex">
            {tag.map((item) => {
              return <Chip color="blue" value={item.name} key={item.id} />;
            })}
          </div>
        </div>
        <div className="col-span-7 ml-3">
          <div className={styles.articles_wrp}>
            <>
              <div className="flex md:justify-center">
                <h1 className="text-xl w-full uppercase font-bold mb-4 font-[Poppins]">
                  Explore Content By Category
                </h1>
              </div>
            </>
            <div className="card_wrp gap-6 mt-8 flex-wrap justify-center rounded-sm border-2 border-white flex">
              {articlesContainerData.map((item) => {
                return (
                  <Link
                    href={`/article/${item.title}`}
                    className="w-full"
                    key={item.id}
                  >
                    <Card className="w-full bg-[#f6f6f6] flex flex-row">
                      <CardHeader
                        color="blue"
                        className="relative h-16 w-16 mt-0"
                      >
                        <item.image className="h-5/6 w-full" />
                      </CardHeader>
                      <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                          {item.title}
                        </Typography>
                        <Typography>{item.content}</Typography>
                      </CardBody>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h1>Ads</h1>
        </div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
