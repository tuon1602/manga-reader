"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategories } from "../actions";

import React, { useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Categories = (propsCategory:any) => {
  const router = useRouter()

  const handleSelect = (slug:string) =>{
    router.push(`/the-loai/${slug}/1`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Thể loại</DropdownMenuTrigger>
      <DropdownMenuContent className="xl:w-[400px] max-md:w-[200px] mt-4 max-h-[500px] overflow-scroll">
        {propsCategory.propsCategory?.data?.items.map((category: any, index: number) => (
          <DropdownMenuItem key={category._id} onSelect={()=>handleSelect(category.slug)}>
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Categories;
