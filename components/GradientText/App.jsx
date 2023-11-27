"use client";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../Code";
import {
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  ArrowDownLeftIcon,
  ArrowUpLeftIcon,
} from "@heroicons/react/24/solid";
import { HexColorPicker } from "react-colorful";

const gradientArr = [
  { firstColor: "from-slate-900", secondColor: "to-slate-700" },
  { firstColor: "from-slate-500", secondColor: "to-slate-800" },
  { firstColor: "from-emerald-500", secondColor: "to-emerald-900" },
  { firstColor: "from-slate-300", secondColor: "to-slate-500" },
  { firstColor: "from-stone-500", secondColor: "to-stone-700" },
  { firstColor: "from-blue-800", secondColor: "to-indigo-900" },
  { firstColor: "from-purple-500", secondColor: "to-purple-900" },
  { firstColor: "from-violet-600", secondColor: "to-indigo-600" },
  { firstColor: "from-fuchsia-500", secondColor: "to-pink-500" },
  { firstColor: "from-fuchsia-500", secondColor: "to-cyan-500" },
  { firstColor: "from-blue-600", secondColor: "to-violet-600" },
  { firstColor: "from-cyan-500", secondColor: "to-cyan-400" },
  { firstColor: "from-emerald-400", secondColor: "to-violet-600" },
  { firstColor: "from-lime-400", secondColor: "to-lime-500" },
  { firstColor: "from-teal-400", secondColor: "to-yellow-200" },
  { firstColor: "from-teal-200", secondColor: "to-teal-500" },
  { firstColor: "from-violet-200", secondColor: "to-pink-200" },
  { firstColor: "from-amber-500", secondColor: "to-pink-500" },
  { firstColor: "from-pink-500", secondColor: "to-rose-500" },
  { firstColor: "from-red-500", secondColor: "to-orange-500" },
];

const orientationArr = [
  {
    text: "bg-gradient-to-tl",
    radial: 315,
    icon: <ArrowUpLeftIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-t",
    radial: 0,
    icon: <ArrowUpIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-tr",
    radial: 45,
    icon: <ArrowUpRightIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-l",
    radial: 270,
    icon: <ArrowLeftIcon width={15} height={15} />,
  },
  { text: "none", radial: "", icon: <ArrowLeftIcon width={15} height={15} /> },
  {
    text: "bg-gradient-to-r",
    radial: 90,
    icon: <ArrowRightIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-bl",
    radial: 225,
    icon: <ArrowDownLeftIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-b",
    radial: 180,
    icon: <ArrowDownIcon width={15} height={15} />,
  },
  {
    text: "bg-gradient-to-br",
    radial: 135,
    icon: <ArrowDownRightIcon width={15} height={15} />,
  },
];

const App = () => {
  const [gradient, setGradient] = useState(0);
  const [fontWeight, setFontWeight] = useState("font-normal");
  const [gradientOrientation, setGradientOrientation] =
    useState("bg-gradient-to-t");
  const [bg, setBg] = useState("Light");

  return (
    <div className="grid grid-cols-2 h-full gap-3 p-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col p-3 gap-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Gradient:</h2>
          <div className="flex gap-2 flex-wrap">
            {gradientArr.map((el, index) => (
              <button
                key={index}
                onClick={() => setGradient(index)}
                className={`rounded-lg w-10 h-10 ${
                  gradient === index && "ring-2 ring-emerald-500"
                } bg-gradient-to-r ${el.firstColor} ${
                  el.secondColor
                }`}></button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Preview font weight:</h2>
          <div className="flex gap-2 flex-wrap">
            {[
              "font-light",
              "font-normal",
              "font-medium",
              "font-bold",
              "font-extrabold",
            ].map((el) => (
              <button
                key={el}
                onClick={() => setFontWeight(el)}
                className={`rounded-lg flex justify-center items-center ${el} px-2 py-1 ${
                  fontWeight === el && "ring-2 ring-emerald-500"
                } `}>
                {el}
              </button>
            ))}
          </div>
          <h2>Preview background:</h2>
          <div className="flex gap-2 flex-wrap">
            {["Light", "Dark"].map((el) => (
              <button
                key={el}
                onClick={() => setBg(el)}
                className={`rounded-lg flex justify-center items-center ${
                  el === "Dark" ? "bg-black text-white" : "bg-white text-black"
                } px-2 py-1 ${bg === el && "ring-2 ring-emerald-500"} `}>
                {el}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2 className="whitespace-nowrap">Gradient orientation:</h2>
          <div className="grid grid-cols-3 w-fit gap-2">
            {orientationArr.map((el, index) =>
              el.text === "none" ? (
                <div key={el.text} className="w-fit"></div>
              ) : (
                <button
                  key={el.text}
                  onClick={() => setGradientOrientation(el.text)}
                  className={`rounded-lg p-3 w-fit flex justify-center items-center bg-black text-white ${
                    el.text === gradientOrientation && "ring-2 ring-emerald-500"
                  } `}>
                  {el.icon}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      <div className="grid h-full grid-cols-1 gap-3">
        <div className="flex flex-col gap-3 p-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Preview:</h2>
          <div
            className={`h-[90%] duration-200 ease-linear transition-all ${
              bg === "Dark" ? "bg-black" : "bg-white"
            } rounded-md flex justify-center items-center`}>
            <p
              className={`text-center text-3xl ${fontWeight} bg-clip-text text-transparent ${gradientOrientation} ${gradientArr[gradient].firstColor} ${gradientArr[gradient].secondColor}`}>
              Sample Text
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-full">
            <CodeSnippet
              code={`<p className="bg-clip-text text-transparent ${gradientOrientation} ${gradientArr[gradient].firstColor} ${gradientArr[gradient].secondColor}">Text</p>`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
