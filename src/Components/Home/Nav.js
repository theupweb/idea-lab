import React, {useState} from "react";
import {CloseOutlined,MenuOutlined} from "@ant-design/icons";
import Logo from "../../Logo";

export default function Nav() {

  const [navButton, setNavButton] = useState(false);

  const navLinks = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Join",
      to: "/"
    },
    {
      name: "About",
      to: "/"
    },{
      name: "Help",
      to: "/"
    }
  ];
  
  return (
    <div className="relative bg-opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Logo />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {
              navLinks.map(element => (
                <a href={element.to} className="whitespace-nowrap text-base font-bold text-black-500 hover:text-black-900 mx-5" key={element.name}>
                  {element.name}
                </a>
              ))
            }
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl "
            >
              Share Your idea
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Logo />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setNavButton(current => !current)}
                >
                  {
                    navButton ?
                    <>
                      <span className="sr-only">Close menu</span>
                      <span><CloseOutlined className="h-6 w-6"/></span>
                    </>
                    :
                    <>
                      <span className="sr-only">Close menu</span>
                      <span>
                      <MenuOutlined className="h-6 w-6"/></span>
                    </>
                  }
                </button>
              </div>
            </div>
          </div>
          {
            navButton && 
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Join
                </a>

                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </a>

                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help
                </a>

                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Share your idea
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
