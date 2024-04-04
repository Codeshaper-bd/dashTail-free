"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import card7 from "@/public/images/card/card7.jpg";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <Card>
        <CardContent className="p-4">
          <div className="mb-4">
            <p className="mb-1 text-xl text-default-700  font-medium">
              Image In Middle
            </p>
            <p className="text-muted-foreground text-base">
              Subtitle: Lorem ipsum
            </p>
          </div>
          <div className="w-full h-[191px] overflow-hidden  rounded-md mb-4">
            <Image
              className="w-full h-full object-cover"
              src={card7}
              alt="image"
            />
          </div>
          <div className="mb-4">
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consec teturars in adipiscing elit.
            </p>
          </div>
          <div className="space-x-6 rtl:space-x-reverse">
            <Link
              href="#"
              className="text-primary inline-flex font-medium font-sm items-center underline"
            >
              Read More
            </Link>
            <Link
              href="#"
              className="text-primary inline-flex font-medium font-sm items-center underline"
            >
              Another Link
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
