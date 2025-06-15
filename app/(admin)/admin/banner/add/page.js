"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function AddBanner() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <Card className="flex flex-col gap-0 font-karla border rounded-2xl">
      <CardHeader className="pb-0">
        <CardTitle className="font-petrona text-2xl">Add New Banner</CardTitle>
        <CardDescription>
          Create a new Banner for the user Homepage
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4 ">
        <form className="grid md:grid-cols-1 items-start  gap-4">
          <div className="grid gap-y-4">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="bannerTitle">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                type="text"
                id="bannerTitle"
                placeholder="Enter Banner Title"
                required
              />
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="bannerLink">Link</Label>
              <Input
                id="bannerLink"
                type="text"
                required
                placeholder="Enter Banner Link"
              />
            </div>
          </div>
          <div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="bannerImage">
                Banner Image <span className="text-destructive">*</span>
              </Label>
              <Input
                type="file"
                accept="image/png,image/jpg,image/jpeg,image/webp,image/gif"
                id="bannerImage"
                className="file:bg-primary file:px-3 file:mt-[1.5px] file:text-sm"
                placeholder="Select banner image"
                onChange={handleFileChange}
                required
              />
              {selectedFile && (
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Desktop Preview
                    </p>
                    <div className="relative border rounded overflow-hidden">
                      <AspectRatio ratio={3 / 1}>
                        <Image
                          src={URL.createObjectURL(selectedFile)}
                          alt="Image"
                          fill
                          priority
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute top-1 right-1 bg-white rounded-full p-1 text-xs shadow">
                        <XIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Mobile Preview
                    </p>
                    <div className="relative border rounded overflow-hidden">
                      <AspectRatio ratio={2 / 1}>
                        <Image
                          src={URL.createObjectURL(selectedFile)}
                          alt="Image"
                          fill
                          priority
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute top-1 right-1 bg-white rounded-full p-1 text-xs shadow">
                        <XIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start mt-2">
            <Button>
              <SaveIcon />
              Add Banner
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
