import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { useInView } from "react-intersection-observer";

const Layout = ({ children }) => {
  const [y, setY] = useState(0);
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          setY(window.scrollY);
        } else setY(100);
      });
    }
  }, []);

  console.log(inView);

  return (
    <div className="relative bg-navy min-h-screen scroll-smooth">
      <Head>
        <title>Fabio Catino</title>
        <link rel="icon" href="/favicon.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        ref={ref}
        className={
          inView
            ? `transition-opacity duration-500 ease-in-out opacity-100 transform translate-y-0`
            : `transition opacity-0 duration-1000 ease-in-out transform -translate-y-25 `
        }
      >
        <Navbar open={open} setOpen={setOpen} />
      </div>

      <main
        className={`${
          open && "filter blur select-none"
        }  flex flex-col justify-center px-[25px] sm:px-[50px] md:px-[100px] lg:mx-[100px]  2xl:mx-[180px]`}
      >
        {children}
      </main>
      <div className="h-10">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
