export const basicSheet = `"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//we can change the props "side"'s value to 'top', 'left', 'bottom', 'right' so that the sheet will come out from different direction.

export default function TopSideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="text-sm text-default-500 ">
            Some Contents...
          </p>
          <p className="text-sm text-default-500 ">
            Some Contents...
          </p>
          <p className="text-sm text-default-500 ">
            Some Contents...
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>footer content</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
`;
export const submitFormInSheet = `"use client"
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';

//we can change the props "side"'s value to 'top', 'left', 'bottom', 'right' so that the sheet will come out from different direction.

export default function SubmitFormInSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button color="success">
          <span className='text-xl mr-1'><Icon icon="icon-park-outline:plus" /></span>
          New Account
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[736px]">
        <SheetHeader>
          <SheetTitle>Create a New Account</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between" style={{ height: "calc(100vh - 80px)" }}>
          <div className="py-5">
            <hr />
            {/* form */}
            <div className="md:grid md:grid-cols-2 gap-6 mt-6 space-y-6 md:space-y-0">
              <div className='flex flex-col gap-2'>
                <Label htmlFor="username">Name</Label>
                <Input type="text" placeholder="Please enter user name" id="username" />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="url">URL</Label>
                <Input type="text" placeholder="Please enter url" id="url" />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="owner">Owner</Label>
                <Select id="owner">
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Owner 1</SelectItem>
                    <SelectItem value="2">Owner 2</SelectItem>
                    <SelectItem value="3">Owner 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="choose-type">Type</Label>
                <Select id="choose-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Please Choose the type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Type 1</SelectItem>
                    <SelectItem value="2">Type 2</SelectItem>
                    <SelectItem value="3">Type 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="approver">Type</Label>
                <Select id="approver">
                  <SelectTrigger>
                    <SelectValue placeholder="Please choose the approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Approver 1</SelectItem>
                    <SelectItem value="2">Approver 2</SelectItem>
                    <SelectItem value="3">Approver 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="datetime">Date Time</Label>
                <Input type="date" id="url" />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Please enter url description" />
              </div>
            </div>
          </div>
          <div className="space-x-4 rtl:space-x-reverse ">
            <Button variant="outline" size="xs">Cancel</Button>
            <Button size="xs" color="success">Submit</Button>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>footer content</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
`;
