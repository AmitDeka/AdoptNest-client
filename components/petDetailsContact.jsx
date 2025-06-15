import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PetDetailsContact({
  creatorName,
  creatorPhone,
  creatorEmail,
  creatorWhatsapp,
}) {
  return (
    <Card className="p-2 font-karla gap-1">
      <CardHeader className="p-3 pb-0 gap-0">
        <CardTitle className="text-2xl font-petrona">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-3 pt-0">
        <p className="text-sm lg:text-base text-foreground/70">
          Contact&nbsp;
          <span className="font-semibold text-foreground">{creatorName}</span>
          &nbsp;to learn more about this pet
        </p>

        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <PhoneCall className="mr-2 size-4" />
            {creatorPhone}
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-2 size-4" />
            {creatorEmail}
          </Button>

          <Button className="w-full justify-start" asChild>
            <Link href={`https://wa.me/${creatorWhatsapp}`} target="_blank">
              <MessageSquare className="mr-2 size-4" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
