import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { SiteLogo } from "@/components/svg";
import Link from "next/link";

const VerticalHeader = ({ handleOpenSearch }) => {
  return (
    <>
      <div className="flex items-center md:gap-6 gap-3">
        <Link
          href="/dashboard"
          className=" text-primary xl:hidden  inline-block "
        >
          <SiteLogo className="h-7 w-7" />
        </Link>

        <div>
          <button
            className=" inline-flex  gap-2 items-center text-default-600 text-sm"
            onClick={handleOpenSearch}
          >
            <span>
              <Search className=" h-4 w-4" />
            </span>
            <span className=" md:block hidden"> Search...</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VerticalHeader;
