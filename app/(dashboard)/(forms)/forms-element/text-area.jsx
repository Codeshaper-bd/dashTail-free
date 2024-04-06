
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const TextAreaComponents = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="message" className="mb-2">Basic</Label>
        <Textarea placeholder="What`s on your mind?" rows="3" id="message" />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2">Disabled</div>
        <Textarea placeholder="This textarea is disabled" rows="3" disabled />
      </div>

      <div>
        <div className="text-sm font-medium text-default-900 mb-2">Read Only</div>
        <Textarea rows="3" readOnly defaultValue=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos, necessitatibus est quis minima illum. Ullam expedita quo explicabo sapiente.">

        </Textarea>
      </div>
      <div>
        <Label className="mb-2" htmlFor="description">Required  Textarea<span className="text-destructive">*</span> </Label>
        <Textarea placeholder="Description..." id="description" rows="3" required />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2">Primary</div>
        <Textarea placeholder="Type Here.." color="primary" />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2">Secondary</div>
        <Textarea placeholder="Type Here.." color="secondary" />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2">Destructive</div>
        <Textarea placeholder="Type Here.." color="destructive" />
      </div> 
    </div>
  );
};

export default TextAreaComponents;