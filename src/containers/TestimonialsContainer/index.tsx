import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineStar } from "react-icons/ai";
import { testimonialsData } from "./utils";

const TestimonialsContainer = () => {
  return (
    <div className="testimonial_wrp mt-4">
      <div className="flex justify-between">
        <div className="flex justify-between">
          <h1 className="capitalize text-xl w-[76%] font-bold mb-4 font-[Poppins]">
            What our students saying about us
          </h1>
        </div>
        <div className="">
          <p className="text-xs w-[76%] font-medium mb-4 font-[Poppins] flex items-center">
            When potential customers are researching you online, they are
            getting to know you through the content on your website. So
            understandably, many of them might be skeptical or hesitant to trust
            you right away.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 flex-wrap justify-center ">
        {testimonialsData.map((item) => {
          return (
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem] px-5 py-5 shadow-lg"
              key={item.id}
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="candice wu"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Candice Wu
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <AiOutlineStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                    </div>
                  </div>
                  <Typography color="blue-gray">
                    Frontend Lead @ Google
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsContainer;
