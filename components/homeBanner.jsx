import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { getBannerItems } from "@/lib/api";

export default async function HomeBanner() {
  const bannerItems = await getBannerItems();

  return (
    <section className="container px-4 md:px-5 lg:px-6 mt-4 mx-auto">
      <Carousel className="w-full relative">
        <CarouselContent>
          {bannerItems.map((items, index) => (
            <CarouselItem key={index}>
              <Link href={items.link}>
                <div className="w-full hidden lg:block">
                  <AspectRatio ratio={3 / 1}>
                    <Image
                      src={items.image?.url}
                      alt="Image"
                      fill
                      priority
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="w-full lg:hidden">
                  <AspectRatio ratio={2 / 1}>
                    <Image
                      src={items.image?.url}
                      alt="Image"
                      fill
                      priority
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 sm:left-0 md:left-2 lg:left-4 bg-background" />
        <CarouselNext className="absolute -right-2 sm:right-0 md:right-2 lg:right-4 bg-background" />
      </Carousel>
    </section>
  );
}
