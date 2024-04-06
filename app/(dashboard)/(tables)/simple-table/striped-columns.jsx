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
const StripedColumns = () => {
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
          <TableRow key={item.id}>
            <TableCell className="even:bg-default-100">{item.id}</TableCell>
            <TableCell className="even:bg-default-100">{item.name}</TableCell>
            <TableCell className="even:bg-default-100">{item.email}</TableCell>
            <TableCell className="even:bg-default-100">{item.age}</TableCell>
            <TableCell className="even:bg-default-100 text-right">{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StripedColumns;
