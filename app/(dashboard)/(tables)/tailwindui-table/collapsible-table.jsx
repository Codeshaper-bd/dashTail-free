import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { users } from "./data";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CollapsibleTable = () => {
  const [collapsedRows, setCollapsedRows] = useState([]);
  const toggleRow = (id) => {
    if (collapsedRows.includes(id)) {
      setCollapsedRows(collapsedRows.filter((rowId) => rowId !== id));
    } else {
      setCollapsedRows([...collapsedRows, id]);
    }
  };
  const columns = [
    {
      key: "user",
      label: "user"
    },
    {
      key: "title",
      label: "title"
    },
    {
      key: "role",
      label: "role"
    },
    {
      key: "action",
      label: "action"
    },
  ]
  return (

    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map(column => (
              <TableHead key={column.key} className="last:text-right">{column.label}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((item) => (
          <React.Fragment key={item.id}>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => toggleRow(item.id)}
                    size="icon"
                    variant="outline"
                    color="secondary"
                    className=" h-7 w-7 border-none rounded-full "
                  >
                    <Icon
                      icon="heroicons:chevron-down"
                      className={cn(
                        "h-5 w-5 transition-all duration-300   transform",
                        {
                          "  rotate-180": collapsedRows.includes(item.id),
                        }
                      )}
                    />
                  </Button>
                  <div className="flex space-x-3  rtl:space-x-reverse items-center">
                    <Avatar className=" rounded-full">
                      <AvatarImage src={item.avatar} />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className=" text-sm  block  text-card-foreground">
                        {item.name}
                      </span>
                      <span className=" text-xs mt-1  block   font-normal">
                        {item.email}
                      </span>
                    </div>
                  </div>
                </div>
              </TableCell>

              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Badge
                  variant="soft"
                  color="success"
                  className="capitalize rounded-md"
                >
                  Active
                </Badge>
              </TableCell>

              <TableCell className=" text-right">
                <Button
                  size="icon"
                  variant="outline"
                  color="destructive"
                  className=" h-7 w-7 border-none"
                >
                  <Icon icon="heroicons:trash" className=" h-5 w-5  " />
                </Button>
              </TableCell>
            </TableRow>
            {collapsedRows.includes(item.id) && (
              <TableRow>
                <TableCell colSpan="7">
                  <div className="pl-12">
                    <p>City: {item.details.city}</p>
                    <p>Experience:{item.details.experience}</p>
                    <p>Post: {item.details.post}</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
        <TableRow></TableRow>
      </TableBody>
    </Table>

  );
};

export default CollapsibleTable;
