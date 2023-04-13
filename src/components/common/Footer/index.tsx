import Link from "next/link";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  const linkClassNames = [
    "text-xs md:w-[76%] font-medium mt-4 font-[Poppins] flex items-center",
  ].join(" ");
  const headingClassNames = [
    "text-xl w-[76%] uppercase font-bold mb-4 font-[Poppins]",
  ].join(" ");
  return (
    <footer
      className={`${styles.footer_wrp} text-gray-600 mt-3 bg-white body-font font-[Jost]`}
    >
      <div className="grid md:grid-cols-12 bg-[#f6f6f6] flex-wrap justify-between p-5">
        <div className="col-span-3">
          <div className={`${styles.logo} hover:translate-y-[-2px] font-[Righteous] text-[16px] md:text-[26px] select-none`}>
            <Link href="/">
              <span className="text-xl font-[Righteous] flex gap-1">
                <span className="text-[#4aa1fe] inline-flex items-center justify-center gap-1">
                  <FaBookReader className="inline" /> Lok
                </span>
                Seva Gyaan
              </span>
            </Link>
          </div>
          <p className={`mt-4 ${linkClassNames}`}>
            Browse top class courses by browsing our category section which will
            be more easy for you
          </p>

          <div className="social_icon md:flex hidden gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="__blank"
              className="text-gray-500 hover:translate-y-[-2px]"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="__blank"
              className="text-gray-500 hover:translate-y-[-2px]"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="__blank"
              className="text-gray-500 hover:translate-y-[-2px]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="__blank"
              className="text-gray-500 hover:translate-y-[-2px]"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1484 18.1266H20.775C20.7047 18.7594 20.2828 19.5703 19.2281 19.5703C18.2672 19.5703 17.5734 18.9047 16.9078 17.8922C18.9797 16.2891 20.4094 13.7906 20.4094 10.7203C20.4141 5.2125 15.8812 1.5 11.1094 1.5C6.43594 1.5 1.84219 5.23594 1.84219 10.7203C1.84219 17.0062 7.99687 21.1078 13.5141 19.5797C14.4375 21.1547 15.6562 22.5 17.9766 22.5C21.8109 22.5 22.2328 18.9703 22.1484 18.1266ZM15.4219 15.4313C14.5078 14.0625 13.3734 12.9844 11.1328 12.9844C9.70312 12.9844 8.5875 13.4531 7.89844 14.0531L8.47031 15.1922C8.76094 15.0516 9.07969 15.0047 9.39844 15.0047C11.0625 15.0047 11.9156 16.4484 12.6422 17.8781C12.1734 18.0187 11.6719 18.075 11.1094 18.075C7.59375 18.075 6.07031 15.5906 6.07031 10.7297C6.07031 5.83594 7.59375 3.32812 11.1094 3.32812C14.6812 3.32812 16.2047 5.83594 16.2047 10.7203C16.2094 12.6797 15.9516 14.2641 15.4219 15.4313Z"
                  fill="#6B7280"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className={headingClassNames}>Links</h1>
          <p className={linkClassNames}>Home</p>
          <p className={linkClassNames}>About Us</p>
          <p className={linkClassNames}>Blog</p>
          <p className={linkClassNames}>Latest Articles</p>
        </div>
        <div className="col-span-3">
          <h1 className={headingClassNames}> Top Searches</h1>
          <p className={linkClassNames}>Current Affairs</p>
          <p className={linkClassNames}>Magazines</p>
          <p className={linkClassNames}>Latest Articles</p>
          <p className={linkClassNames}>Blogs</p>
        </div>
        <div className="col-span-3">
          <h1 className={headingClassNames}>Policies</h1>
          <p className={linkClassNames}>Terms and Conditions</p>
          <p className={linkClassNames}>Return and Refund policy</p>
          <p className={linkClassNames}>Privacy Policy</p>
        </div>
      </div>
      <div className="container py-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 ">
          © 2022 Lok Seva Gyaan - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
