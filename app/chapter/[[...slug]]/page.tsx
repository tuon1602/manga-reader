import { getImageDetail } from "@/app/actions";
import { notFound } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SelectChapter from "./_component/SelectChapter";
import Image from "next/image";
import ScrollToTop from "@/app/Components/ScrollToTop";

const ChapterPage = async ({ params }: { params: { slug: string } }) => {
  const imageData = await getImageDetail(params.slug[0]);
  // const imagePath = imageData.data.domain_cdn + "/" + imageData.data.item.chapter_path
  if (!imageData || imageData.status !== "success") {
    notFound();
  }
  return (
    <main className="min-h-[60vh] flex flex-col items-center">
      <ScrollToTop />
      <Breadcrumb className="flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-primary">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="hover:text-primary"
              href={`/manga/${params.slug[1]}`}
            >
              {params.slug[1]}{" "}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary">
              Chapter {params.slug[2]}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-10">
        <SelectChapter
          mangaSlug={params.slug[1]}
          currentChapter={params.slug[2]}
        />
      </div>
      <div className="w-full flex flex-col items-center">
        {imageData.data.item.chapter_image.map((img: any, index: number) => (
          <Image
            key={index}
            src={`${imageData.data.domain_cdn}/${imageData.data.item.chapter_path}/${img.image_file}`}
            alt={`${imageData.data.item.comic_name}`}
            loading="lazy"
            width={768}
            height={500}
            className="object-contain"
          />
        ))}
      </div>
      <div className="my-10">
        <SelectChapter
          mangaSlug={params.slug[1]}
          currentChapter={params.slug[2]}
        />
      </div>
    </main>
  );
};

export default ChapterPage;
