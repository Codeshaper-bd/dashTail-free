import { Button } from "@/components/ui/button";
import { Loader2, Heart } from "lucide-react";
const LoaderButton = () => {
  return (
    <>

      <Button color="secondary" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
    </>
  );
};

export default LoaderButton;
