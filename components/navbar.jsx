// "use client";

import { LogOutIcon, MenuIcon, User2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { getCategoryItems } from "@/lib/api";
import { getCurrentUser } from "@/lib/auth";

export default async function Navbar() {
  const categoryItems = await getCategoryItems();
  const user = await getCurrentUser();

  console.log("user data :", user);

  // const category = [
  //   {
  //     title: "Dashboard",
  //     href: "#",
  //   },
  //   {
  //     title: "Analytics",
  //     href: "#",
  //   },
  //   {
  //     title: "Settings",
  //     href: "#",
  //   },
  //   {
  //     title: "Integrations",
  //     href: "#",
  //   },
  //   {
  //     title: "Storage",
  //     href: "#",
  //   },
  //   {
  //     title: "Support",
  //     href: "#",
  //   },
  // ];

  return (
    <header className="container py-4 bg-background px-4 md:px-5 lg:px-6 sticky top-0 z-50 mx-auto">
      <nav className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="max-h-8 md:max-h-10" alt="Logo" />
          <span className="text-lg md:text-xl lg:text-2xl font-bold font-petrona">
            Adopt<span className="text-primary">Nest</span>
          </span>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/all"
                className={navigationMenuTriggerStyle()}>
                All Pets
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] grid-cols-2 p-3">
                  {categoryItems.map((items, index) => (
                    <NavigationMenuLink
                      href={`/category/${items._id}`}
                      key={index}
                      className="rounded-md p-3 flex items-center transition-colors hover:bg-muted/70">
                      <div
                        key={items.name}
                        className="flex items-center space-x-2">
                        <Image
                          src={items.icon?.url}
                          alt={items.name}
                          width={20}
                          height={20}
                          loading="lazy"
                          className="size-5"
                        />
                        <p className="font-regular mt-px text-base font-karla text-foreground/90">
                          {items.name}
                        </p>
                      </div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" asChild>
            <Link href="/pet-submit">Submit a Pet</Link>
          </Button>
          {user ? (
            <Button asChild variant="destructive">
              <Link href="/auth/login">
                <LogOutIcon className="size-4" />
                Logout
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/auth/login">
                <User2 className="size-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-screen overflow-auto">
            <SheetHeader>
              <SheetTitle>
                <a
                  href="https://www.shadcnblocks.com"
                  className="flex items-center gap-2">
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                    className="max-h-8"
                    alt="Shadcn UI Navbar"
                  />
                  <span className="text-lg font-semibold tracking-tighter">
                    Shadcnblocks.com
                  </span>
                </a>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col p-4">
              <Accordion type="single" collapsible className="mt-4 mb-2">
                <AccordionItem value="solutions" className="border-none">
                  <AccordionTrigger className="text-base hover:no-underline">
                    Category
                  </AccordionTrigger>
                  {/* <AccordionContent>
                    <div className="grid md:grid-cols-2">
                      {category.map((items, index) => (
                        <a
                          href={items.href}
                          key={index}
                          className="rounded-md p-3 transition-colors hover:bg-muted/70">
                          <div key={items.title}>
                            <p className="mb-1 font-semibold text-foreground">
                              {items.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {items.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </AccordionContent> */}
                </AccordionItem>
              </Accordion>
              <div className="flex flex-col gap-6">
                <a href="#" className="font-medium">
                  Templates
                </a>
                <a href="#" className="font-medium">
                  Blog
                </a>
                <a href="#" className="font-medium">
                  Pricing
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Button variant="outline">Sign in</Button>
                <Button>Start for free</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
