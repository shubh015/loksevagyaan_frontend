import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { FaFacebookF, FaTwitter, FaInstagram, FaSistrix } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaBookReader } from "react-icons/fa";
import { Login } from "@/src/containers/Login";
// import Login from '../../../containers/Login'
// import SearchSection from "../../ui_components/SearchSection";
interface headerProps {
  className?: string
}
const Header: React.FC<headerProps> = () => {
  const router = useRouter();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const isOpenNav = () => {
    document.getElementById("nav")?.classList.toggle(styles.active_mobile_nav);
  };

  return (
    <header className={`${styles.header_wrp} md:bg-slate-100 mb-4 pb-2`}>
      <div className="top flex justify-between items-center container mx-auto h-24">
        <div
          id={styles.menu_mobile_trigger}
          onClick={isOpenNav}
          className="md:hidden block cursor-pointer"
        >
          <HiMenuAlt1 className="text-xl" />
        </div>

        {/* <div className="social_icon md:flex hidden gap-4">
          <FaFacebookF className="text-blue-600 text-xl hover:translate-y-[-2px]" />
          <FaTwitter className="text-blue-400 text-xl hover:translate-y-[-2px]" />
          <FaInstagram className="text-pink-400 text-xl hover:translate-y-[-2px]" />
        </div> */}
{/* 
        <div className="social_icon md:flex hidden gap-3">
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
        </div> */}

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
        <div className="flex gap-4">
          {/* <div
            className="search_btn hover:translate-y-[-2px] rounded-full h-8 w-8 bg-[#4aa1fe] text-white grid place-items-center cursor-pointer"
            onClick={() => {
              setIsOpenSearch(!isOpenSearch);
            }}
          >
            <FaSistrix className="text-xl" />
          </div> */}
          {/* <Link onClick={isOpenNav} href="/login">
            Login
          </Link> */}
          <Login/>
        </div>
      </div>
      <div className={styles.down}>
        <nav
          id="nav"
          className={`md:flex md:max-w-[42rem] md:mx-auto shadow-lg bg-white font-[Poppins]`}
        >
          <div
            className={`${styles.nav_item} ${
              router.pathname === "/" ? styles.active0 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/">
              Home
            </Link>
          </div>

          <div
            className={`${styles.nav_item} ${
              router.pathname === "/about" ? styles.active1 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/about">
              About Us
            </Link>
          </div>

          <div
            className={`${styles.nav_item} ${
              router.pathname === "/contact" ? styles.active2 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/contact">
              Contact Us
            </Link>
          </div>

          <div
            className={`${styles.nav_item} ${
              router.pathname === "/current" ? styles.active3 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/current">
              Current Affairs
            </Link>
          </div>

          <div
            className={`${styles.nav_item} ${
              router.pathname === "/blogs" ? styles.active4 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/blogs">
              Blogs
            </Link>
          </div>

          <div
            className={`${styles.nav_item} ${
              router.pathname === "/learning" ? styles.active5 : ""
            }`}
          >
            <span className="flex justify-center items-center gap-2 cursor-pointer">
              More <TfiAngleDown />
            </span>
            <div className="md:fixed md:top-[146px]">
              <ul className="bg-white">
                <li className="p-3">Geography</li>
                <li className="p-3">History</li>
                <li className="p-3">Mathmatics</li>
                <li className="p-3">Social</li>
                <li className="p-3">Downloads</li>
              </ul>
            </div>
          </div>

          {/* <div
            className={`${styles.nav_item} ${
              router.pathname === "/login" ? styles.active4 : ""
            }`}
          >
            <Link onClick={isOpenNav} href="/login">
              Login
            </Link>
          </div> */}
        </nav>
      </div>

      {/* {isOpenSearch ? <SearchSection setIsOpenSearch={setIsOpenSearch} /> : ""} */}

    </header>
  );
};

export default Header;
