import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
const FileUploader = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Label htmlFor="uploadFile">Upload File</Label>
        <Input type="file" id="uploadFile" />
      </div>
      <div className='flex items-center flex-wrap gap-4 mt-4'>
        <Label>
          <Button asChild>
            <div>
              <Upload className="mr-2 h-4 w-4" /> Choose File
            </div>
          </Button>
          <Input type="file" className="hidden" />
        </Label>
        <Label>
          <div>
            <Button asChild color="destructive">
              <div>
                Choose File <Upload className="ml-2 h-4 w-4" />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>

        <Label>
          <div>
            <Button asChild color="info" variant="outline">
              <div>
                Choose File <Upload className=" ml-2 h-4 w-4" />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>
      </div>
    </>
  );
};

export default FileUploader;