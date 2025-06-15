"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2Icon, LocateFixedIcon, SaveIcon, XIcon } from "lucide-react";
import ProfileWarningDialog from "@/components/profileWarningDialog";
import { Textarea } from "@/components/ui/textarea";

export default function PetSubmit({ user }) {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  const dropRef = useRef(null);
  const fileInputRef = useRef(null);

  // Location detect
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      const handleLocateClick = () => {
        setIsLoading(true);
        setError("");
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f7357376b57045199323ff9660a787d3&language=en&pretty=1`
              );
              const data = await response.json();

              if (data.results && data.results.length > 0) {
                setLocation(data.results[0].formatted);
              } else {
                setError("Could not determine location.");
              }
            } catch (err) {
              console.error("Error during reverse geocoding:", err);
              setError("Failed to fetch location.");
            } finally {
              setIsLoading(false);
            }
          },
          (err) => {
            setIsLoading(false);
            switch (err.code) {
              case err.PERMISSION_DENIED:
                setError("Location access denied.");
                break;
              case err.POSITION_UNAVAILABLE:
                setError("Location information unavailable.");
                break;
              case err.TIMEOUT:
                setError("Request timed out.");
                break;
              default:
                setError("An unknown error occurred.");
                break;
            }
          }
        );
      };

      const locateButton = document.getElementById("locateButton");
      if (locateButton) {
        locateButton.addEventListener("click", handleLocateClick);
      }

      return () => {
        if (locateButton) {
          locateButton.removeEventListener("click", handleLocateClick);
        }
      };
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // file select
  const handleFiles = (incoming) => {
    if (!incoming) return;

    const validFiles = Array.from(incoming).filter((file) =>
      file.type.startsWith("image/")
    );

    const newFiles = [...files, ...validFiles];

    if (newFiles.length > 5) {
      setFileError("You can only upload up to 5 images.");
      return;
    }

    setFiles(newFiles);

    if (newFiles.length <= 5) {
      setFileError("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
    dropRef.current.classList.remove("border-primary");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add("border-primary");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("border-primary");
  };

  const removeFile = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
    setFileError("");
  };

  return (
    <>
      <ProfileWarningDialog user={user} />
      <section className="py-4 font-karla">
        <div className="container max-w-4xl mx-auto px-4 md:px-5 lg:px-6">
          <div className="flex w-full items-center flex-col gap-4 overflow-hidden pt-12 pb-6">
            <div className="flex-1">
              <h3 className="mb-3 text-center text-2xl font-bold font-petrona md:text-3xl lg:text-5xl">
                Submit a Pet for Adoption
              </h3>
              <p className="max-w-xl text-center text-muted-foreground lg:text-lg">
                Fill out the form below to submit a pet for adoption. Our team
                will review your submission.
              </p>
            </div>
          </div>
          {/* Pet form starts */}
          <Card className="border-none max-w-xl mx-auto">
            <CardContent className="px-8 grid gap-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pName">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="pName"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pBreed">
                  Breed <span className="text-destructive">*</span>
                </Label>
                <Input type="text" id="pBreed" placeholder="Breed" required />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pAge">
                  Age <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="pAge"
                  placeholder="e.g. 6 Months"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pGender">
                  Gender <span className="text-destructive">*</span>
                </Label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pDescription">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="pDescription"
                  placeholder="Description"
                  required
                  className="min-h-20"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pLocation">
                  Location <span className="text-destructive">*</span>
                </Label>
                <div className="flex space-x-2">
                  <Input
                    id="pLocation"
                    placeholder={
                      isLoading ? "Locating..." : error || "Location"
                    }
                    value={location}
                    readOnly
                    required
                  />
                  <Button variant="outline" size="lg" id="locateButton">
                    {isLoading ? (
                      <Loader2Icon className="animate-spin size-4" />
                    ) : (
                      <LocateFixedIcon className="size-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">
                  Images
                  <span className="text-muted-foreground">(upto 5 images)</span>
                  <span className="text-destructive">*</span>
                </Label>
                {/* <Input
                id="picture"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 5) {
                    alert("You can upload up to 5 images.");
                    e.target.value = "";
                  }
                }}
                className="file:bg-primary file:px-3 file:mt-[1.5px] file:text-sm"
              /> */}
                <div
                  ref={dropRef}
                  onClick={() => fileInputRef.current.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="border-2 border-dashed rounded-md p-4 hover:bg-muted cursor-pointer transition-all">
                  <p className="text-sm text-center text-muted-foreground">
                    Drag and drop images here or click to select
                  </p>
                  <input
                    type="file"
                    accept="image/png,image/jpg,image/jpeg,image/webp,image/gif"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                    required
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                </div>
                {fileError && (
                  <p className="text-destructive text-sm mt-1">{fileError}</p>
                )}
                {files.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="relative border rounded overflow-hidden">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview-${index}`}
                          className="object-cover w-full h-32"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-1 right-1 bg-white rounded-full p-1 text-xs">
                          <XIcon className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Button>
                  <SaveIcon />
                  Submit for Review
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Pet form ends */}
        </div>
      </section>
    </>
  );
}
