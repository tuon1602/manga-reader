import React from 'react'
import { getMangaByCategory } from '@/app/actions';
import CardCustom from '@/app/Components/Card';
import PaginationCustom from './_component/PagninationCustom';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const page  = parseInt(params.slug[1]);
    const data = await getMangaByCategory(params.slug[0], page);
    return (
      <main className="z-10 overflow-hidden">
        {data?.data && (
          <h1 className="mb-10 text-center 2xl:text-4xl md:text-3xl text-xl text-primary font-bold">
            Thể loại: {data?.data.titlePage}
          </h1>
        )}
        <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
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