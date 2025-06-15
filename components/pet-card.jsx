import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

export default function PetCard({
  slug,
  petImage,
  petName,
  petCategory,
  petGender,
  petBreed,
  petAge,
  petLocation,
}) {
  return (
    <Card className="overflow-hidden rounded-xl pt-0 pb-0 gap-y-0 transition-all hover:shadow font-karla">
      <div className="relative">
        <Link href={slug}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={petImage || "/default_no_animal.jpg"}
              alt={petName}
              width={300}
              height={300}
              priority
              className="h-full w-full object-cover transition-transform hover:scale-110"
            />
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 rounded-full bg-background/80 backdrop-blur-sm text-red-500">
          <Heart className="h-5 w-5 fill-current" />
          {/* <span className="sr-only">
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </span> */}
        </Button>
        {petCategory && (
          <Badge className="absolute left-3 top-3 text-foreground font-medium ">
            {petCategory}
          </Badge>
        )}
      </div>
      <CardContent className="p-2 md:p-3 lg:p-4 lg:pb-2">
        <Link href={slug}>
          <h3 className="text-xl lg:text-2xl font-bold mb-1 font-petrona hover:underline line-clamp-1">
            {petName}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-1">
          <span className="font-medium">Gender:</span> {petGender}
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          <span className="font-medium">Breed:</span> {petBreed}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Age:</span> {petAge}
        </p>
      </CardContent>
      <CardFooter className="p-2 md:p-3 lg:p-4 lg:pt-2 flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <p className="text-sm text-muted-foreground line-clamp-1">
          {petLocation}
        </p>
        <Link href={slug} className="mt-2 md:mt-0">
          <Button variant="outline" size="sm" className="rounded-2xl text-sm">
            View Details <ArrowRight className="size-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
