"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
const ProfileInfo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" cursor-pointer">
        <div className=" flex items-center  ">
          <Image
            src={avatar5}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-0" align="end">
        <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
          <Image
            src={avatar5}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />

          <div>
            <div className="text-sm font-medium text-default-800 capitalize ">
              {"Mcc Callem"}
            </div>
            <Link
              href="/dashboard"
              className="text-xs text-default-600 hover:text-primary"
            >
              @uxuidesigner
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {[
            {
              name: "profile",
              icon: "heroicons:user",
            },
            {
              name: "Billing",
              icon: "heroicons:megaphone",
            },
            {
              name: "Settings",
              icon: "heroicons:paper-airplane",
            },
            {
              name: "Keyboard shortcuts",
              icon: "heroicons:language",
            },
          ].map((item, index) => (
            <Link
              href="/dashboard"
              key={`info-menu-${index}`}
              className="cursor-pointer"
            >
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon={item.icon} className="w-4 h-4" />
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="mb-0 dark:bg-background" />
        <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 dark:hover:bg-background cursor-pointer">
          <Icon icon="heroicons:power" className="w-4 h-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileInfo;
