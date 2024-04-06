export const defaultSkeleton = `import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SkeletonPage = () => {
  return (
    <Card>
        <CardContent className="p-0">
          <div className="w-full h-[191px] overflow-hidden rounded-t-md">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="p-4">
            <Skeleton className="w-full mb-2 h-3" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
            <Skeleton className="w-full h-3 mb-0.5" />
          </div>
        </CardContent>
      </Card>
  );
};
export default SkeletonPage;
`;
