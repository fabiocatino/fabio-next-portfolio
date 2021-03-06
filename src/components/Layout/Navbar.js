import { signOut, useSession } from "next-auth/react";

import Button from "../Button";
import { Drawer } from "./Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const Navbar = ({ open, setOpen }) => {
  const { data: session } = useSession();
  const { ref, inView } = useInView();

  const MenuHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div
      ref={ref}
      className="bg-navy-header flex items-center px-[25px] sm:px-[50px] h-[100px] w-full fixed z-10 shadow-xl"
    >
      {/* LEFT SIDE */}

      <Link href="/" passHref={true}>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          className="text-custom-green flex justify-center items-center h-10 w-10 animate-fadedown cursor-pointer navBtn"
          fill="none"
        >
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <path
                className=""
                d="M 30.079 60.96 L 30.079 26.404 L 51.594 26.404 L 51.594 30.603 L 35.72 30.603 L 35.72 41.24 L 51.594 41.24 L 51.594 45.432 L 35.72 45.432 L 35.72 60.96 Z"
                fill="currentColor"
              ></path>

              <polygon
                id="Shape"
                stroke="currentColor"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              ></polygon>
            </g>
          </g>
        </svg>
      </Link>

      {/* MIDDLE SIDE */}

      <div className="hidden md:flex justify-end flex-grow gap-7 text-[16px] font-mono">
        {navLinks.map((link, index) => (
          <div
            key={link.id}
            className={`${
              inView
                ? `opacity-100 translate-y-0 transform duration-1000 ease-in-out`
                : `transition opacity-0 duration-1000 ease-in-out transform -translate-y-5 `
            }`}
            style={{ transitionDelay: `${index * 500}ms` }}
          >
            <Link href={link.href} passHref={true}>
              <button key={link.id} className="navBtn">
                <span className="text-custom-green ">{link.num}</span>
                <p className="navP">{link.text}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        onClick={MenuHandler}
        className="delay md:hidden h-10 w-10 text-custom-green absolute right-5 cursor-pointer  animate-fadedown"
        icon={faBars}
      />
      {/* RIGHT SIDE */}
      <Drawer open={open} setOpen={setOpen} MenuHandler={MenuHandler} />

      <Link href="/cv.pdf" passHref={true}>
        <a className="px-5" target="_blank" rel="noopener">
          <Button size="sm">CV</Button>
        </a>
      </Link>

      {session && (
        <Button size="sm" onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Navbar;

const navLinks = [
  {
    id: 1,
    num: "01",
    text: "About",
    href: "/#about",
  },
  {
    id: 2,
    num: "02",
    text: "Experience",
    href: "/#jobs",
  },
  {
    id: 3,
    num: "03",
    text: "Work",
    href: "/#work",
  },
  {
    id: 4,
    num: "04",
    text: "Contact",
    href: "/#contact",
  },
];
