import CardCustom from "@/app/Components/Card";
import { getMangaByCategory } from "@/app/actions";
import React from "react";

type SlugProps = {
  id: string;
  name: string;
  slug: string;
};
type IProps = {
  category: SlugProps;
};

const Suggestion = async ({ category }: IProps) => {
  const page = Math.floor(Math.random() * 10) + 1;
  const data = await getMangaByCategory(category.slug, page);
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="flex items-center gap-5">
        <p className="text-2xl font-bold text-primary uppercase">
          Có thể bạn sẽ thích
        </p>
      </div>
      <section className="mt-5 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-4 gap-3">
        {data?.data?.items?.slice(0, 6).map((manga: any, index: any) => (
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
    </div>
  );
};

export default Suggestion;
