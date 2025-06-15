import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveIcon } from "lucide-react";

export default function PasswordSection() {
  return (
    <div className="border max-w-2xl mx-auto rounded-2xl overflow-hidden p-4 md:p-5 lg:p-6">
      <h5 className="mb-1 text-xl font-petrona font-bold md:mb-2 md:text-2xl lg:text-3xl lg:mb-3">
        Change Password
      </h5>
      <p className="text-sm text-muted-foreground">
        Update your password to keep your account secure
      </p>
      <div className="grid justify-items-center w-full mt-10 gap-y-6">
        <form className="w-full max-w-xl grid gap-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="crntPass">
              Current Password <span className="text-destructive">*</span>
            </Label>
            <Input id="crntPass" type="password" required />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="newPass">
              New Password <span className="text-destructive">*</span>
            </Label>
            <Input id="newPass" type="password" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cnfNewPass">
              Confirm New Password <span className="text-destructive">*</span>
            </Label>
            <Input id="cnfNewPass" type="password" required />
          </div>

          <div className="flex justify-center">
            <Button>
              <SaveIcon />
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
