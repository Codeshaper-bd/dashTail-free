import Card from "@/components/ui/card-snippet";
import BasicPopover from "./basic-popover";

const PopoverPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card title="Basic Popover">
        <BasicPopover />
      </Card>
      
    </div>
  );
};

export default PopoverPage;