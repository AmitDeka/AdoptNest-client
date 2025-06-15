"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight, PenBoxIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const banners = [
  {
    id: "cat1",
    image: "/under-construction.svg",
    title: "Dog",
    link: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    image: "/under-construction.svg",
    title: "Dog",
    link: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    image: "/under-construction.svg",
    title: "Dog",
    link: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    image: "/under-construction.svg",
    title: "Dog",
    link: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    image: "/logo.png",
    title: "Dog",
    link: "Friendly and loyal pets.",
  },
];

export default function ViewBanner() {
  const columns = useMemo(
    () =>
      /** @type {ColumnDef<any>[]} */ ([
        {
          accessorKey: "id",
          header: "ID",
          cell: ({ row }) => (
            <div className="max-w-[125px]">{row.getValue("id")}</div>
          ),
        },
        {
          accessorKey: "image",
          header: "Image",
          cell: ({ row }) => {
            const image = row.original.image;
            const title = row.original.title;
            return (
              <div className="h-auto">
                <AspectRatio ratio={2 / 1}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            );
          },
        },
        {
          accessorKey: "title",
          header: "Title",
        },
        {
          accessorKey: "link",
          header: "Link",
          cell: ({ row }) => <div>{row.getValue("link")}</div>,
        },
        {
          id: "actions",
          header: "Actions",
          cell: ({ row }) => (
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="default"
                className="rounded-2xl text-white">
                <PenBoxIcon className="size-4" />
              </Button>
              <Button size="icon" variant="destructive" className="rounded-2xl">
                <Trash2Icon className="size-4" />
              </Button>
            </div>
          ),
        },
      ]),
    []
  );

  return (
    <Card className="flex flex-col gap-0 font-karla border-none">
      <CardHeader className="items-center pb-0 flex justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle className="font-petrona text-2xl">
            Homepage Banners
          </CardTitle>
          <CardDescription>Manage your banners</CardDescription>
        </div>
        <div>
          <Button asChild>
            <Link href="/admin/banner/add">
              Add Banner <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <DataTable columns={columns} data={banners} defaultFilterKey="title" />
      </CardContent>
    </Card>
  );
}
