import CardCustom from "@/app/Components/Card";
import { getListMangaByKeyword } from "@/app/actions";
import React from "react";
import PaginationCustom from "./_component/PaginationCustom";
import ScrollToTop from "@/app/Components/ScrollToTop";

import { Metadata, ResolvingMetadata } from "next";
import { IMAGE_SEO_URL } from "@/constants";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export function generateStaticParams() {
  return [
    { slug: ["truyen-moi", "1"] },
    { slug: ["truyen-moi", "2"] },
    { slug: ["truyen-moi", "3"] },
    { slug: ["sap-ra-mat", "1"] },
    { slug: ["sap-ra-mat", "2"] },
    { slug: ["sap-ra-mat", "3"] },
    { slug: ["dang-phat-hanh", "1"] },
    { slug: ["dang-phat-hanh", "2"] },
    { slug: ["dang-phat-hanh", "3"] },
    { slug: ["hoan-thanh", "1"] },
    { slug: ["hoan-thanh", "2"] },
    { slug: ["hoan-thanh", "3"] },
  ];
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getListMangaByKeyword(
    params.slug[0],
    parseInt(params.slug[1])
  );
  const homeSeo = res.data.seoOnPage;
  return {
    openGraph: {
      title: homeSeo.titleHead,
      description: homeSeo.descriptionHead,
      type: homeSeo.og_type,
      images: homeSeo.og_image.map((image: string) => IMAGE_SEO_URL + image),
    },
  };
}

const ListPage = async ({ params }: { params: { slug: string } }) => {
  const page = parseInt(params.slug[1]);
  const data = await getListMangaByKeyword(params.slug[0], page);
  return (
    <main className="z-10 overflow-hidden">
      <ScrollToTop />
      {data?.data && (
        <h1 className="mb-10 text-center 2xl:text-4xl md:text-3xl text-xl text-primary font-bold">
          {data?.data.titlePage}
        </h1>
      )}
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
          />
        ))}
      </section>
      <div className="mt-10">
        <PaginationCustom page={data?.data.params} slug={params.slug} />
      </div>
    </main>
  );
};

export default ListPage;
