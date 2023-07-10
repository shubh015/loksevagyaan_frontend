import {
  Card,
  Input,
  Dialog,
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import React, { ChangeEvent, useState } from "react";
import { signup } from "@/src/api/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUp = ({
  open,
  handleOpen,
  handleLoginOpen,
}: {
  open: boolean;
  handleOpen: () => void;
  handleLoginOpen: () => void;
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      profile: "",
      confirmPassword: "",
      agreeToTerms: false,
      // file: null, // Add file value to formik initial values
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values: any) => {
      delete values.confirmPassword;
      delete values.agreeToTerms;
      try {
        const res = await signup(values);
        console.log(res);

        handleOpen(); // close the dialog after successful sign up
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <React.Fragment>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none w-11/12 max-w-full"
      >
        <Card className="mx-auto w-full max-w-[28rem] px-2">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-2">
              <Input size="lg" label="Name" {...formik.getFieldProps("name")} />
              {formik.touched.name && formik.errors.name && (
                <Typography color="red" variant="small" className="mt-1">
                  {formik.errors.name}
                </Typography>
              )}
              <Input
                size="lg"
                label="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography color="red" variant="small" className="mt-1">
                  {formik.errors.email}
                </Typography>
              )}
              <Input
                type="password"
                size="lg"
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <Typography color="red" variant="small" className="mt-1">
                  {formik.errors.password}
                </Typography>
              )}
              <Input
                type="password"
                size="lg"
                label="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <Typography color="red" variant="small" className="mt-1">
                    {formik.errors.confirmPassword}
                  </Typography>
                )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept=".jpg, png, jpeg"
                onChange={(e: any) =>
                  formik.setFieldValue("profile", e.target.files[0])
                }
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                JPEG, PNG, or JPG.
              </p>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <button
                onClick={handleLoginOpen}
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </button>
            </Typography>
          </form>
        </Card>
      </Dialog>
    </React.Fragment>
  );
};
