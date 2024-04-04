"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import flag1 from "@/public/images/all-img/flag-1.png"
import flag2 from "@/public/images/all-img/flag-2.png"
import flag3 from "@/public/images/all-img/flag-3.jpg"
import flag4 from "@/public/images/all-img/flag-4.png"
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const data = [
  {
    name: "En",
    flag: flag1
  },
  {
    name: "Ge",
    flag: flag2
  },
  {
    name: "Ar",
    flag: flag3
  },
  {
    name: "Sp",
    flag: flag4
  }
]
const Language = () => {
  const [selected, setSelected] = useState(data[0]);
  const handleSelected = (data) => setSelected(data);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button" className="bg-transparent hover:bg-transparent">
          <span className="w-6 h-6 rounded-full mr-1.5">
            <Image
              src={selected ? selected.flag : flag1}
              alt=""
              className="w-full h-full object-cover rounded-full" />
          </span>
          <span className="text-sm text-default-600">{selected ? selected.name : "En"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        {
          data.map((item, index) => (
            <DropdownMenuItem
              key={`flag-${index}`}
              className={cn("py-1.5 px-2 cursor-pointer dark:hover:bg-background mb-[2px] last:mb-0", {
                "bg-primary-100 ": selected && selected.name === item.name
              })}
              onClick={() => handleSelected(item)}
            >
              <span className="w-6 h-6 rounded-full mr-1.5">
                <Image src={item.flag} alt="" className="w-full h-full object-cover rounded-full" />
              </span>
              <span className="text-sm text-default-600">{item.name}</span>
              {
                selected && selected.name === item.name &&
                <Check className="w-4 h-4 flex-none ml-auto text-default-700" />
              }

            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;