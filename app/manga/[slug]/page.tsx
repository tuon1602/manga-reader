import { getMangaDetail } from "@/app/actions";
import React from "react";
import MangaDetail from "./_component/MangaDetail";
import { notFound } from "next/navigation";

import { Metadata, ResolvingMetadata } from "next";
import { IMAGE_SEO_URL } from "@/constants";
import Suggestion from "./_component/Suggestion";
import ScrollToTop from "@/app/Components/ScrollToTop";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getMangaDetail(params.slug);
  const homeSeo = res.data.seoOnPage;

  return {
    title:"Tuon's Manga" +" "+ ":" +" " + homeSeo.titleHead,
    description:homeSeo.descriptionHead,
    openGraph: {
      title: homeSeo.titleHead,
      description: homeSeo.descriptionHead,
      type: homeSeo.og_type,
      images: homeSeo.seoSchema.image
    },
  };
}

const MangaDetailPage = async ({ params }: { params: { slug: string } }) => {
  const detailData = await getMangaDetail(params.slug);
  if (!detailData || detailData.status !== "success") {
    notFound();
  }
  console.log(detailData.data.item.category[0])
  return (
    <main>
      <ScrollToTop/>
      <MangaDetail mangaData={detailData.data.item}/>
      <Suggestion category={detailData.data.item.category[0]}/>
    </main>
  );
};

export default MangaDetailPage;
