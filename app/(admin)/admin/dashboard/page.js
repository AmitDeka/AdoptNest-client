import { PetByCategoryChart } from "@/components/admin/dashboard/charts/petByCategory";
import UserTable from "@/components/admin/dashboard/tables/userTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  ListChecksIcon,
  PawPrintIcon,
  PlusCircleIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShieldPlusIcon,
  TicketIcon,
  User2Icon,
  Users2Icon,
} from "lucide-react";
import Link from "next/link";

export default async function AdminHome() {
  return (
    <>
      {/* Summary  */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/">
          <Card className="gap-0 p-4 rounded-2xl">
            <CardHeader className="px-2 gap-0">
              <CardTitle className="flex text-base text-foreground/70 font-karla items-center justify-between">
                Total Pets
                <div className="size-9 border bg-accent rounded-full flex justify-center items-center">
                  <PawPrintIcon className="size-5 text-green-500" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <h3 className="text-3xl font-petrona">1</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/">
          <Card className="gap-0 p-4 rounded-2xl">
            <CardHeader className="px-2 gap-0">
              <CardTitle className="flex text-base text-foreground/70 font-karla items-center justify-between">
                Pending Approvals
                <div className="size-9 border bg-accent rounded-full flex justify-center items-center">
                  <ShieldPlusIcon className="size-5 text-fuchsia-500" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <h3 className="text-3xl font-petrona">1</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/">
          <Card className="gap-0 p-4 rounded-2xl">
            <CardHeader className="px-2 gap-0">
              <CardTitle className="flex text-base text-foreground/70 font-karla items-center justify-between">
                Total Category
                <div className="size-9 border bg-accent rounded-full flex justify-center items-center">
                  <ListChecksIcon className="size-5 text-amber-500" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <h3 className="text-3xl font-petrona">1</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/">
          <Card className="gap-0 p-4 rounded-2xl">
            <CardHeader className="px-2 gap-0">
              <CardTitle className="flex text-base text-foreground/70 font-karla items-center justify-between">
                Total Users
                <div className="size-9 border bg-accent rounded-full flex justify-center items-center">
                  <User2Icon className="size-5 text-cyan-500" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <h3 className="text-3xl font-petrona">1</h3>
            </CardContent>
          </Card>
        </Link>
      </div>
      {/* Pending approval and pet by category  */}
      <div className="flex space-x-4 mt-6">
        <div className="lg:w-[70%]">
          <Card className="flex flex-col rounded-2xl font-karla">
            <CardHeader className="items-center pb-0 flex justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle className="font-petrona text-lg">
                  Pending Approvals
                </CardTitle>
                <CardDescription>
                  Pet submissions awaiting your review
                </CardDescription>
              </div>
              <div>
                <Button asChild>
                  <Link href="/">
                    View All <ArrowRight />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">a s</CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm"></CardFooter> */}
          </Card>
        </div>
        <div className="lg:w-[30%]">
          <PetByCategoryChart />
        </div>
      </div>
      {/* recent action and quick actions */}
      <div className="flex space-x-4 mt-6">
        <div className="lg:w-3/5">
          <Card className="flex flex-col rounded-2xl font-karla">
            <CardHeader className="items-center pb-0 flex justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle className="font-petrona text-lg">
                  Recent Users
                </CardTitle>
                <CardDescription>Newly registered users </CardDescription>
              </div>
              <div>
                <Button asChild>
                  <Link href="/">
                    View All <ArrowRight />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <UserTable />
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-2/5">
          <Card className="flex flex-col rounded-2xl font-karla">
            <CardHeader className="items-center pb-0">
              <CardTitle className="font-petrona text-lg">
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <PlusCircleIcon className="size-5 text-green-400" />
                    </div>
                    Approve a Pet
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <SettingsIcon className="size-5 text-indigo-400" />
                    </div>
                    Manage Categories
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <Users2Icon className="size-5 text-pink-400" />
                    </div>
                    User Management
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <TicketIcon className="size-5 text-yellow-400" />
                    </div>
                    Add new Banner
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <ShieldCheckIcon className="size-5 text-purple-400" />
                    </div>
                    Create an Admin
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-2 shadow-none">
                  <Link href="">
                    <div className="size-9 bg-accent/80 rounded-full flex justify-center items-center">
                      <PawPrintIcon className="size-5 text-cyan-400" />
                    </div>
                    View all Pets
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
