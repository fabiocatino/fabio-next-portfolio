import React from "react";

const Intro = ({ title }) => {
  return (
    <section
      id="intro"
      className="space-y-1 4xsm:mt-36 3xsm:mt-10 xxs:mt-0 min-h-screen flex flex-col justify-center items-start xl:mx-[50px] animate-fadedown"
    >
      <h1 className="md:text-lg text-custom-green font-mono ">
        Hi, my name is
      </h1>
      <h2 className="text-[40px] md:text-[80px] text-slate-lightest font-semibold">
        Fabio Catino
      </h2>
      <h2 className="leading-10 md:leading-none text-[40px] md:text-[80px] text-slate font-semibold">
        I build things for the web.
        <p className="text-lg  py-5">{title}</p>
      </h2>
      <p className="text-slate max-w-[500px] text-lg">
        Originally, I’m from Bari, Italy. I graduated from the University of
        West London with a Bachelor’s Degree in Cyber Security and I am
        passionate about Web Development. I am now working as a Frontend
        React.Js Developer.
      </p>
    </section>
  );
};

export default Intro;
