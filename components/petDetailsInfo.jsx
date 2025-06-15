import { Calendar, Info, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function PetDetailsInfo({
  name,
  breed,
  age,
  gender,
  location,
  description,
}) {
  return (
    <Card className="mb-4 p-2 gap-2 font-karla">
      <CardContent className="p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Info className="size-4 text-foreground" />
            <span className="text-sm lg:text-base font-semibold">Breed:</span>
            <span className="text-sm lg:text-base">{breed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-foreground" />
            <span className="text-sm lg:text-base font-semibold">Age:</span>
            <span className="text-sm lg:text-base">{age}</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="size-4 text-foreground" />
            <span className="text-sm lg:text-base font-semibold">Gender:</span>
            <span className="text-sm lg:text-base">{gender}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-foreground" />
            <span className="text-sm lg:text-base font-semibold">
              Location:
            </span>
            <span className="text-sm lg:text-base">{location}</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 font-petrona">
            About {name}
          </h3>
          <p className="text-foreground/80 text-sm lg:text-base">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
