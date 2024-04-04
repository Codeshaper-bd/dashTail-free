import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const IconButton = () => {
  return (
    <>
      <Button size="icon">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" variant="outline" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" variant="ghost" className="group">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button size="icon" className=" rounded-full">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      <Button>
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 mr-2  " />
        Icon Left
      </Button>
      <Button>
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ml-2 " />
      </Button>
    </>
  );
};

export default IconButton;
