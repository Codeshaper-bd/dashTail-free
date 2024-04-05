import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import { Settings } from "@/components/svg";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const ThemeCustomize = ({
  trigger = (
    <div className="fixed right-4 bottom-14 z-50">
      <Button size="icon" className=" relative h-12 w-12  rounded-full ">
        <Settings className="h-7 w-7 animate-spin" />
      </Button>
    </div>
  ),
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        overlayClass=" bg-transparent backdrop-blur-none"
        className="lg:w-3/4 w-full max-w-full md:max-w-sm px-6 pt-0 pb-6"
      >
        <SheetHeader className=" text-start border-b -mx-6 px-6 py-4 shadow-sm md:shadow-none">
          <SheetTitle className=" text-base  font-medium ">
            Theme Customizer
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-120px)] -mx-6 px-6">
          <div className=" space-y-8 mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            adipisci. Doloribus aspernatur, odit ex quam corporis reiciendis
            quisquam quas blanditiis, iure sequi quae facere, voluptate possimus
            quibusdam maiores sed saepe?
          </div>
        </ScrollArea>
        <SheetFooter className="py-4 gap-3 lg:flex justify-between hidden  ">
          <Button asChild className="w-full">
            <Link href="/dashboard">Buy Now</Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/dashboard">Our Portfolio</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomize;
