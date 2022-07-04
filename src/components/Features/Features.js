import React from "react";

const Features = () => {
  return (
    <div className="md:py-12 py-6 md:px-0 px-8">
      <div className="flex justify-center w-full">
        <h1 className="font-bold md:text-[32px] text-[25px] tracking-wide text-gray-700">
          LAUNCHER MAIN FEATURES
        </h1>
      </div>
      <div className="flex justify-center text-center md:mt-8 mt-4">
        <p className="md:w-[700px]">
          Lorem ipsum dolar sit dispisicing elit, sed do eiusmod tempor
          inciidunt ut labore et dolore megan aliqua. Ut enim ad minim veniam,
          quis nostrud exciteation.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:px-20 md:mt-12 mt-6 justify-between gap-12">
        <div className="flex flex-col items-center">
          <img
            src="assets/pointing-finger-icon.png"
            className="md:h-[150px] h-[120px] md:w-[150px] w-[120px]"
            alt="easy to use"
          />
          <h2 className="my-6 font-bold text-2xl">Different Gestures</h2>
          <p className="md:min-w-[400px]  text-center text-lg">
            Lorem ipsum dolor sit dipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="assets/like-icon.png"
            className="md:h-[150px] h-[120px] md:w-[150px] w-[120px]"
            alt="easy to use"
          />
          <h2 className="my-6 font-bold text-2xl">Easy to use</h2>
          <p className="md:min-w-[400px]  text-center text-lg">
            Lorem ipsum dolor sit dipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="assets/fire-icon.png"
            className="md:h-[150px] h-[120px] md:w-[150px] w-[120px]"
            alt="easy to use"
          />
          <h2 className="my-6 font-bold text-2xl">Awesome Design</h2>
          <p className="md:min-w-[400px]  text-center text-lg">
            Lorem ipsum dolor sit dipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
