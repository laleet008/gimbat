import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer md:px-10 px-8 xl:px-32 py-10 text-white bg-[#7EA7C4]">
      <nav
        id="footer"
        className="w-full flex md:flex-row flex-col gap-6 md:justify-between justify-center"
      >
        <div>Copyright © 2022 Gambits Launcher</div>
        <div className="flex justify-between">
          <ul className="flex justify-between items-center  w-[300px]">
            <li>
              <NavLink
                className="inline-block"
                activeclassname="active"
                to="/terms"
              >
                Terms of Services
              </NavLink>
            </li>
            <li className="mr-8 lg:mr-12">
              <NavLink
                className="inline-block"
                activeclassname="active"
                to="/privacy"
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
