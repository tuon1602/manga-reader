import React from "react";
import { getSearchMangas } from "@/app/actions";
import { notFound } from "next/navigation";
import CardCustom from "@/app/Components/Card";

const SearchPage = async ({ params }: { params: { keyword: string } }) => {
  const data = await getSearchMangas(params.keyword);
  if (!data || data.status !== "success") {
    notFound();
  }
  return (
    <main className="z-10 ">
      <h1 className="mb-10 text-center text-4xl text-primary font-bold">
        Tìm kiếm
      </h1>
      {data?.data?.items.length > 0 ? (
        <section className="grid grid-cols-4 gap-10">
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
