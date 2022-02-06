import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

const Card = (card) => {
  const { description, name, gitHub, externalLink, image, tags } = card;
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`grid xs:grid-cols-12 grid-cols-3fr gap-10 min-w-screen pt-10 relative ${
        inView && `animate-fadedown`
      }`}
    >
      {/* IMAGE/LEFT SECTION */}

      <div
        className="min-h-[362px] min-w[200px] z-[1] border-1 border-black shadow-xl col-end-[-1]
						md:col-end-[9] row-span-full mix-blend-screen md:bg-custom-green 
						filter md:brightness-50 hover:brightness-100 col-start-1 xl:col-end-[7] cursor-pointer relative
						hover:text-custom-green text-slate-lightest text-right text-[28px] font-semibold"
      >
        <Image
          className="opacity-5 md:hover:scale-105 md:hover:opacity-100 md:opacity-50 transition duration-300 ease-in-out"
          layout="fill"
          alt="projectPic"
          src={image}
        ></Image>
      </div>

      {/* RIGHT SECTION */}

      <div
        className="row-start-1 row-end-[-1] col-start-1 md:col-start-5 col-end-[-1] 
							xl:col-start-6 z-10 space-y-5 sm:text-left md:text-right p-5 sm:p-14 md:p-0"
      >
        {/* TEXT TOP RIGHT */}
        <h1 className="text-custom-green md:m-[10px] font-semibold font-mono ">
          Featured Project
        </h1>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-custom-green text-slate-lightest font-mono text-2xl md:text-[28px] font-semibold cursor-pointer"
        >
          <p>{name}</p>
        </a>
        {/* MAIN CARD */}

        <div className="xl:min-h-[122px]  md:p-[25px] sm:bg-transparent md:bg-navy-light z-10 opacity-100 rounded-md">
          <p className="text-lg text-slate ">{description}</p>
        </div>

        {/* TAGS */}
        <div className="flex justify-start md:justify-end gap-2 flex-wrap ">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="text-mono text-slate text-lg font-semibold"
            >
              {tag.name}
            </p>
          ))}
        </div>
        {/* LINKS */}
        <div className="flex md:justify-end gap-5 flex-1 items-end pt-5">
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className="hover:text-custom-green text-slate-lightest text-[28px] font-semibold cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 w-5 text-custom-white"
              icon={faGithub}
            />
          </a>
          <a
            href={externalLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-custom-green text-slate-lightest text-[28px] font-semibold cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 w-5 text-custom-white"
              icon={faExternalLinkAlt}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
