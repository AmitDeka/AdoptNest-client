import PetDetailsContact from "@/components/petDetailsContact";
import PetDetailsInfo from "@/components/petDetailsInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPetDetails } from "@/lib/api";
import { Heart, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function PetPage({ params: asyncParams }) {
  const params = await asyncParams;
  const petDetails = await getPetDetails(params.slug);
  const pet = petDetails?.petData?.pet || null;

  return (
    <section className="py-4 md:py-8 lg:py-10 xl:py-12 font-karla">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 px-2 md:px-4 lg:px-6">
            <Carousel>
              <CarouselContent>
                {pet.images.map((items) => (
                  <CarouselItem key={items._id}>
                    <AspectRatio ratio={1 / 1}>
                      <Image
                        src={items.url}
                        alt="Image"
                        fill
                        priority
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 bg-background" />
              <CarouselNext className="absolute -right-4 bg-background" />
            </Carousel>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-start mb-2 md:mb-3">
              <div className="flex flex-col gap-3">
                <Link href={`/category/${pet.category._id}`}>
                  <Badge className="text-karla">{pet.category.name}</Badge>
                </Link>
                <h1 className="text-4xl font-bold font-petrona">{pet.name}</h1>
              </div>
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>

            <PetDetailsInfo
              name={pet.name}
              breed={pet.breed}
              age={pet.age}
              gender={pet.gender}
              location={pet.location}
              description={pet.description}
            />
            <PetDetailsContact
              creatorName="a"
              creatorPhone="a"
              creatorEmail="a"
              creatorWhatsapp="a"
            />

            <div className="mt-6">
              <Link href="/">
                <Button variant="outline" className="w-full">
                  <HomeIcon className="size-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
