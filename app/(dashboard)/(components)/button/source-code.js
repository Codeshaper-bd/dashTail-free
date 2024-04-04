export const defaultButton = `import { Button } from '@/components/ui/button'
const DefaultButton = () => {
  return (
    <React.Fragment>
      <Button>Primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="destructive">Danger</Button>
    </React.Fragment>
  )
}
export default DefaultButton;
`;


export const outlineButton = `import { Button } from '@/components/ui/button'
const OutlineButton = () => {
  return (
    <React.Fragment>
      <Button color="secondary" variant="outline">Secondary</Button>
    </React.Fragment>
  )
}
export default OutlineButton;
`;


export const softButton = `import { Button } from '@/components/ui/button'
const SoftButton = () => {
  return (
    <React.Fragment>
      <Button color="secondary" variant="soft"Secondary</Button>
    </React.Fragment>
  )
}
export default SoftButton;
`;

export const ghostButton = `import { Button } from '@/components/ui/button'
const GhostButton = () => {
  return (
    <React.Fragment>
      <Button variant="ghost">Primary</Button>  
    </React.Fragment>
  )
}
export default GhostButton;
`;



export const iconButton = `import { Button } from '@/components/ui/button'
import { Icon } from "@iconify/react";
const IconButton = () => {
  return (
    <React.Fragment>
      <Button size="icon">
        <Icon icon="heroicons:heart-20-solid" className=" h-6 w-6 " />
      </Button>
      
    </React.Fragment>
  )
}
export default IconButton;
`;

export const loaderButton = `import { Button } from "@/components/ui/button";
import { Loader2, Heart } from "lucide-react";
const LoaderButton = () => {
  return (
    <React.Fragment>

      <Button color="secondary">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading ...
      </Button>
    </React.Fragment>
  )
}
export default LoaderButton;
`;


