export const basicDialog = `"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const BasicDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Basic Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              What is Modals in UI Design?
            </DialogTitle>
          </DialogHeader>

            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-primary font-medium">France</span> is the
                most visited country in the world with 117,109,000 international
                tourists, thanks to its rich history and iconic landmarks.
              </p>
              <p>
                France's magnetic City of Light is a perennial tourist
                destination, drawing visitors with its iconic attractions, like
                the Eiffel Tower and the Louvre, and its unmistakable je ne sais
                quoi. Quaint cafes, trendy shopping districts and Haussmann
                architecture give Paris its timeless beauty. But the city's best
                asset is that you're likely to discover something new with each
                trip or season (read: Paris is always a good idea). To best
                explore France's ever-changing capital, get lost wandering the
                charming cobblestone streets, learn its secrets on a walking
                tour head to dynamic art exhibits like the Atelier des Lumières
                or gourmandize at the latest restaurants and pastry shops
              </p>
            </div>
            <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>

              <Button type="submit">Agree</Button>
            </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BasicDialog;
`;
export const formModal = `"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Flatpickr from "react-flatpickr";
const DialogForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Form</Button>
      </DialogTrigger>
      <DialogContent size="2xl">
        <DialogHeader className="p-0">
          <DialogTitle className="text-base font-medium text-default-700 ">
            Create a New Account
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="h-[290px]">
            <ScrollArea className="h-full">
              <div className="sm:grid  sm:grid-cols-2 sm:gap-5 space-y-4 sm:space-y-0">
                <div className="flex flex-col gap-2">
                  <Label>First Name</Label>
                  <Input type="text" placeholder="Enter first name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Enter last name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Phone Number</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Set Password</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Date of birth</Label>
                  <Flatpickr
                    className='w-full border border-default-200 focus:border-primary focus:outline-none h-10 rounded-md px-2 placeholder:text-default-600'
                    placeholder='Date of birth'
                  />
                </div>
                <div className="col-span-2 flex  items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-xs text-default-700 cursor-pointer">
                    You agree to our Terms, Privacy Policy. You may receive SMS
                    notifications from us and can opt out at any time.
                  </Label>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className=" flex justify-center gap-3 mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button">Create Account </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-default-700 ">
              Already Have An Account?
              <Link href="/dashboard" className="text-success"> Sign In  </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
`;
