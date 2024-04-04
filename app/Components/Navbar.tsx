import React from "react";
import myAva from "/public/assets/images/ava.png";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "@/constants";
import Search from "./Search";
import { getCategories } from "../actions";
import Categories from "./Categories";
import MenuBar from "./MenuBar";
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <main className="fixed w-full z-40 border border-b-primary bg-background shadow-xl backdrop-blur top-0 left-0">
      <div className="w-full flex xl:justify-around justify-between container items-center py-2 md:p-0 gap-5">
        <div className="flex items-center xl:gap-10 2xl:gap-20">
          <Link href="/">
            <Image src={myAva} alt="ava" width={100} height={100} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"/>
          </Link>
          <div className="xl:flex xl:gap-10 2xl:gap-20 hidden">
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
          <div className="xl:block hidden">
            <Categories propsCategory={categories} />
          </div>
        </div>
        <div className="xl:hidden">
          <Search/>
        </div>
        <div className="xl:hidden block">
          <MenuBar />
        </div>
        <div className="xl:flex items-center xl:gap-5 2xl:gap-20 hidden">
          <div className="xl:block hidden">
            <Search />
          </div>
          <div className="xl:block hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
