import React from "react";
import myAva from "/public/assets/images/ava.png";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "@/constants";
import Search from "./Search";
import { getCategories } from "../actions";
import Categories from "./Categories";
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <main className="fixed w-full z-50 border border-b-primary bg-background shadow-xl backdrop-blur top-0 left-0">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image src={myAva} alt="ava" width={100} height={100} />
          </Link>
          <div className="flex gap-20">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={`${link.route}`}
                className="text-black dark:text-white dark:hover:text-primary hover:text-primary hover:duration-200 hover:ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Categories propsCategory = {categories} />
        </div>
        <div className="flex items-center gap-20">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
