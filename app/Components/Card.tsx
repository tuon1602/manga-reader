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
      <Card className="max-h-content shadow">
        <CardHeader className="pt-0 px-0">
          <CardTitle className="w-full h-[400px] relative">
            <Image
              src={`${IMAGE_URL}${image}`}
              alt={`${name}`}
              loading="lazy"
              fill
              className="rounded-t-[0.75rem] z-[20] "
            />
          </CardTitle>
        </CardHeader>
        <CardHeader className="max-sm:pt-0">
          <CardTitle className="truncate text-xl max-sm:text-sm">{name}</CardTitle>
          {original_name.length > 0 ? (
            <CardDescription className="truncate max-sm:text-sm">
              {original_name}
            </CardDescription>
          ) : (
            <CardDescription className="truncate max-sm:text-sm">.</CardDescription>
          )}
        </CardHeader>
        <CardContent  className="max-sm:pt-0">
          <h2 className="truncate max-sm:text-sm">
            Trạng thái: <span className="text-primary font-bold">{status}</span>
          </h2>
          {lastestChapter && lastestChapter.map((item, index) => (
            <h3 key={index} className="mt-[5px] truncate max-sm:text-sm">
              Tập{" "}
              <span className="text-primary font-bold">
                {item.chapter_name}
              </span>
            </h3>
          ))}
          {author && <h2>Tác giá: <span className="text-primary font-bold truncate max-sm:text-sm">{author}</span></h2>}
          <span className="text-sm">
            Ngày đăng tải:{" "}
            <span className="text-primary font-bold truncate">
              {moment(updatedAt).format("DD-MM-YYYY")}
            </span>
          </span>
        </CardContent>
        <CardFooter className="flex flex-wrap text-sm gap-[10px]">
          {category.slice(0, 3).map((item, index) => (
            <p key={index} className="px-2 border border-primary rounded-3xl">
              {item.name}
            </p>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
