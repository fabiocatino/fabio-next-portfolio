import React, { useState } from "react";
import Job from "./Job";
import { Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { useVisibilityHook } from "react-observer-api";
import JobDescription from "./JobDescription";

const Jobs = ({ sortedJobs }) => {
  const { setElement, isVisible } = useVisibilityHook();
  const [index, setIndex] = useState(0);

  return (
    <div id="jobs" className="pt-28 sm:py-28">
      <div ref={setElement} className="flex items-center gap-5">
        <span className="text-custom-green md:text-4xl font-mono">02.</span>
        <p className="navP text-[26px] md:text-4xl font-bold ">My experience</p>
        <span className="self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]" />
      </div>
      <Transition
        as="div"
        show={isVisible}
        enter="transform translate-y-5 transition opacity-0  duration-1000 ease-in-out"
        enterFrom="transform translate-y-5 transition opacity-0  duration-1000 ease-in-out"
        enterTo="opacity-100 translate-y-0 transform duration-1000 ease-in-out"
        className="mt-10 md:flex gap-24 md:h-60"
      >
        <div className="flex md:flex-col overflow-scroll  scrollbar-hide">
          {sortedJobs.map((job, i) => (
            <Job i={i} key={i} {...job} setIndex={setIndex} index={index} />
          ))}
        </div>
        <div className="flex">
          {sortedJobs.map((job, i) => (
            <JobDescription key={i} index={index} i={i} {...job} />
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Jobs;
