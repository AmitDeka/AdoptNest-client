import { Button } from "@/components/ui/button";
import PetCard from "@/components/pet-card";
import { getPetItems } from "@/lib/api";
import Image from "next/image";

export default async function FavouriteSection() {
  const petItems = await getPetItems();

  return (
    <div className="border mx-auto rounded-2xl overflow-hidden p-4 md:p-5 lg:p-6">
      <h5 className="mb-1 text-xl font-petrona font-bold md:mb-2 md:text-2xl lg:text-3xl lg:mb-3">
        Your Favorite Pets
      </h5>

      <div className="flex justify-center gap-y-4 items-center flex-col mt-10 mx-auto text-center">
        <Image src="/no-data.svg" alt="No Data" width={230} height={230} />
        <h4 className="text-xl font-petrona mt-2 font-bold text-pretty lg:text-xl">
          No pets found in your favourites.
        </h4>
      </div>

      <div className="grid w-full mt-10 gap-x-2 md:gap-x-4 grid-cols-2 gap-y-2 md:gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    </div>
  );
}
