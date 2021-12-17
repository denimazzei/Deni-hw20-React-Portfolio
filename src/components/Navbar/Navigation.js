import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white-800 md:sticky top-0 z-10 font-mono">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 font-mono">
          <a href="/about" className="ml-3 text-xl">
            <img src="./profile_image.png" alt="" className="" />
          </a>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center focus:outline-none hover:bg-gray-700 rounded">
          <a href="/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
