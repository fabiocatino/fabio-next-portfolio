import React, { useState } from "react";

import Job from "./Job";
import JobDescription from "./JobDescription";
import { useInView } from "react-intersection-observer";

const Jobs = ({ sortedJobs }) => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView();

  return (
    <div
      id="jobs"
      ref={ref}
      className={`pt-28 sm:py-28 ${inView && `animate-bounce-in`}`}
    >
      <div className="flex items-center gap-5">
        <span className="text-custom-green md:text-4xl font-mono">02.</span>
        <p className="navP text-[26px] md:text-4xl font-bold ">My experience</p>
        <span className="self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]" />
      </div>
      <div className="mt-10 md:flex gap-24 md:h-60">
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
      </div>
    </div>
  );
};

export default Jobs;
