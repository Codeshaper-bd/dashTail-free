import { Slider } from "@/components/ui/slider";
const RangeSlider = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-medium text-default-900 mb-2.5">Basic Slider</div>
        <Slider defaultValue={[75]} />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2.5">Disabled Slider</div>
        <Slider defaultValue={[70]} disabled />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2.5">Slider with Tooltip</div>
        <Slider defaultValue={[25]} showTooltip />
      </div>
      <div>
        <div className="text-sm font-medium text-default-900 mb-2.5">Slider with min & max value</div>
        <Slider defaultValue={[50]} min={30} max={80} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="text-sm font-medium text-default-900 mb-2.5">Primary color</div>
          <Slider defaultValue={[90]} color="primary" />
        </div>
        <div>
          <div className="text-sm font-medium text-default-900 mb-2.5">Destructive color </div>
          <Slider defaultValue={[50]} color="destructive" />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;