"use client"
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users, columns } from "./data";
const ColorTable = () => {
  return (
    <div className=" space-y-5">
      <div className="">
        <Card>
          {/* primary color */}
          <Table className="bg-primary/10">
            <TableHeader>
              <TableRow>
                {
                  columns.map(column => (
                    <TableHead key={column.key} className="text-primary last:text-right">
                      {column.label}
                    </TableHead>
                  ))
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.slice(0, 5).map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-primary/80">{item.id}</TableCell>
                  <TableCell className="text-primary/80">{item.name}</TableCell>
                  <TableCell className="text-primary/80">{item.email}</TableCell>
                  <TableCell className="text-primary/80">{item.age}</TableCell>
                  <TableCell className="text-primary/80 text-right">{item.point}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <Card>
        {/* success color */}
        <Table className="bg-success/10">
          <TableHeader>
            <TableRow>
              {
                columns.map(column => (
                  <TableHead key={column.key} className="text-success last:text-right">
                    {column.label}
                  </TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-success/80" >{item.id}</TableCell>
                <TableCell className="text-success/80" >{item.name}</TableCell>
                <TableCell className="text-success/80" >{item.email}</TableCell>
                <TableCell className="text-success/80" >{item.age}</TableCell>
                <TableCell className="text-success/80 text-right" >{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ColorTable;
