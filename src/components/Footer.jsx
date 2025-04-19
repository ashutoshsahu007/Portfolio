import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100 text-white flex justify-center gap-6">
      <a
        href="https://github.com/ashutoshsahu007"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ashutosh-sahu-aa733a21a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://wa.me/+918825111254"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
