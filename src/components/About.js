import DescriptionModal from "./DescriptionModal";
import Image from "next/image";
import ModalPage from "./Modal";
import React from "react";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useSession } from "next-auth/react";

const About = ({ description }) => {
  const { ref, inView } = useInView();
  const { data: session } = useSession();

  return (
    <section
      ref={ref}
      className={`4xsm:pt-14 3xsm:pt-0 ${inView && `animate-fadedown`}`}
      id="about"
    >
      <div className="flex items-center gap-5">
        <span className="text-custom-green md:text-4xl font-mono">01.</span>
        <p className="navP text-[26px] md:text-4xl font-bold ">About me</p>
        <span className="self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3fr pt-10 gap-10 ">
        <div className="text-slate text-lg md:text-xl font-semibold">
          <p className="pb-5">{description}</p>
          <DescriptionModal></DescriptionModal>
          <p className="py-5">Here are some technologies I work with:</p>

          <Skills />
          <div className="pt-10 flex w-full"></div>
          {session && (
            <div className="pt-10 flex w-full">
              <ModalPage />
            </div>
          )}
        </div>

        <div className="relative h-52 w-52 md:h-[300px] md:w-[300px] mix-blend-screen filter brightness-50 hover:brightness-100 bg-custom-green">
          <Image
            className="hover:scale-105 hover:opacity-100 opacity-50 transition duration-300 ease-in-out"
            layout="fill"
            src="/linkpic.png"
            alt="propic"
            objectFit="cover"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
