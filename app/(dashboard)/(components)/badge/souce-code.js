export const defaultBadge = `"use client";
import { Badge } from "@/components/ui/badge";
const DefaultBadge = () => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="destructive">Danger</Badge>
    </>
  );
};

export default DefaultBadge;
`;
export const outlineBadge = `import { Badge } from "@/components/ui/badge";

const OutlineBadge = () => {
  return (
    <>
      <Badge color="secondary" variant="outline">
        Secondary
      </Badge>
    </>
  );
};
export default OutlineBadge;
`;
