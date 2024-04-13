import React from "react";
import { getSearchMangas } from "@/app/actions";
import { notFound } from "next/navigation";
import CardCustom from "@/app/Components/Card";
import ScrollToTop from "@/app/Components/ScrollToTop";

import { Metadata, ResolvingMetadata } from "next";
import { IMAGE_SEO_URL } from '@/constants';

type Props = {
  params: { keyword: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getSearchMangas(params.keyword);
  const homeSeo = res.data.seoOnPage;
  return {
    title:homeSeo.titleHead,
    openGraph: {
      title: homeSeo.titleHead,
      type: homeSeo.og_type,
      images: homeSeo.og_image.map((image:string)=> IMAGE_SEO_URL+ image)
    },
  };
}

const SearchPage = async ({ params }: { params: { keyword: string } }) => {
  const data = await getSearchMangas(params.keyword);
  if (!data || data.status !== "success") {
    notFound();
  }
  return (
    <main className="z-10 ">
      <ScrollToTop/>
      <h1 className="mb-10 text-center 2xl:text-4xl md:text-3xl text-xl text-primary font-bold">
        Tìm kiếm
      </h1>
      {data?.data?.items.length > 0 ? (
        <section className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-4 gap-3">
          {data?.data?.items?.map((manga: any, index: any) => (
            <CardCustom
              key={manga._id}
              route={manga.slug}
              status={manga.status}
              name={manga.name}
              original_name={manga.origin_name[0]}
              image={manga.thumb_url}
              category={manga.category}
              updatedAt={manga.updatedAt}
              lastestChapter={manga.chaptersLatest}
              author={manga.author[0]}
            />
          ))}
        </section>
      ) : (
        <section className="min-h-[60vh] flex justify-center items-center">Có vẻ như manga của bạn không tìm thấy rồi :( </section>
      )}
    </main>
  );
};

export default SearchPage;
