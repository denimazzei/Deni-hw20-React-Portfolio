import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md: flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4.1 text-3.1 mb-4 font-medium text-white">
            Hi, I'm Deni Mazzei.
            <br className="hidden lg:inline-block" /> Aspiring full stack
            developer located in SATX.{" "}
          </h1>
          <p className="mb-8 leading-relaxed">
            Over the years, my experience in marketing, communication, sales,
            project management, and running small start-ups has allowed me to
            experience front & backend development from a variety of viewpoints
            from the client-side. Now that I'm becoming a developer myself, I'm
            excited to put my programming knowledge, skills and expertise from
            both sides of the coin to work for you to tackle your next project.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
