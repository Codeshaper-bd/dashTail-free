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
const TablesBorderColors = () => {
  return (
    <Table className="border-primary border">
      <TableHeader>
        <TableRow>
          {
            columns.map(column => (
              <TableHead key={column.key} className="border border-primary/50">
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item) => (
          <TableRow key={item.id}>
            <TableCell className="border border-primary/50">{item.id}</TableCell>
            <TableCell className="border border-primary/50">{item.name}</TableCell>
            <TableCell className="border border-primary/50">{item.email}</TableCell>
            <TableCell className="border border-primary/50">{item.age}</TableCell>
            <TableCell className="border border-primary/50">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TablesBorderColors;
