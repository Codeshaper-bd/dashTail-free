import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
const BlockButton = () => {
  return (
    <>
      <Button className="w-full">Primary</Button>
      <Button className="w-full" color="success">
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 mr-2  " />
        Icon Left
      </Button>
      <Button className="w-full" color="warning">
        Icon Right Outline
        <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 ml-2 " />
      </Button>
    </>
  );
};

export default BlockButton;
