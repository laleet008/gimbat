import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineClear } from "react-icons/md";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <nav id="header" className=" z-30 top-0 text-white pt-2 lg:pt-4 ">
      <div className=" px-16 flex  items-center justify-between mt-0  ">
        <Link to="/" className="" href="/">
          <img
            src="assets/main-logo.png"
            alt="main logo"
            className="h-[80px] w-[82px]"
          />
        </Link>
        <div className="flex items-center">
          <div id="nav-content" className="flex">
            <div
              className={
                toggleMenu
                  ? "block bg-gray-700 rounded-lg p-4 shadow active md:flex"
                  : "hidden md:flex"
              }
            >
              <ul className="list-reset md:flex justify-start items-center">
                <li className="md:mr-6 lg:mr-12">
                  <NavLink
                    className=" text-white hover:text-gray-200 no-underline"
                    activeclassname="active"
                    to="/terms"
                  >
                    Terms of Services
                  </NavLink>
                </li>
                <li className="md:mr-6 lg:mr-12">
                  <NavLink
                    className=" text-white no-underline hover:text-gray-200 hover:text-underline"
                    activeclassname="active"
                    to="/privacy"
                  >
                    Privacy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="block md:hidden">
            {toggleMenu ? (
              <button className="p-2 bg-[#222] rounded  text-gray-400 text-2xl">
                <MdOutlineClear onClick={() => setToggleMenu(false)} />
              </button>
            ) : (
              <button
                id="nav-toggle"
                className="flex items-center appearance-none focus:outline-none relative z-10"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H24V2.66667H0V0ZM0 8.33333H24V11H0V8.33333ZM0 16.6667H24V19.3333H0V16.6667Z"
                    fill="#222"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
