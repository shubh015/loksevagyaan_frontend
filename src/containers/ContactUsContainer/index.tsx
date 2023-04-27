import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";

export const ContactUs = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setformData((prevformData) => ({
      ...prevformData,
      [name]: value,
    }));
  };

  return (
    <Card
      color="transparent"
      className="justify-center items-center"
      shadow={false}
    >
      <div className="logo hover:translate-y-[-2px] font-[Righteous] text-[16px] md:text-[26px] select-none">
        <Link href="/">
          <span className="ml-3 text-xl font-[Righteous] flex items-center justify-center gap-1">
            <span className="text-[#4aa1fe] inline-flex items-center justify-center gap-1">
              <FaBookReader className="inline" /> Lok
            </span>
            Seva Gyaan
          </span>
        </Link>
      </div>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details for Contacting Us.
      </Typography>
      <form
        className="mt-8 mb-2 md:w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" onChange={handleChange} />
          <Input size="lg" label="Email" onChange={handleChange} />
          <Input
            type="tel"
            size="lg"
            label="Mobile Number"
            onChange={handleChange}
          />
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
        <Button className="mt-6" fullWidth>
          Contact Us
        </Button>
      </form>
    </Card>
  );
};
