import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
function Confirmation() {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6A7385]"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center space-x-2 relative left-[26px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6A7385]"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="border-2 border-[#D2D2D2] rounded-lg relative left-[52px]">
          <textarea
            placeholder="include details, such as delivery date estimates
or any other order related information"
            className="h-[74px] w-[348px] focus:border-0 focus:outline-none resize-none pl-3 pt-2 "
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6A7385]"
          >
            Don’t Show confirmation page
          </label>
        </div>
        <p className="text-sm font-medium text-[#A3ACBA] relative left-[26px]">
          Redirect customers to your website.
        </p>
      </div>
    </>
  );
}

export default Confirmation;
