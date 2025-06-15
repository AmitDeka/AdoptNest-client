import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCategoryItems } from "@/lib/api";
import Link from "next/link";

export default async function PetCategory() {
  const categoryItems = await getCategoryItems();
  return (
    <section className="py-4 md:py-8 lg:py-10 xl:py-12 !pb-0 font-sora">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* <p className="semibold font-manrope">{subheading}</p> */}
        <h2 className="mt-4 mb-2 text-2xl font-petrona font-bold text-pretty lg:text-4xl">
          Browse by Category
        </h2>
      </div>
      <div className="container mt-6 mx-auto grid gap-x-2 grid-cols-4 gap-y-4 md:grid-cols-6 lg:grid-cols-8">
        {categoryItems.map((item, index) => (
          <Link href={`/category/${item._id}`} key={index}>
            <div key={index} className="flex flex-col items-center">
              <Avatar className="mb-2 size-14 border border-primary lg:size-22 p-2 lg:p-4">
                <AvatarImage src={item.icon?.url} alt={item.name} />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <p className="text-center font-bold font-karla truncate text-sm lg:text-base">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { PetCategory };
