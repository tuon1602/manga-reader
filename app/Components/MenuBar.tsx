"use client";

import { NavLinks } from "@/constants";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Drawer } from "vaul";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
// import { getCategories as fetchCategories } from "../actions";

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function MenuBar() {
  const [categoryData, setCategoryData] = useState<{
    data: { items: Category[] };
  } | null>(null);
  const [open, setOpen] = useState<Boolean>(false);
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categories = await fetch("/api/get-category");
        setCategoryData(await categories.json());
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategoriesData();
  }, []);
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Menu className="text-primary" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-background rounded-b-[10px] flex flex-col h-full max-md:w-[60%] w-[50%] mt-24 fixed bottom-0 right-0 z-50">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto text-black">
              <div className="flex flex-col gap-5">
                {NavLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={`${link.route}`}
                    className="text-primary dark:hover:text-primary hover:text-primary hover:duration-200 hover:ease-in-out"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2">
                  {open ? (
                    <div
                      className="flex gap-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <p className="text-primary">Thể loại</p>
                      <ChevronDown />
                    </div>
                  ) : (
                    <div
                      className="flex gap-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <p className="text-primary">Thể loại</p>
                      <ChevronUp />
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2 md:max-h-[450px] max-md:max-h-[150px] overflow-scroll">
                    {open &&
                      categoryData &&
                      categoryData?.data?.items.map((category, index) => (
                        <Link href={`/the-loai/${category.slug}/1`}>
                          <p className="hover:text-primary ease-in-out duration-300">
                            {category.name}
                          </p>
                        </Link>
                      ))}
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
