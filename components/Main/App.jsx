import React from "react";
import Image from "next/image";
import Link from "next/link";

const linksArray = [
  {
    name: "Live Gradient",
    img: "/main/live.png",
    link: "/live-gradient-generator",
    description: 'Animated gradient generator with TailwindCSS'
  },
  {
    name: "Gradient Text",
    img: "/main/gradient.png",
    link: "/gradient-text-generator",
    description: 'Text gradient generator with TailwindCSS'
  },
  {
    name: "Iframe Lib",
    img: "/main/iframe.png",
    link: "/iframe-lib",
    description: 'Lib 3d models iframe to paste into your site'
  },
];

const App = () => {

  return (
    <div className="grid grid-cols-3 h-full w-full gap-3">
      {linksArray.map((el, index) => <Link href={el.link} key={index} className="bg-black h-fit hover:ring-2 ring-0 ring-emerald-500 bg-opacity-50 overflow-hidden gap-4 backdrop-blur-2xl rounded-xl p-5 flex flex-col">
            <Image alt={el.name} src={el.img} height={300} width={400} className="w-full object-cover rounded-lg"/>
            <p className="font-medium">{el.name}</p>
            <p className="text-gray-200">{el.description}</p>
      </Link>)}
    </div>
  );
};

export default App;
