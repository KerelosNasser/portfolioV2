import React from "react";
import { FlipWords } from "./FlipWord";
import { motion } from "motion/react";
import { delay } from "motion";
const Words = ["experiences", "innovation", "Scallable"];
function HeroText() {
  return (
    <div className='z-10 mt-20 text-center md:text-left md:mt-40 rounded-r-3xl bg-clip-text'>
      {/* desktop */}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1
          className='text-3xl mb-4 font-medium text-neutral-300'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi there, I'm
          <span className='text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text'>
            Kerelos
          </span>
        </motion.h1>
        <div
          className='flex flex-col items-start'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.p
            className='text-5xl font-medium text-neutral-300'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
          >
            A Developer Dedicated to Crafting
          </motion.p>
          {/* flipword.jsx */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
          >
            <FlipWords
              words={Words}
              className='font-black text-white text-6xl'
              duration={1500}
            />
          </motion.div>
          <p className='text-5xl font-medium text-neutral-300'>Web Solutions</p>
        </div>
      </div>
      {/* mobile */}
      <div className='flex flex-col space-y-4 md:hidden'>
        <motion.p
          className='text-4xl font-medium'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi, I'm
          <span className='text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text'>
            Kerelos
          </span>
        </motion.p>
        <div>
          <motion.p
            className='text-3xl font-medium'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
          >
            A Developer Dedicated to Crafting
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
          >
            <FlipWords
              words={Words}
              className='font-black text-white text-4xl'
              duration={1500}
            />
          </motion.div>
          <div>
            <p className='text-3xl font-medium'>Web Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
