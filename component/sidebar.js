"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image src="/Menu Icon.svg" alt="Logo" width={30} height={15} />
      </button>
      <div
        className={`top-0 left-0 bg-gray-900 text-white p-2 w-64 h-screen z-50 md:hidden fixed
    transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute cursor-pointer right-0 px-7 py-5"
        >
          <Image src="/Cross Icon.svg" alt="Turn off" width={25} height={25} />
        </button>
        <div className="flex flex-col justify-between h-full">
          <div className="text-center items-center mt-20 flex flex-col gap-2 text-2xl">
            <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              About Me
            </a>
            <hr className="border-white w-full" />
            <a href="#skills" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Skills
            </a>
            <hr className="border-white w-full" />
            <a href="#projects" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Projects
            </a>
            <hr className="border-white w-full" />
            <a href="#education" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Education
            </a>
            
            <hr className="border-white w-full" />
            <a href="#volunteering" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Volunteering
            </a>
            
            <hr className="border-white w-full" />
            <a href="#courses" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Courses
            </a>
          </div>
          <div className="text-center mb-5">
            <div className="flex justify-center gap-5 mb-4">
              <a href="http://linkedin.com/in/asaadnadeem686" target="_blank">
                <Image
                  src="/2504923.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.facebook.com/asaadnadeem686" target="_blank">
                <Image
                  src="/2504903.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://github.com/AsaadNadeem" target="_blank">
                <Image
                  src="/2504911.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <a
              href="mailto:asaadnadeem686@gmail.com"
              className="rounded-full border border-amber-50/30 px-12 py-2 text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
