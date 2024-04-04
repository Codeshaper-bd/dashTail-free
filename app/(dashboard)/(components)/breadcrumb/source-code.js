export const defaultBreadCrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const DefaultBreadCrumb = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default DefaultBreadCrumb;
`;
export const customSeparator = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const CustomSeparator = () => {
  return (
    <>
      <Breadcrumbs separator="/">
        <Breadcrumbs>
          <BreadcrumbItem >Button</BreadcrumbItem>
          <BreadcrumbItem >Breadcrumbs</BreadcrumbItem>
          <BreadcrumbItem >Card</BreadcrumbItem>
          <BreadcrumbItem >Checkbox</BreadcrumbItem>
          <BreadcrumbItem >Code</BreadcrumbItem>
        </Breadcrumbs>
      </Breadcrumbs>
    </>
  );
};

export default CustomSeparator;
`;
export const customizeCollapsingBreadcrumb = `import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
const CustomizeCollapsingBreadcrumb = () => {
  return (
    <>
      <Breadcrumbs
        variant="yourVariant"
        modifier="yourModifier"
        maxItems={3}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={2}
        renderEllipsis={
          <DropdownMenu>
           <DropdownMenuTrigger asChild>
              <span className=" cursor-pointer bg-muted px-2 rounded-full inline-flex items-center">
                <Icon
                  icon="heroicons:ellipsis-horizontal"
                  className=" h-5 w-5  "
                />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="start">
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
              <br />
              <BreadcrumbItem> Advanced UI</BreadcrumbItem>
              <br />
              <BreadcrumbItem>Component</BreadcrumbItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem> Advanced UI</BreadcrumbItem>
        <BreadcrumbItem>Component</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default CustomizeCollapsingBreadcrumb;
`;
