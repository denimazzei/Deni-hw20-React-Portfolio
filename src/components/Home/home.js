import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Home() {
  return (
    <body className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black font-mono">
      <a
        href="#contact"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Hire Me
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </body>
  );
}
