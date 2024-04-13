import React from 'react'
import { getMangaByCategory } from '@/app/actions';
import CardCustom from '@/app/Components/Card';
import PaginationCustom from './_component/PagninationCustom';
import ScrollToTop from '@/app/Components/ScrollToTop';

import { Metadata, ResolvingMetadata } from "next";
import { IMAGE_SEO_URL } from '@/constants';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getMangaByCategory(params.slug[0], parseInt(params.slug[1]));
  const homeSeo = res.data.seoOnPage;
  return {
    title:homeSeo.titleHead,
    openGraph: {
      title: homeSeo.titleHead,
      type: homeSeo.og_type,
      url:`/` + homeSeo.og_url + `/${params.slug[1]}`,
      images: homeSeo.og_image.map((image:string)=> IMAGE_SEO_URL+ image)
    },
  };
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const page  = parseInt(params.slug[1]);
    const data = await getMangaByCategory(params.slug[0], page);
    return (
      <main className="z-10 overflow-hidden">
        <ScrollToTop/>
        {data?.data && (
          <h1 className="mb-10 text-center 2xl:text-4xl md:text-3xl text-xl text-primary font-bold">
            Thể loại: {data?.data.titlePage}
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
            <PaginationCustom page={data?.data.params} slug={params.slug}/>
        </div>
      </main>
    );
}

export default CategoryPage