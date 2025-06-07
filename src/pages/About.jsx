import React from "react";
import { motion } from "framer-motion"; // corrected import path
import profile from "../assets/raviKumarProfile.webp";

const About = () => {
  return (
    <div className="min-h-screen p-10 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3"
        >
          <p className="text-lg leading-relaxed tracking-tight">
            Hey! I'm <span className="font-bold">Priyanshu Dhiman</span>, a passionate frontend developer who loves turning designs into pixel-perfect code. 
            I'm currently pursuing my BCA and exploring the world of Web3, aiming to become a full-fledged dApp developer. I enjoy learning new technologies and 
            building fun & useful projects — from tiny tools to full apps like expense splitters and portfolio websites.
            <br /><br />
            Apart from coding, I play guitar, create YouTube videos, and love creative storytelling. My goal is to work with clients worldwide and eventually buy a bungalow 🏠 through my skills & smart investments 💸.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={profile}
          alt="Priyanshu Dhiman"
          className="w-[300px] h-[300px] object-cover rounded-3xl border border-stone-800"
        />
      </div>
    </div>
  );
};

export default About;
