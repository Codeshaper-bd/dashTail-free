import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
const ImageAvatar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src={avatar1.src} />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
    </>
  );
};

export default ImageAvatar;
