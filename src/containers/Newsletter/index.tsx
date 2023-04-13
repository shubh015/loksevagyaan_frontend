import React from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export const Newsletter = () => {
  return (
    <div className="newsletter_wrp h-60 flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl capitalize font-bold font-[Poppins]">
          Subscribe Newsletter
        </h1>
        <p className="text-xs font-medium font-[Poppins] flex items-center">
          You learn today earn tommorow. The roots of education are bitter but
          the fruits are sweet.
        </p>
        <>
          {/* <Button
            size="lg"
            variant="gradient"
            color="light-blue"
            className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
          >
          
          </Button> */}
          <section className="newsletter_wrp container mx-auto">
            <div className="flex items-center justify-center flex-col bg-white px-2">
              <div className="shadow-md rounded-full overflow-hidden h-[3rem] mt-5 md:w-[30rem] flex">
                <input
                  className="outline-none p-2 flex-1 md:w-[unset] w-full"
                  type="text"
                  name="newsletter"
                  placeholder="abc@email.com"
                  id="newsletter"
                />
                <Button
                  variant="gradient"
                  className="rounded-none bg-[#4aa1fe]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </>
      </div>
    </div>
  );
};
