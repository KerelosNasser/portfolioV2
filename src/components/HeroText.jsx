import React from "react";
import { FlipWords } from "./FlipWord";

function HeroText() {
  return (
    <div className='z-10 mt-20 text-center md:text-left md:mt-40 rounded-r-3xl bg-clip-text'>
      {/* desktop */}
      <div className='flex-col hidden md:flex c-space'>
        <h1>
          Hi there, I'm
          <span className='text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text'>
            Kerelos
          </span>
        </h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-neutral-300">
            A Developer Dedicated to Crafting</p>
            {/* flipword.jsx */}
           <div> <FlipWords/> </div>
          <p className="text-5xl font-medium text-neutral-300">Web Solutions
          </p>
        </div>
      </div>
      {/* mobile */}
      <div></div>
    </div>
  );
}

export default HeroText;
