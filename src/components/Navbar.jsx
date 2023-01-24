import { useState } from "react";
import Image from 'next/image'

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="w-full flex py-8 justify-between z-40 items-center relative navbar"
  >
      <Image src={logo} alt="joytech-Technologies" id="home"  className="w-[150px] sm:w-[200px] h-[32px] sm:h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 p-5 mx--10 my-2 min-w-full rounded-xl sidebar`}
        >
          <div className="flex justify-centre align-centre flex-col list-none">
            {navLinks.map((nav, index) => (
              <div
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
