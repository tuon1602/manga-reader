import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { getHomeDetail } from "./actions";
import { notFound } from "next/navigation";
import Card from "./Components/Card";
import HeroCarousel from "./Components/HeroCarousel";

export async function generateMetaData() {}

export default async function Home() {
  const data = await getHomeDetail();
  if (!data || data.status !== "success") {
    notFound();
  }
  return (
    <main className="z-10 ">
      <HeroCarousel />
      <h1 className="mb-10 text-center 2xl:text-4xl md:text-3xl text-xl text-primary font-bold mt-10">
        Cập nhật mới nhất
      </h1>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10">
        {data?.data?.items?.map((manga: any, index: any) => (
          <Card
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
    </main>
  );
}
