import React from "react";

function Navbar() {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <a
          href="/home"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Home
        </a>
      </div>
      <div>
        <a
          href="/about"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="/projects"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="/contact"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Three
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
