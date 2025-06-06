import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { motion } from "motion/react";

const iconVariants = (duration) => {
  return {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <FaHtml5 className="text-7xl text-orange-400" />
          <div>HTML</div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
          <div>CSS</div>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <DiJavascript className="text-7xl text-yellow-300" />
          <div>Javascript</div>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <div>react</div>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
          <div>Tailwind</div>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="text-center cursor-pointer"
        >
          <TbBrandFramerMotion className="text-7xl text-white-400" />
          <div>Motion</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
