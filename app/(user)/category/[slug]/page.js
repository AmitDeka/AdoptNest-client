import { Button } from "@/components/ui/button";
import PetCard from "@/components/pet-card";
import { getCategoryDetails, getPetsByCategory } from "@/lib/api";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default async function CategoryPage({
  params: asyncParams,
  searchParams,
}) {
  const params = await asyncParams;

  const page = Number(searchParams.page) || 1;
  const limit = 20;

  const { petsData } = await getPetsByCategory(params.slug, page, limit);
  const categoryDetails = await getCategoryDetails(params.slug);
  const pets = petsData?.pets || [];
  const totalPages = petsData?.totalPages || 1;

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <Pagination>
        <PaginationContent>
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`/category/${params.slug}?page=${page - 1}`}
              />
            </PaginationItem>
          )}

          {startPage > 1 && (
            <>
              <PaginationItem>
                <PaginationLink href={`/category/${params.slug}?page=1`}>
                  1
                </PaginationLink>
              </PaginationItem>
              {startPage > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {pageNumbers.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href={`/category/${params.slug}?page=${p}`}
                isActive={p === page}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href={`/category/${params.slug}?page=${totalPages}`}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {page < totalPages && (
            <PaginationItem>
              <PaginationNext
                href={`/category/${params.slug}?page=${page + 1}`}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <>
      <section className="py-4 pb-0 font-karla">
        <div className="container mx-auto px-4 md:px-5 lg:px-6">
          <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-accent bg-center bg-no-repeat bg-cover p-8 py-16 md:rounded-xl lg:p-16 lg:py-24 bg-[url('/negroni.jpg')]">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold font-petrona md:text-4xl lg:text-6xl">
                {categoryDetails.category.name}
              </h3>
              <p className="max-w-xl text-muted-foreground lg:text-lg">
                {categoryDetails.category.description}
              </p>
            </div>
            <div>
              <Button
                asChild
                size="lg"
                variant="default"
                className="text-foreground text-sm">
                <Link href="/" className="text-foreground">
                  Browse All {categoryDetails.category.name}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 font-karla">
        {pets.length === 0 ? (
          <div className="container flex justify-center gap-y-4 items-center flex-col  mt-10 mx-auto text-center">
            <Image src="/no-data.svg" alt="No Data" width={230} height={230} />
            <h4 className="text-xl mt-2 font-bold text-pretty lg:text-2xl font-petrona">
              No pets found in this category.
            </h4>
            <div>
              <Button asChild variant="default">
                <Link href="/" className="inline-flex items-center text-base">
                  Go to Home
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="container mx-auto flex flex-col items-center text-center">
              <h2 className="mt-4 mb-2 text-2xl font-bold text-pretty lg:text-4xl font-petrona">
                Available {categoryDetails.category.name} for Adoption
              </h2>
            </div>
            <div className="container mt-6 mx-auto grid gap-x-2 md:gap-x-4 px-4 md:px-5 lg:px-6 grid-cols-2 gap-y-2 md:gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {pets.map((item) => (
                <PetCard
                  key={item._id}
                  slug={`/pet/${item._id}`}
                  petImage={item.images[0].url}
                  petName={item.name}
                  petGender={item.gender}
                  petBreed={item.breed}
                  petAge={item.age}
                  petLocation={item.location}
                />
              ))}
            </div>
            <div className="container mt-10 mx-auto">{renderPagination()}</div>
          </>
        )}
      </section>
    </>
  );
}
