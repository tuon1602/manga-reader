import React from "react";
import { Instagram, Facebook, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-5 text-center text-xl flex justify-center items-center gap-5 max-md:flex-col max-md:gap-2">
      <p className="text-lg font-bold text-primary uppercase max-md:order-last">© Created by Tuon </p>
      <div className="flex gap-5 ">
        <Link aria-label="My facebook" href="https://www.facebook.com/TuonNguyen1602/" target="_blank"><Facebook className="hover:text-primary cursor-pointer hover:duration-200 hover:ease-in-out" /></Link>
        <Link aria-label="My github" href="https://github.com/tuon1602" target="_blank"><Github className="hover:text-primary cursor-pointer hover:duration-200 hover:ease-in-out" /></Link>
      </div>
    </div>
  );
};

export default Footer;
