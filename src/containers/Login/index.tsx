import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { SignUp } from "../SignUp";

export const Login = () => {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleOpen = () => {
    setOpen((cur) => !cur);
    setSignUpOpen(false);
  };

  const handleSignUpOpen = () => {
    setOpen(false);
    setSignUpOpen((cur) => !cur);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="rounded-full">
        Sign In
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none w-11/12 max-w-full"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleSignUpOpen}
              >
                SignUp
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
      <SignUp
        open={signUpOpen}
        handleOpen={handleSignUpOpen}
        handleLoginOpen={handleOpen}
      />
    </React.Fragment>
  );
};
