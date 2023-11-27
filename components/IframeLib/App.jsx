"use client";
import React, { useState } from "react";
import CodeSnippet from "../Code";

const modelsArr = [
  {
    name: "Cursor event",
    img: "/iframe/spline.png",
    link: "https://iframe-lib.vercel.app/spline",
  },
  {
    name: "Liquid",
    img: "/iframe/liquid.png",
    link: "https://iframe-lib.vercel.app/liquid",
  },
  {
    name: "Sphere",
    img: "/iframe/sphere.png",
    link: "https://iframe-lib.vercel.app/sphere",
  },
  {
    name: "Scroll animation",
    img: "/iframe/sculpture.png",
    link: "https://iframe-lib.vercel.app/sculpture",
  },
  {
    name: "Wardrobe",
    img: "/iframe/wardrobe.png",
    link: "https://iframe-lib.vercel.app/wardrobe",
  },
  {
    name: "Chess",
    img: "/iframe/chess.png",
    link: "https://iframe-lib.vercel.app/chess",
  },
  {
    name: "Wire",
    img: "/iframe/wire.png",
    link: "https://iframe-lib.vercel.app/wire",
  },
];

const App = () => {
  const [model, setModel] = useState(5);

  return (
    <div className="grid grid-cols-2 h-full gap-3 p-5">
      <div className="flex flex-col p-3 gap-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Models:</h2>
          <div className="grid grid-cols-3 gap-2">
            {modelsArr.map((el, index) => (
              <div
                onClick={() => setModel(index)}
                key={index}
                className={`cursor-pointer shadow-lg bg-[#363636] overflow-hidden rounded-lg flex flex-col text-center gap-2 justify-center items-center ${
                  model === index && "ring-2 ring-emerald-500"
                }`}>
                <img
                  className={"w-full h-[100px] object-cover"}
                  src={el.img}
                  alt={el.name}
                />
                <p className="pb-2">{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      <div className="grid h-full grid-cols-1 gap-3">
        <div className="flex min-h-[250px] flex-col gap-3 p-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Preview:</h2>

          <div
            className={`h-[90%] duration-200 ease-linear transition-all rounded-md flex justify-center items-center`}>
            <iframe
              src={modelsArr[model].link}
              className="h-full w-full rounded-lg"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-full">
            <CodeSnippet
              code={`<iframe src="${modelsArr[model].link}" height="500px" width="500px"></iframe>`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
