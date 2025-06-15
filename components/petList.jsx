import React from "react";
import PetCard from "./pet-card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getPetItems } from "@/lib/api";

export default async function PetList() {
  const petItems = await getPetItems();

  return (
    <section className="py-4 md:py-8 lg:py-10 xl:py-12 !pb-0 font-sora">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* <p className="semibold font-manrope">{subheading}</p> */}
        <h2 className="mt-4 mb-2 text-2xl font-bold font-petrona text-pretty lg:text-4xl">
          Find Your Perfect Companion
        </h2>
      </div>
      <div className="container mt-6 mx-auto grid gap-x-2 md:gap-x-4 px-4 md:px-5 lg:px-6 grid-cols-2 gap-y-2 md:gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {petItems.map((item) => (
          <PetCard
            key={item._id}
            slug={`/pet/${item._id}`}
            petImage={item.images[0].url}
            petName={item.name}
            petCategory={item.category?.name}
            petGender={item.gender}
            petBreed={item.breed}
            petAge={item.age}
            petLocation={item.location}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button
          variant="outline"
          size="default"
          className="rounded-2xl text-sm">
          View More <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
