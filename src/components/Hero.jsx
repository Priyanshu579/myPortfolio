import React from "react";
import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";


const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-15 lg:-mb-12">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={profilePic}
              alt="Ravi Kumar"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter"
            >
              Priyanshu Dhiman
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              whileHover={{ scale: 0.9 }}
              whileTap={{ fontWeight: "bold" }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
