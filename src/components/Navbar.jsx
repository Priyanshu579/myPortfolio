import React from "react";
import logo from "/Priyanshu_logo.png";
import {Link} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { CiMaximize1 } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://priyanshu579.github.io/myPortfolio/#/" aria-label="Home">
          <img src={logo} className="mx-2" width={60} height={44} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
        <Link to="/"><IoHome /></Link>
        <Link to="/about"><CiMaximize1 /></Link>
        <Link to="/projects"><GoProjectSymlink /></Link>
        <a
          href="https://www.linkedin.com/in/priyanshu-dhiman-123408251"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Priyanshu579"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_iam.priyan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/_iampriyan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com/@chamkeela?si=TonJyIzoTQ97HW_i"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
