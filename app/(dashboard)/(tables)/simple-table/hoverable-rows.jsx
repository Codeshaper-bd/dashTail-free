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
const HoverableRows = () => {
  return (
    <Table>
      <TableHeader>
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
        {users.slice(0, 5).map((item) => (
          <TableRow key={item.id} className="hover:bg-default-100">
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell className="text-right">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HoverableRows;
