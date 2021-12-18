import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white-800 md: stickey top-0 z-10 font-mono">
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center  rounded">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h1 className="title-font font-medium text-white mb-4 md:mb-0 font-mono">
            <img src="assets/profile_image.png" alt="profile" />
          </h1>

          <div className="collapse navbar-collapse focus:outline-none hover:bg-gray-700">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="mr-5 hover:text-white" href="#/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="mr-5 hover:text-white" href="#/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="mr-5 hover:text-white" href="#/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="mr-5 hover:text-white" href="#/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
