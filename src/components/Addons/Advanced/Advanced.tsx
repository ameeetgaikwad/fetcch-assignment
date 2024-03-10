import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

function Advanced() {
  return (
    <>
      <div className="">
        <Select>
          <p className="text-[#6A7385] text-sm font-medium">
            Label for Call-To-Action
          </p>
          <SelectTrigger className="w-[400px]">
            <SelectValue placeholder="Pay" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light" className="font-semibold text-sm">
              Pay
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6A7385] text-sm font-medium"
          >
            Allow Promo codes
          </label>
        </div>
      </div>
    </>
  );
}
export default Advanced;
