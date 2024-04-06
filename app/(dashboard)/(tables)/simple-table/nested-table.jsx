"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users, columns } from "./data";
const NestedTable = () => {
  return (
    <>
      <Table>
        <TableHeader className="bg-default-100">
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={`table-header-${index}`} className="last:text-right">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>

          {users.map((item, index) => (
            <React.Fragment key={`nested-table-${index}`}>
              {
                item.nested ? <>
                  <TableRow >
                    <TableCell colSpan="5" >
                      <Table>
                        <TableHeader className="bg-default-100">
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Project Name</TableHead>
                            <TableHead>Topics</TableHead>
                            <TableHead>Days</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody className="border-b border-default-300">
                          {
                            item.nested.map((nestedItem, index) => (
                              <TableRow key={`nested-subitem-${index}`}>
                                <TableCell>{nestedItem.id}</TableCell>
                                <TableCell>{nestedItem.project_name}</TableCell>
                                <TableCell>{nestedItem.topic}</TableCell>
                                <TableCell >{nestedItem.days}</TableCell>
                              </TableRow>
                            ))
                          }

                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>
                </> :
                  <TableRow key={`nested-table-${index}`}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell className="text-right">{item.point}</TableCell>
                  </TableRow>
              }
            </React.Fragment>
          ))} 
        </TableBody>
      </Table>
    </>
  );
};

export default NestedTable;
