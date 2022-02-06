import { Transition } from "@headlessui/react";
import React from "react";
import { useVisibilityHook } from "react-observer-api";
import Cards from "../Cards";
import ProjectModal from "../ProjectModal";
import SmallCards from "../SmallCards";

const Projects = ({ filteredList, unfilteredList }) => {
  const { setElement, isVisible } = useVisibilityHook();

  return (
    <section id="work" className="pt-28 sm:py-28">
      <div ref={setElement} className="">
        <Transition
          show={isVisible}
          enter="transition opacity-0 duration-1000 ease-in-out"
          enterFrom="transform -translate-y-5 transition opacity-0  duration-1000 ease-in-out"
          enterTo="opacity-100 translate-y-0 transform duration-1000 ease-in-out"
        >
          <div ref={setElement} className="flex items-center gap-5">
            <span className="text-custom-green md:text-4xl font-mono">03.</span>
            <p className="navP text-[26px] md:text-4xl font-bold ">
              My Projects
            </p>
            <span className="self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]" />
          </div>
          <div className="pt-10">
            <Cards filteredList={filteredList} />
          </div>
        </Transition>
      </div>

      <div className="mt-52">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-[32px] text-slate-lightest pb-2">
            Other Projects
          </h2>
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
      </div>
      <ProjectModal />
    </section>
  );
};

export default Projects;
