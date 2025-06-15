import { Button } from "@/components/ui/button";
import PetCard from "@/components/pet-card";
import { getAllPetByCategory } from "@/lib/api";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function AllPet() {
  const allPet = await getAllPetByCategory();
  const data = allPet?.data || null;

  return (
    <section className="py-4 md:py-8 lg:py-10 xl:py-12 font-karla">
      <div className="container mx-auto flex flex-col px-4 items-center text-center">
        <h2 className="text-2xl font-bold text-pretty lg:text-4xl font-petrona">
          All Available Pets
        </h2>
        <p className="semibold mt-4 mb-2 font-karla">
          Browse all our pets available for adoption. Find your perfect
          companion organized by category.
        </p>
      </div>

      {data.map((item, index) => (
        <div
          className="container mx-auto mt-8 px-4 md:px-5 lg:px-6"
          key={index}>
          <div className="flex justify-between mb-3">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-petrona">
              {item.category.name}
            </h3>
            <Button asChild variant="outline">
              <Link href={`/category/${item.category.id}`}>
                View all {item.category.name} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-x-2 md:gap-x-4 grid-cols-2 gap-y-2 md:gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {item.pets.map((pet) => (
              <PetCard
                key={pet._id}
                slug={`/pet/${pet._id}`}
                petImage={pet.images[0].url}
                petName={pet.name}
                petGender={pet.gender}
                petBreed={pet.breed}
                petAge={pet.age}
                petLocation={pet.location}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
