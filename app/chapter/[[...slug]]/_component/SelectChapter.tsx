"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getMangaDetail } from "@/app/actions";
import Link from "next/link";
import { getChapterId } from "@/helper";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface IProps {
  mangaSlug: string;
  currentChapter: string;
}

const SelectChapter = ({ mangaSlug, currentChapter }: IProps) => {
  const router = useRouter();
  const [mangaDetailsData, setMangaDetailsData] = useState<any[]>([]);

  // const handleSelectChapter = (chapterName:string,url:string,mangaSlug:string) => {
  //   router.push(`/chapter/${getChapterId(url)}/${mangaSlug}/${chapterName}`)
  // }
  const handleSelectChapter1 = (selectedChapter: string) => {
    const chapterNeedToFind = mangaDetailsData.find(
      (chapter, index) => chapter.chapter_name === selectedChapter
    );
    router.push(
      `/chapter/${getChapterId(
        chapterNeedToFind.chapter_api_data
      )}/${mangaSlug}/${chapterNeedToFind.chapter_name}`
    );
  };

  const handleGetPreviousChapter = () => {
    const chapterNeedToFind = mangaDetailsData.find(
      (chapter, index) => chapter.chapter_name == parseInt(currentChapter) - 1
    );
    router.push(
      `/chapter/${getChapterId(
        chapterNeedToFind.chapter_api_data
      )}/${mangaSlug}/${chapterNeedToFind.chapter_name}`
    );
  };
  const handleGetNextChapter = () => {
    const chapterNeedToFind = mangaDetailsData.find(
      (chapter, index) => chapter.chapter_name == parseInt(currentChapter) + 1
    );
    router.push(
      `/chapter/${getChapterId(
        chapterNeedToFind.chapter_api_data
      )}/${mangaSlug}/${chapterNeedToFind.chapter_name}`
    );
  };
  useEffect(() => {
    const getManga = async () => {
      const mangaData = await getMangaDetail(mangaSlug);
      if (!mangaData || mangaData.status != "success") {
        return (
          <Select>
            <SelectTrigger className="w-content min-w-[200px]">
              <SelectValue placeholder="Select Chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">
                  Cant see any chapters, try again
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        );
      }
      setMangaDetailsData(mangaData?.data?.item.chapters[0]?.server_data);
    };
    getManga();
  }, [mangaSlug]);

  return (
    <main className="flex gap-4">
      {mangaDetailsData[0]?.chapter_name === currentChapter ? (
        <Button disabled className="cursor-not-allowed">
          Chap Trước
        </Button>
      ) : (
        <Button onClick={handleGetPreviousChapter}>Chap trước</Button>
      )}
      <Select onValueChange={handleSelectChapter1}>
        <SelectTrigger className="w-content min-w-[200px]">
          <SelectValue placeholder={`Chapter ${currentChapter}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Chọn Tập</SelectLabel>
            {mangaDetailsData?.map((chapter: any, index: any) => (
              // <Link
              //   href={`/chapter/${getChapterId(
              //     chapter.chapter_api_data
              //   )}/${mangaSlug}/${chapter.chapter_name}`}
              // >
              //   Chapter {chapter.chapter_name}
              // </Link>
              <SelectItem key={index} value={chapter.chapter_name}>
                Chapter {chapter.chapter_name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {mangaDetailsData[mangaDetailsData.length - 1]?.chapter_name ===
      currentChapter ? (
        <Button disabled className="cursor-not-allowed">
          Chap tiếp
        </Button>
      ) : (
        <Button onClick={handleGetNextChapter}>Chap tiếp</Button>
      )}
    </main>
  );
};

export default SelectChapter;

// onClick={()=>handleSelectChapter(chapter.chapter_name,chapter.chapter_api_data,mangaSlug)}
