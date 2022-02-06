import React from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <div
      id="contact"
      ref={ref}
      className={`flex flex-col items-center justify-center h-96 space-y-5 ${
        inView && `animate-fadedown`
      }`}
    >
      <h1 className="text-custom-green text-4xl font-mono">04. Contact</h1>
      <h1 className="text-slate-lightest text-2xl md:text-6xl text-center">
        Get in Touch
      </h1>
      <div className="text-lg pt-5">
        <button className="contact-btn">
          <a target="_blank" rel="noreferrer" href="mailto:fabivs9@gmail.com">
            Say hello
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
