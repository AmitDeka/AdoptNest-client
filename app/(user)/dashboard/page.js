import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellIcon, HeartIcon, PlusCircleIcon } from "lucide-react";
import AccountSection from "./account-section";
import PasswordSection from "./password-section";
import FavouriteSection from "./favourite-section";
import NotificationSection from "./notification-section";

export default function DashboardPage() {
  return (
    <section className="container py-4 font-karla px-4 md:px-5 lg:px-6 mx-auto">
      <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl lg:mb-6 font-petrona">
        Account Dashboard
      </h2>
      <div className="grid border rounded-2xl overflow-hidden">
        <div className="flex gap-x-6 items-center p-3 bg-accent/50 md:p-4 lg:p-6">
          <Avatar className="size-18 lg:size-24 border-2">
            <AvatarImage src="/pic-profile.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-bold font-petrona md:text-xl lg:text-2xl">
              Amit Deka
            </h3>
            <p className="text-sm lg:text-base text-foreground/80 font-manrope font-semibold">
              amit@mail.com
            </p>
            <p className="text-sm lg:text-base text-muted-foreground font-manrope">
              Member since January 2025
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 p-3 md:p-4 lg:p-6 ">
          <div className="flex space-y-2 flex-col items-center border-r">
            <div className="size-9 lg:size-10 rounded-full flex items-center justify-center bg-primary/10">
              <PlusCircleIcon className="size-4 lg:size-5" />
            </div>
            <div className="text-center">
              <p className="text-sm lg:text-base">Pet Added</p>
              <h4 className="font-semibold text-lg font-petrona">3</h4>
            </div>
          </div>
          <div className="flex space-y-2 flex-col items-center border-r">
            <div className="size-9 lg:size-10 rounded-full flex items-center justify-center bg-primary/10">
              <HeartIcon className="size-4 lg:size-5" />
            </div>
            <div className="text-center">
              <p className="text-sm lg:text-base">Favourite</p>
              <h4 className="font-semibold text-lg font-petrona">13</h4>
            </div>
          </div>
          <div className="flex space-y-2 flex-col items-center">
            <div className="size-9 lg:size-10 rounded-full flex items-center justify-center bg-primary/10">
              <BellIcon className="size-4 lg:size-5" />
            </div>
            <div className="text-center">
              <p className="text-sm lg:text-base">Notification</p>
              <h4 className="font-semibold text-lg font-petrona">69</h4>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="account" className="mt-8 mb-6">
        <TabsList className="grid h-auto w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="favourite">Favourite</TabsTrigger>
          <TabsTrigger value="notification">Notification</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountSection />
        </TabsContent>
        <TabsContent value="password">
          <PasswordSection />
        </TabsContent>
        <TabsContent value="favourite">
          <FavouriteSection />
        </TabsContent>
        <TabsContent value="notification">
          <NotificationSection />
        </TabsContent>
      </Tabs>
    </section>
  );
}
