import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ReactToast = () => {
  const defaulToast = () =>
    toast({
      title: "You submitted the following values:",
      description: <>Life is beautiful</>,
    });
  const successToast = () =>
    toast({
      title: "Success",
      variant: "success",
    });
  const warningToast = () =>
    toast({
      title: "This Could be dangerous",
      variant: "warning",
    });
  const destructiveToast = () =>
    toast({
      title: "This is wrong",
      description: <>Please Choose Right Toast</>,
      variant: "destructive",
    });
  const infoToast = () =>
    toast({
      title: "This is a toast",
      variant: "info",
    });
  return (
    <>
      <Button variant="outline" onClick={defaulToast}>
        {" "}
        Default Toast
      </Button>
      <Button color="destructive" onClick={destructiveToast}>
        {" "}
        Error Toast
      </Button>
      <Button color="success" variant="ghost" onClick={successToast}>
        Success Toast
      </Button>
      <Button color="warning" onClick={warningToast}>
        {" "}
        Warning Toast
      </Button>
      <Button color="info" variant="soft" onClick={infoToast}>
        {" "}
        Info Toast
      </Button>
    </>
  );
};

export default ReactToast;
