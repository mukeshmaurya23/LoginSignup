import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const setShowHandler1 = () => {
    setShow1((prevState) => !prevState);
  };

  const setShowHandler = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MyPcot Infotech
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "text-gray-100"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <button
                  onClick={setShowHandler}
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Dropdown
                  {!show ? (
                    <svg
                      class="w-4 h-4 ml-2 -mr-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      class="w-4 h-4 ml-2 -mr-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>

                {show && (
                  <ul className="fixed bg-slate-400 m-1 p-5 w-[8rem] rounded-lg">
                    <li className="p-1">Work</li>
                    <li className="p-1">
                      <span className="flex">
                        <button onClick={setShowHandler1}>Services </button>
                        <svg
                          className="mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            d="M9.29,12.29 L13.59,8 L9.29,3.71 C8.9,3.32 8.9,2.68 9.29,2.29 C9.68,1.9 10.32,1.9 10.71,2.29 L15.71,7.29 C16.1,7.68 16.1,8.32 15.71,8.71 L10.71,13.71 C10.32,14.1 9.68,14.1 9.29,13.71 C8.9,13.32 8.9,12.68 9.29,12.29 Z"
                          />
                        </svg>
                      </span>

                      {show1 && (
                        <ul className="absolute bg-slate-400 m-1 p-5 w-[8rem] rounded-lg top-12 left-32">
                          <li className="p-1">Work</li>
                          <li className="p-1">Work</li>
                          <li className="p-1">Work</li>
                        </ul>
                      )}
                    </li>
                    <li className="p-1">Client</li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "text-gray-100"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "text-gray-100"
                  }
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
