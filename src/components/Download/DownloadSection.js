import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const DownloadSection = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="md:py-14 py-8 px-4 md:px-0 relative">
      <div className="flex justify-center w-full">
        <h1 className="font-bold  md:text-[32px] text-[25px] tracking-wide text-gray-800 uppercase">
          Download gambits laucnher now
        </h1>
      </div>
      <div className="flex justify-center md:text-center md:mt-12 mt-6">
        <p className="w-[800px] text-lg">
          Lorem ipsum dolor sit dipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-[400px] flex justify-between md:flex-row flex-col gap-8 md:mt-12 mt-8">
          <img
            src="assets/app-store.png"
            className="w-[160px]"
            alt="appstore"
          />
          <img
            src="assets/play-store.png"
            alt="playstore"
            className="w-[160px]"
          />
        </div>
      </div>
      <button
        onClick={goToTop}
        className="absolute md:block hidden right-12 bottom-8 rounded p-1 text-[#7EA7C4] hover:border-[#005255] hover:text-[#005255]  border-2 text-3xl border-[#7EA7C4]"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default DownloadSection;
