export const inputCode = `<>
<Input placeholder="Enter your name" />
<Input type="text" placeholder="Username" id="userName" disabled />
<div>
  <Label className="mb-3" htmlFor="inputId">Username </Label>
  <Input type="text" placeholder="Enter Your Name" id="inputId" />
</div>
<div className="flex flex-col gap-3">
   <Label>Upload File</Label>
   <Input type="file"  />
</div>
<div className="flex gap-4">
  <Input type="text" placeholder="with button" id="input" />
  <Button type="submit">Subscribe</Button>
</div>
<>
`;
export const checkboxCode = `  <div className="space-y-5">
<div className="text-sm font-medium text-default-900">Basic</div>
<div className="flex gap-6 flex-wrap">
  <Checkbox defaultChecked id="default_1">
    Right
  </Checkbox>
  <Checkbox id="default_2">
    Wrong
  </Checkbox>
</div>
<div className="text-sm font-medium text-default-900">Disabled</div>
<div className="flex items-center gap-3">
  <Checkbox defaultChecked id="rd-1" disabled>
    Left
  </Checkbox>
  <Checkbox id="rd-2" disabled>
    Right
  </Checkbox>
</div>
</div>`