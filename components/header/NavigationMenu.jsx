import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const MENU = [
  ["Speaking", "/speaking"],
  ["About", "/about"],
  ["Podcast", "/podcast"],
  ["Contact", "/contact"],
];

const NavigationMenu = () => {
  const [toggle, setToggle] = useState(false);
  // Handle Functions

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* Mobile View*/}
      <div className={` absolute z-40 right-1/20 top-12 md:hidden `}>
        <span className={`${toggle ? " " : "hidden "}`}>
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            size="2x"
            onClick={handleToggle}
          />
        </span>
        <span className={`${toggle ? "hidden " : " "}`}>
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            size="2x"
            className="text-white cursor-pointer"
            onClick={handleToggle}
          />
        </span>
      </div>
      <div
        className={`${
          toggle ? "-translate-x-0" : "-translate-x-full"
        } bg-[#110B57] flex items-center flex-col justify-center absolute top-0 left-0 w-screen h-screen md:hidden z-20 ease-in-out duration-300 `}
      >
        <ul className="text-white font-poppins">
          {MENU.map((item, idx) => {
            return (
              <li key={idx} className="px-4 ">
                <Link href={item[1]}>
                  <a> {item[0]}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialIcons className="" />
      </div>
      {/* Screen View */}
      <div className="hidden md:flex ">
        <ul className="mr-12 text-white font-poppins md:flex">
          {MENU.map((item, idx) => {
            return (
              <li key={idx} className="px-4 ">
                <Link href={item[1]}>
                  <a className=""> {item[0]}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialIcons className="" />
      </div>
    </>
  );
};

export default NavigationMenu;
