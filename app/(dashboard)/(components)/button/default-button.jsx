import { Button } from "@/components/ui/button";
const DefaultButton = () => {
  return (
    <>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="destructive">Danger</Button>
      <Button color="dark">Dark</Button>
    </>
  );
};

export default DefaultButton;
