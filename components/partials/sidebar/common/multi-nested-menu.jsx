import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn, isLocationMatch } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MultiNestedMenu = ({ subItem, subIndex, activeMultiMenu }) => {
  const locationName = usePathname();
  return (
    <Collapsible open={activeMultiMenu === subIndex}>
      <CollapsibleContent className="CollapsibleContent">
        <ul className="space-y-3 ">
          {subItem?.multi_menu?.map((item, i) => (
            <li className=" first:pt-3" key={i}>
              <Link href={item.href}>
                <span
                  className={cn(
                    "text-sm flex gap-3  items-center transition-all duration-150 capitalize hover:text-primary",
                    {
                      " text-primary  ": isLocationMatch(
                        item.href,
                        locationName
                      ),
                      " text-default-600": !isLocationMatch(
                        item.href,
                        locationName
                      ),
                    }
                  )}
                >
                  <span
                    className={cn(
                      " h-2 w-2 rounded-full border border-default-500  inline-block flex-none",
                      {
                        "    border-primary": isLocationMatch(
                          item.href,
                          locationName
                        ),
                      }
                    )}
                  />
                  <span className="flex-1">{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MultiNestedMenu;
