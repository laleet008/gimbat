import Header from "../Header/Header";

function HeroSection() {
  return (
    <div className="container-hero md:h-[90vh] py-2">
      <Header />
      <div className="md:px-32  flex md:flex-row flex-col-reverse s md:gap-40 xl:gap-48">
        <div className="md:ml-36 md:mt-[-30px] md:block flex justify-center ">
          <img src="assets/mobile.png" alt="phone" className="h-[620px] " />
        </div>
        <div className="text-white md:py-0 py-8 md:mx-0 mx-8">
          <div className="flex items-center  mt-6">
            <img
              src="assets/hero-logo.png"
              alt="hero logo"
              className="md:h-[120px] h-[90px]  md:w-[115px] w-[95px]"
            />
            <h1 className="mt-10 md:mt-12 hero-heading md:text-4xl text-3xl font-bold font-['Titillium Web'] tracking-wider">
              ambits Launcher.
            </h1>
          </div>

          <p className="text-3xl md:w-[400px] md:mt-20 mt-12">
            Take your phone to the next level
          </p>
          <p className="md:w-[550px] text-gray-200 md:mt-20 mt-12">
            We have been working very hard to design the new version of our app.
            Finally it's ready. It comes with a lot of new features. Check it
            out now!
          </p>
          <div className="w-[400px] justify-between flex md:mt-12 mt-8">
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
      </div>
    </div>
  );
}

export default HeroSection;
