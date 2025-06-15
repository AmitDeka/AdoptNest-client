import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-12 pb-0">
      <div className="container mx-auto bg-accent">
        <div className="flex flex-col items-center p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-petrona font-bold md:mb-4 md:text-4xl lg:mb-6">
            Find Your New Best Friend
          </h3>
          <p className="mb-8 max-w-3xl font-karla text-muted-foreground lg:text-lg">
            Discover pets looking for their forever homes and make a difference
            in their lives.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button
              variant="outline"
              className="w-full sm:w-auto font-medium"
              asChild>
              <a href="https://www.shadcnblocks.com">List a Pet</a>
            </Button>
            <Button className="w-full sm:w-auto font-medium" asChild>
              <a href="/all">Browse Pets</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
