import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const IconButton = () => {
  return (
    <>
      <Button size="icon">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
    </>
  );
};

export default IconButton;
