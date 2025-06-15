"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProfileWarningDialog({ user }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user?.phone || !user?.whatsapp) {
      setOpen(true);
    }
  }, [user]);

  const handleRedirect = () => {
    setOpen(false);
    router.push("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Incomplete</DialogTitle>
          <DialogDescription>
            Please update your profile with a phone number and WhatsApp number
            before posting a pet.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleRedirect}>Update Profile</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
