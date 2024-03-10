import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { linkType } from "@/utils/constants";
import { Dispatch } from "react";
function LinkComponent({
  checked,
  handleChange,
}: {
  checked: string;
  handleChange: Dispatch<any>;
}) {
  return (
    <>
      <RadioGroup defaultValue="default" className="">
        {linkType.map((link, index) => {
          return (
            <div
              className={`flex items-center space-x-5 w-[400px] h-[68px] border-2 rounded-[20px] py-[14px] pl-5 ${
                checked === link.title ? "border-[#3461FF]" : "border-[#EBEBEB]"
              }`}
            >
              <input
                type="radio"
                value={link.title}
                id={index.toString()}
                defaultChecked={link.title === "Products or Subscriptions"}
                checked={checked == link.title}
                onChange={handleChange}
              />
              <Label
                htmlFor={index.toString()}
                className="flex flex-col gap-x-4"
              >
                <p className="text-base font-semibold text-black">
                  {link.title}
                </p>
                <p className="text-xs font-[274px]">{link.subTitle}</p>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </>
  );
}

export default LinkComponent;
