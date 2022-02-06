import React from "react";
import SmallCard from "./SmallCard";
import Spinner from "./Spinner";
import { statusAtom } from "../store/atoms";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

const SmallCards = ({ unfilteredList }) => {
  const { isLoading, error } = useRecoilValue(statusAtom);
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      {isLoading && <Spinner />}
      {error && "Something went wrong."}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ${
          inView && `animate-fadedown`
        }`}
      >
        {!isLoading &&
          !error &&
          unfilteredList.map((project, i) => (
            <SmallCard key={i} {...project} />
          ))}
      </div>
    </div>
  );
};

export default SmallCards;
