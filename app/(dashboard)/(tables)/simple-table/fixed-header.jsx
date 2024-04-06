"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { users, columns } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
const FixedHeader = () => {
  return (
    <div className="h-[250px]">
      <ScrollArea className="h-full">
        <Table>
          <TableHeader className="sticky bg-default-100 top-0">
            <TableRow>
              {
                columns.map(column => (
                  <TableHead key={column.key} className="last:text-right">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell className="text-right">{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default FixedHeader;
