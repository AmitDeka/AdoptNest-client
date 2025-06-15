"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SaveIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function AddCategory() {
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
        <CardTitle className="font-petrona text-2xl">
          Add New Category
        </CardTitle>
        <CardDescription>
          Create a new pet category with a name and icon
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4 ">
        <form className="grid md:grid-cols-2 items-start  gap-4">
          <div className="grid gap-y-4">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="catName">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                type="text"
                id="catName"
                placeholder="Enter category name"
                required
              />
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="catDesc">Description</Label>
              <Textarea
                id="catDesc"
                className="min-h-20"
                required
                placeholder="Enter category description"
              />
            </div>
          </div>
          <div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="catIcon">
                Icon <span className="text-destructive">*</span>
              </Label>
              <Input
                type="file"
                accept="image/png,image/jpg,image/jpeg,image/webp,image/gif"
                id="catIcon"
                className="file:bg-primary file:px-3 file:mt-[1.5px] file:text-sm"
                placeholder="Enter category Icon"
                onChange={handleFileChange}
                required
              />
              {selectedFile && (
                <div className="relative border rounded overflow-hidden mt-2 w-24 h-24">
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="icon-preview"
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 text-xs shadow">
                    <XIcon className="size-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start mt-2">
            <Button>
              <SaveIcon />
              Add Category
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
