"use client";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../Code";
import "@/components/LiveGradient/Style.css";

const modelsArr = [
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/spline'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/liquid'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/sphere'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/sculpture'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/wardrobe'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/chess'},
    {name: '', img: '', link: 'https://iframe-lib.vercel.app/wire'},
]

const App = () => {
  const [model, setModel] = useState(0);

  return (
    <div className="grid grid-cols-2 h-full gap-3 p-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col p-3 gap-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Models:</h2>
          <div className="flex gap-2 flex-wrap">
            {modelsArr.map((el, index) => <div onClick={() => setModel(index)} key={index} className={`rounded-lg px-2 py-1 flex justify-center items-center h-10 ${
                  model === index && "ring-2 ring-emerald-500"
                }`}>
            </div>)}
          </div>
        </div>
      </div>
      <div className="grid h-full grid-cols-1 gap-3">
        <div className="flex min-h-[250px] flex-col gap-3 p-3 border shadow-xl border-[#3b3b3b] rounded-xl bg-[#1e1e1e]">
          <h2>Preview:</h2>
          
          <div
            className={`h-[90%] duration-200 ease-linear transition-all rounded-md flex justify-center items-center`}>
                <iframe src={modelsArr[model].link} className="h-full w-full"></iframe>
            </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-full">
            <CodeSnippet code={`<iframe src="${modelsArr[model].link}" height="500px" width="500px"></iframe>`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
