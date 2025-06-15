import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocateFixedIcon, SaveIcon } from "lucide-react";

export default function AccountSection() {
  return (
    <div className="border max-w-4xl mx-auto rounded-2xl overflow-hidden p-4 md:p-5 lg:p-6">
      <h5 className="mb-1 text-xl font-petrona font-bold md:mb-2 md:text-2xl lg:text-3xl lg:mb-3">
        Personal Information
      </h5>
      <p className="text-sm text-muted-foreground">
        Update your personal details and contact information
      </p>
      <div className="grid justify-items-center w-full mt-10 gap-y-6">
        <div className="grid justify-items-center">
          <Avatar className="size-18 lg:size-20  border-2">
            <AvatarImage src="/pic-profile.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="text-xs mt-3" disabled>
            Change Avatar
          </Button>
        </div>
        <form className="w-full max-w-3xl grid gap-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="fullname">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Enter Full Name"
                type="text"
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input id="email" type="email" value="amit@mail.com" disabled />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phoneNumber">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                placeholder="Enter Phone Number"
                id="phoneNumber"
                type="text"
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="whatsappNumber">
                WhatsApp Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="whatsappNumber"
                placeholder="Enter WhatsApp Number"
                type="text"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <div className="flex space-x-2">
                <Input type="text" id="location" placeholder="Location" />
                <Button variant="outline" size="lg">
                  <LocateFixedIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button>
              <SaveIcon />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
