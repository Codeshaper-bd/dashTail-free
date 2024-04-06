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
const SmallTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            columns.map(column => (
              <TableHead key={column.key} className="h-10 p-2.5 last:text-right">
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item) => (
          <TableRow key={item.id}>
            <TableCell className="p-2.5">{item.id}</TableCell>
            <TableCell className="p-2.5">{item.name}</TableCell>
            <TableCell className="p-2.5">{item.email}</TableCell>
            <TableCell className="p-2.5">{item.age}</TableCell>
            <TableCell className="p-2.5 text-right">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SmallTable;
