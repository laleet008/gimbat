import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";

const NotFound = () => {
  return (
    <div className="">
      <div className="not-found h-[100vh]">
        <Header />
        <div className="flex flex-col gap-6 justify-center items-center align-center  ">
          <h1 className="text-neutral-300 opacity-20 text-[200px] font-bold">
            404
          </h1>
          <p className="text-2xl absolute text-neutral-200">
            Oops! Page note found
          </p>

          <Link to="/">
            <button className="border bg-transparent text-neutral-300 border-[#7EA7C4] py-3 px-6 rounded  hover:text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
