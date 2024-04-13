import React from "react";
import { IMAGE_URL } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface Chapter {
  filename: string;
  chapter_name: string;
  chapter_title: string;
  chapter_api_data: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface IProps {
  route: string;
  status?: string;
  name: string;
  original_name: Array<string>;
  author?:string,
  image: string;
  category: Category[];
  updatedAt: string;
  lastestChapter?: Chapter[];
}

export default function CardCustom({
  route,
  status,
  name,
  original_name,
  image,
  category,
  updatedAt,
  lastestChapter,
  author
}: IProps) {
  return (
    <Link href={`/manga/${route}`}>
      <Card className="max-h-content shadow max-sm:border-0">
        <CardHeader className="py-0 px-0">
          <CardTitle className="w-full xl:h-[300px] max-sm:h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] relative">
            <Image
              src={`${IMAGE_URL}${image}`}
              alt={`${name}`}
              loading="lazy"
              fill
              className="rounded-t-[0.75rem] max-md:rounded-none z-[20]"
            />
          </CardTitle>
        </CardHeader>
        <CardHeader className="max-sm:py-1 max-sm:px-0 px-2">
          <CardTitle className="truncate text-lg max-sm:text-xs">{name}</CardTitle>
          {original_name.length > 0 ? (
            <CardDescription className="truncate text-sm max-sm:text-xs">
              {original_name}
            </CardDescription>
          ) : (
            <CardDescription className="truncate max-sm:text-xs">.</CardDescription>
          )}
        </CardHeader>
        <CardContent  className="max-sm:px-0 pb-2 px-2 text-sm">
          <h3 className="truncate max-sm:hidden">
            Trạng thái: <span className="text-primary font-bold">{status}</span>
          </h3>
          {lastestChapter && lastestChapter.map((item, index) => (
            <h3 key={index} className="mt-[5px] truncate max-sm:text-xs">
              Tập{" "}
              <span className="text-primary font-bold max-sm:text-xs">
                {item.chapter_name}
              </span>
            </h3>
          ))}
          {author && <h2>Tác giá: <span className="text-primary font-bold truncate max-sm:text-sm max-sm:hidden">{author}</span></h2>}
          <span className="text-sm max-sm:hidden">
            Ngày đăng tải:{" "}
            <span className="text-primary font-bold truncate">
              {moment(updatedAt).format("DD-MM-YYYY")}
            </span>
          </span>
        </CardContent>
        <CardFooter className="max-sm:hidden flex flex-wrap text-sm gap-2 px-2 max-lg:px-1">
          {category.slice(0, 2).map((item, index) => (
            <p key={index} className="px-2 border border-primary rounded-3xl max-lg:text-xs max-lg:gap-1 ">
              {item.name}
            </p>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
