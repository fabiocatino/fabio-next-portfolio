import Cards from "../Cards";
import ProjectModal from "../ProjectModal";
import React from "react";
import SmallCards from "../SmallCards";
import { useInView } from "react-intersection-observer";

const Projects = ({ filteredList, unfilteredList }) => {
  const { ref, inView } = useInView();

  return (
    <section
      id="work"
      ref={ref}
      className={`pt-28 sm:py-28 ${inView && `animate-fadedown`}`}
    >
      <div className="flex items-center gap-5">
        <span className="text-custom-green md:text-4xl font-mono">03.</span>
        <p className="navP text-[26px] md:text-4xl font-bold ">My Projects</p>
        <span className="self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]" />
      </div>
      <div className="pt-10">
        <Cards filteredList={filteredList} />
      </div>

      <div className="mt-52 flex justify-center flex-col items-center">
        <h2 className="text-[32px] text-slate-lightest pb-2">Other Projects</h2>
        {/* <Link passHref={true} href='/'>
						<a
							target='_blank'
							rel='noreferrer'
							className='text-custom-green font-semibold'
						>
							view the archive
						</a>
					</Link> */}
      </div>

      <div>
        <SmallCards unfilteredList={unfilteredList} />

        {/* <div className='flex justify-center mt-10'>
						<Button size='lg'>Show more</Button>
					</div> */}
      </div>

      <ProjectModal />
    </section>
  );
};

export default Projects;
