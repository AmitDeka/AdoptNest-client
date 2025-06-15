"use client";
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
import Link from "next/link";
import { useMemo } from "react";

const categories = [
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat2",
    icon: "",
    name: "Cat",
    description: "Independent and clean animals.",
  },
  {
    id: "cat3",
    icon: "",
    name: "Bird",
    description: "Colorful and chirpy companions.",
  },
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat2",
    icon: "",
    name: "Cat",
    description: "Independent and clean animals.",
  },
  {
    id: "cat3",
    icon: "",
    name: "Bird",
    description: "Colorful and chirpy companions.",
  },
  {
    id: "cat1",
    icon: "",
    name: "Dog",
    description: "Friendly and loyal pets.",
  },
  {
    id: "cat2",
    icon: "",
    name: "Cat",
    description: "Independent and clean animals.",
  },
  {
    id: "cat3",
    icon: "",
    name: "Bird",
    description: "Colorful and chirpy companions.",
  },
];

export default function ViewCategory() {
  const columns = useMemo(
    () =>
      /** @type {ColumnDef<any>[]} */ ([
        {
          accessorKey: "id",
          header: "ID",
          cell: ({ row }) => (
            <div className="truncate max-w-[125px]">{row.getValue("id")}</div>
          ),
        },
        {
          accessorKey: "icon",
          header: "Icon",
          cell: ({ row }) => {
            const icon = row.original.icon;
            const name = row.original.name;
            return (
              <div className="">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={icon} alt={name} />
                  <AvatarFallback>{name?.[0]}</AvatarFallback>
                </Avatar>
              </div>
            );
          },
        },
        {
          accessorKey: "name",
          header: "Name",
        },
        {
          accessorKey: "description",
          header: "Description",
          cell: ({ row }) => (
            <div className="max-w-sm">{row.getValue("description")}</div>
          ),
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
            Pet Categories
          </CardTitle>
          <CardDescription>Manage your pet categories</CardDescription>
        </div>
        <div>
          <Button asChild>
            <Link href="/admin/category/add">
              Add Category <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <DataTable
          columns={columns}
          data={categories}
          defaultFilterKey="name"
        />
      </CardContent>
    </Card>
  );
}
