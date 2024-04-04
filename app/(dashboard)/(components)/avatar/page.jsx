"use client";

import Card from "@/components/ui/card-snippet";

import {
  imageAvatar,
} from "./source-code";
import ImageAvatar from "./image-avatar";

const AvatarPage = () => {
  return (
    <Card title="Avatars Image" code={imageAvatar}>
      <p className="text-sm text-default-400 dark:text-default-600  mb-4">
        The <code className="text-primary">AvatarImage</code> component to show
        image if available.
      </p>
      <div className="flex flex-wrap gap-3 lg:gap-5">
        <ImageAvatar />
      </div>
    </Card>
  );
};

export default AvatarPage;
