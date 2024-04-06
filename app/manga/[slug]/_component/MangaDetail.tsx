"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import moment from "moment";
import { ArrowDown01, ArrowUp10 } from "lucide-react";
import { getChapterId } from "@/helper";
import ScrollToTop from "@/app/Components/ScrollToTop";

const MangaDetail = (mangaData: any) => {
  const [sorted, setSorted] = useState<Boolean>(true);
  const data = mangaData.mangaData;
  return (
    <>
      <ScrollToTop />
      {mangaData ? (
        <main className="">
          <section className="flex flex-wrap max-md:gap-5 gap-20 md:grid md:grid-cols-1 xl:flex">
            <div>
              <Image
                src={`${IMAGE_URL}${data.thumb_url}`}
                alt={`${data.name}`}
                width={400}
                height={100}
                loading="lazy"
                className="md:w-full xl:w-[400px]"
              />

              <div className="flex justify-end mt-2">
                <Link
                  href={`/chapter/${getChapterId(
                    data.chapters[0].server_data[0].chapter_api_data
                  )}/${data.slug}/1`}
                  target="_blank"
                  className="bg-primary rounded-sm p-2 w-full text-center text-white"
                >
                  Đọc chuyện
                </Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col mt-5 space-y-2">
              <h1 className="font-bold 2xl:text-4xl md:text-3xl text-xl text-primary text-center">
                {data.name}
              </h1>
              <h2 className="text-slate-500 text-md text-center">
                Tên khác: {data.origin_name[0]}
              </h2>
              <div className="space-y-5">
                <p className="text-md">
                  Trạng thái:{" "}
                  <span className="text-primary">{data.status}</span>
                </p>
                <p className="text-md">
                  Tác giả:{" "}
                  <span className="text-primary">{data.author[0]}</span>
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <p>Thể loại: </p>
                  {data.category.map((item: any, index: any) => (
                    <>
                      <Link key={item.id} href={`/the-loai/${item.slug}/1`}>
                        <Button>{item.name}</Button>
                      </Link>
                    </>
                  ))}
                </div>
                <p>
                  Thời gian cập nhật lần cuối:{" "}
                  <span className="text-primary">
                    {moment(data.updatedAt).format("DD-MM-YYYY")}
                  </span>
                </p>
                <p className="leading-6 border p-4 border-primary rounded-sm">
                  {data.content.replace(/<\/?p>/g, "")}
                </p>
              </div>
            </div>
          </section>
          <section className="mt-20">
            <div className="flex justify-center flex-col items-center">
              <div className="flex items-center gap-5">
                <p className="text-2xl font-bold text-primary uppercase">
                  Danh sách tập
                </p>
                {sorted ? (
                  <ArrowUp10
                    className="cursor-pointer"
                    onClick={() => setSorted(!sorted)}
                  />
                ) : (
                  <ArrowDown01
                    className="cursor-pointer"
                    onClick={() => setSorted(!sorted)}
                  />
                )}
              </div>

              <div className="w-content min-w-[400px] max-h-[400px] overflow-auto py-2 px-5 border mt-5 grid grid-col-1  gap-2">
                {
                  sorted
                    ? data.chapters[0].server_data
                        .slice()
                        .reverse()
                        .map((chapter: any, index: any) => (
                          <Link
                            key={index}
                            href={`/chapter/${getChapterId(
                              chapter.chapter_api_data
                            )}/${data.slug}/${chapter.chapter_name}`}
                            className="visited:text-primary"
                          >
                            <span>
                              {data.name} - Chapter {chapter.chapter_name}
                            </span>
                          </Link>
                        ))
                    : data.chapters[0].server_data.map(
                        (chapter: any, index: any) => (
                          <Link
                            key={index}
                            href={`/chapter/${getChapterId(
                              chapter.chapter_api_data
                            )}/${data.slug}/${chapter.chapter_name}`}
                            className="visited:text-primary"
                          >
                            <span>
                              {data.name} - Chapter {chapter.chapter_name}
                            </span>
                          </Link>
                        )
                      )
                  // Render the unsorted version here
                }
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div>not found</div>
      )}
    </>
  );
};

export default MangaDetail;
