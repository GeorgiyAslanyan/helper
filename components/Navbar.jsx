"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SquaresPlusIcon, PlayIcon, ChevronUpDownIcon, LanguageIcon, HomeIcon, CubeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  let path = usePathname();

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-2xl rounded-xl py-7 px-5 flex flex-col">
      <h1 className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700 ">Helper beta</h1>
      <hr className="my-7 bg-gradient-to-r border-none h-[1px] from-[#121212] via-white to-[#121212] " />
      <div className="flex flex-col gap-2">
      <Link
          href={"/"}
          className={`py-3 px-4 flex group gap-4 rounded-2xl items-center text-sm font-medium ${
            path === "/" && "bg-[#1e1e1e]"
          }`}>
          <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <HomeIcon width={15} height={15} className="" />
          </div>
          <p className="whitespace-nowrap">Main menu</p>
        </Link>
        {/* <Link
          href={"/tailwind-constructor"}
          className={`py-3 px-4 flex group gap-4 rounded-2xl items-center text-sm font-medium ${
            path === "/tailwind-constructor" && "bg-[#1e1e1e]"
          }`}>
          <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/tailwind-constructor" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <SquaresPlusIcon width={15} height={15} className="" />
          </div>
          <p className="whitespace-nowrap">Tailwind Constructor</p>
        </Link> */}
        <Link
          href={"/live-gradient-generator"}
          className={`py-3 px-4 flex group gap-4  rounded-2xl items-center text-sm font-medium ${
            path === "/live-gradient-generator" && "bg-[#1e1e1e]"
          }`}>
            <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/live-gradient-generator" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <PlayIcon width={15} height={15} className="" />
          </div>
          <p>Live Gradient</p>
        </Link>
        {/* <Link
          href={"/scroll-generator"}
          className={`py-3 px-4 flex group gap-4 rounded-2xl items-center text-sm font-medium ${
            path === "/scroll-generator" && "bg-[#1e1e1e]"
          }`}>
            <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/scroll-generator" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <ChevronUpDownIcon width={15} height={15} className="" />
          </div>
          <p className="whitespace-nowrap">Scroll Generator</p>
        </Link> */}
        <Link
          href={"/gradient-text-generator"}
          className={`py-3 px-4 flex group gap-4 rounded-2xl items-center text-sm font-medium ${
            path === "/gradient-text-generator" && "bg-[#1e1e1e]"
          }`}>
            <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/gradient-text-generator" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <LanguageIcon width={15} height={15} className="" />
          </div>
          <p className="whitespace-nowrap">Gradient Text</p>
        </Link>
        <Link
          href={"/iframe-lib"}
          className={`py-3 px-4 flex group gap-4 rounded-2xl items-center text-sm font-medium ${
            path === "/iframe-lib" && "bg-[#1e1e1e]"
          }`}>
            <div className={`flex justify-center items-center p-2 text-white rounded-xl ${path === "/iframe-lib" ? 'text-white bg-emerald-500' : 'text-emerald-500 bg-[#1e1e1e] group-hover:text-white group-hover:bg-emerald-500 transition-all ease-linear duration-100' }`}>
            <CubeIcon width={15} height={15} className="" />
          </div>
          <p className="whitespace-nowrap">3D Iframe Lib</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
