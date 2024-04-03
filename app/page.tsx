import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { getHomeDetail } from "./actions";
import { notFound } from "next/navigation";
import Card from "./Components/Card";

export default async function Home() {
  const data = await getHomeDetail();
  if (!data || data.status !== "success") {
    notFound();
  }
  return (
    <main className="z-10 ">
      <h1 className="mb-10 text-center text-4xl text-primary font-bold">Cập nhật mới nhất</h1>
      <section className="grid grid-cols-4 gap-10">
        {data?.data?.items?.map((manga: any, index: any) => (
          <Card key={manga._id} route={manga.slug} status={manga.status} name={manga.name} original_name={manga.origin_name[0]} image={manga.thumb_url} category={manga.category} updatedAt={manga.updatedAt} lastestChapter={manga.chaptersLatest}/>
        ))}
      </section>
    </main>
  );
}
