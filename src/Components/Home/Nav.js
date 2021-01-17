import React from "react";
import Logo from "../../Logo";

export default function Nav() {
  
  return (
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <Logo />
            </a>
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="whitespace-nowrap text-base font-bold text-black-500 hover:text-black-900 mx-8"
            >
              Home
            </a>
            <a
              href="#"
              class="whitespace-nowrap text-base font-bold text-black-500 hover:text-black-900 mx-8"
            >
              Join
            </a>
            <a
              href="#"
              class="whitespace-nowrap text-base font-bold text-black-500 hover:text-black-900 mx-8"
            >
              About
            </a>
            <a
              href="#"
              class="whitespace-nowrap text-base font-bold text-black-500 hover:text-black-900 mx-8"
            >
              Help
            </a>
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl "
            >
              Share Your idea
            </a>
          </div>
        </div>
      </div>

      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <Logo />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  
                >
                  <span class="sr-only">Close menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Home
              </a>

              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Join
              </a>

              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
              >
                About
              </a>

              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help
              </a>

              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Share your idea
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
