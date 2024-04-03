import { getMangaDetail } from "@/app/actions";
import React from "react";
import MangaDetail from "./_component/MangaDetail";
import { notFound } from "next/navigation";

const MangaDetailPage = async ({ params }: { params: { slug: string } }) => {
  const detailData = await getMangaDetail(params.slug);
  if (!detailData || detailData.status !== "success") {
    notFound();
  }
  return (
    <main>
      <MangaDetail mangaData={detailData.data.item}/>
    </main>
  );
};

export default MangaDetailPage;
