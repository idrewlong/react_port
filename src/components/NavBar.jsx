import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const logo = "./react.svg";

  function toggleNavbar() {
    setShowMenu(!showMenu);
  }

  function closeNavbar() {
    setShowMenu(false);
  }
  return (
    <div>
      <div className="bg-gradient-to-br from-neutral-600 to-zinc-800">
        <div>
          <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  className="h-16 hover:scale-105 duration-500"
                  alt="Logo"
                />
                <span className="text-2xl font-semibold whitespace-nowrap ml-3">
                  Resume Site
                </span>
              </a>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-white hover:text-gray focus:outline-none focus:text-gray-400"
                  aria-label="Toggle Navigation"
                  onClick={toggleNavbar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${
                showMenu ? "flex" : "hidden"
              }`}
            >
              <a
                className="text-grey-800 duration-500 hover:underline ease-in-out"
                href="#about"
                onClick={closeNavbar}
              >
                About
              </a>
              <a
                className="text-grey-800 duration-500 hover:underline ease-in-out"
                href="#projects"
                onClick={closeNavbar}
              >
                Projects
              </a>
              <a
                className="text-grey-800 duration-500 hover:underline ease-in-out"
                href="#contact"
                onClick={closeNavbar}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
