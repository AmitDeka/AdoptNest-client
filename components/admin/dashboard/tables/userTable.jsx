import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const users = [
  {
    profilePic: "",
    name: "amit",
    email: "amit13@gmaol.com",
    time: "2 hours ago",
  },
  {
    profilePic: "",
    name: "me",
    email: "amit13@gmaol.com",
    time: "2 hours ago",
  },
  {
    profilePic: "",
    name: "karishma",
    email: "amit13@gmaol.com",
    time: "2 hours ago",
  },
  {
    profilePic: "",
    name: "jintu",
    email: "amit13@gmaol.com",
    time: "2 hours ago",
  },
  {
    profilePic: "",
    name: "billa",
    email: "amit13@gmaol.com",
    time: "2 hours ago",
  },
];

export default function UserTable() {
  return (
    <Table>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="w-[55px]">
              <Avatar>
                <AvatarImage src={user.profilePic} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="text-left">{user.name}</TableCell>
            <TableCell className="text-left">{user.email}</TableCell>
            <TableCell className="text-right">{user.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
