import React from "react";

const FutureFeatures = () => {
  return (
    <div className="future-feature md:h-[60vh] xl:h-[55vh] h-[58vh] px:py-12 py-6 text-white  md:px-0 px-8">
      <div className="flex justify-center w-full">
        <h1 className="font-bold  text-[32px] tracking-wide  uppercase">
          Future feature
        </h1>
      </div>
      <div className="flex justify-center text-center md:mt-12 mt-6">
        <p className="md:w-[800px] ">
          View sport results in real time, as well as lotery results and all
          kind of bet results. Don’t waste time searching for results online.
          Get notifications for the result of bets you’ve placed and set up your
          preferances.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="assets/feature-mobile.png" alt="feature mobile" />
      </div>
    </div>
  );
};

export default FutureFeatures;
