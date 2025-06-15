import CTA from "@/components/cta";
import HomeBanner from "@/components/homeBanner";
import { PetCategory } from "@/components/petCategory";
import PetList from "@/components/petList";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <PetCategory />
      <PetList />
      <CTA />
    </>
  );
}
