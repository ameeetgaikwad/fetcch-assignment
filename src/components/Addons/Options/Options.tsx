import { Checkbox } from "@/components/ui/checkbox";
import { options } from "@/utils/constants";
function Options() {
  return (
    <>
      <div className="flex flex-col gap-y-4 h-[166px] justify-center">
        {options.map((option, index) => {
          return (
            <div className="flex flex-row items-center">
              <Checkbox id="terms" className="" />
              <label
                htmlFor="terms"
                className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6A7385] pl-2"
              >
                {option.title}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Options;
