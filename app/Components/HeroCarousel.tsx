"use client";
import { carouselItems } from "@/constants/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {carouselItems.map((carousel, index) => (
          <CarouselItem key={index}>
            <Card className="relative border-0">
              <Image
                src={carousel.imageUrl}
                alt=""
                width={1920}
                height={1080}
                className="object-cover w-full 2xl:h-[700px] max-md:h-[200px] md:h-[400px] dark:opacity-60"
              />
              <CardContent className="absolute bottom-[10%] max-md:bottom-0 left-0 space-y-5 max-md:space-y-1">
                <h1 className="text-primary xl:text-5xl md:text-4xl font-extrabold max-md:text-lg">
                  {carousel.name}
                </h1>
                <p className="text-xl text-white max-md:text-xs">
                  {carousel.description}
                </p>
                <div className="flex gap-5 max-md:flex-wrap max-md:gap-1">
                  <Button asChild className="">
                    <Link href={`/manga/${carousel.slug}`} target="_blank">
                      Xem ngay
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={`/the-loai/${carousel.categorySlug}/1`}
                      target="_blank"
                    >
                      Khám phá
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* <Image src={carousel.imageUrl} alt="" width={1920} height={1080} className="object-cover"/> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-xl:hidden">
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
