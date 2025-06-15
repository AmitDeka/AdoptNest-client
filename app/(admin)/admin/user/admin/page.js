"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PenBoxIcon, ShieldBan } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { DataTable } from "@/components/ui/data-table";

const users = [
  {
    id: "user1",
    name: "amit deka",
    email: "a13@gmail.com",
    role: "user",
    phone: "12121212",
    whatsapp: "12121212",
    whatsappVerified: false,
    location: "nalberi",
  },
  {
    id: "user1",
    name: "amit deka",
    email: "a13@gmail.com",
    role: "user",
    phone: "12121212",
    whatsapp: "12121212",
    whatsappVerified: false,
    location: "nalberi",
  },
  {
    id: "user3",
    name: "amit deka",
    email: "a13@gmail.com",
    role: "admin",
    phone: "12121212",
    whatsapp: "12121212",
    whatsappVerified: false,
    location: "chowk bazar, nalbari, assam",
  },
];

export default function AdminUser() {
  const columns = useMemo(
    () =>
      /** @type {ColumnDef<any>[]} */ ([
        {
          accessorKey: "id",
          header: "ID",
          cell: ({ row }) => (
            <div className="truncate max-w-[100px]">{row.getValue("id")}</div>
          ),
        },
        {
          accessorKey: "name",
          header: "Name",
          cell: ({ row }) => (
            <div className="truncate max-w-[125px]">{row.getValue("name")}</div>
          ),
        },
        {
          accessorKey: "email",
          header: "Email",
          cell: ({ row }) => (
            <div className="truncate max-w-[150px]">
              {row.getValue("email")}
            </div>
          ),
        },
        {
          accessorKey: "phone",
          header: "Phone No.",
          cell: ({ row }) => (
            <div className="truncate max-w-[100px]">
              {row.getValue("phone")}
            </div>
          ),
        },
        {
          accessorKey: "location",
          header: "Location",
          cell: ({ row }) => (
            <div className="truncate max-w-[100px]">
              {row.getValue("location")}
            </div>
          ),
        },
        {
          id: "actions",
          header: "Actions",
          cell: () => (
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="default"
                className="rounded-2xl text-white">
                <PenBoxIcon className="size-4" />
              </Button>
              <Button size="icon" variant="destructive" className="rounded-2xl">
                <ShieldBan className="size-4" />
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
            All Admin Users
          </CardTitle>
          <CardDescription>Manage your admin users</CardDescription>
        </div>
        {/* <div>
          <Button asChild>
            <Link href="/admin/category/add">
              Add Category <ArrowRight />
            </Link>
          </Button>
        </div> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <DataTable columns={columns} data={users} defaultFilterKey="name" />
      </CardContent>
    </Card>
  );
}
