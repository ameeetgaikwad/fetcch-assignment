import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { sideNavLinks } from "@/utils/constants";
import classNames from "classnames";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between bg-[#FFFFFF] items-center h-[68px] drop-shadow-md w-[100%]">
        <div className="flex flex-row">
          <div className="pl-8 flex md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <button>
                  <Image
                    src={"/icons/Header/mobilemenu.svg"}
                    alt="menu"
                    width={18}
                    height={18}
                  />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="text-[#6A7385] flex flex-col gap-y-2">
                  {sideNavLinks.map((link, index) => (
                    <div
                      key={index}
                      className={classNames({
                        "flex flex-row gap-x-2 h-[40px] w-[98%] items-center px-3":
                          true,
                        "text-[#3461ff] border-2 border-[#BECCFF] rounded-lg":
                          "Payment links" == link.title,
                      })}
                    >
                      <Image
                        src={link.icon}
                        alt={link.title}
                        width={16}
                        height={16}
                        className=""
                      />
                      <button className="" onClick={() => {}}>
                        {link.title}
                      </button>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <p className="text-lg sm:text-xl font-semibold px-[5px] md:px-[30px] py-[23px]">
            CheckOut
          </p>
        </div>

        <div className="hidden sm:flex flex-row gap-x-2 px-[54px] py-[25px]">
          <Image
            src={"/icons/Header/helpSupport.svg"}
            alt="help&support"
            width={12}
            height={12}
          />
          <p className="text-[#464F60]">Help & Support</p>
        </div>
      </div>
    </>
  );
}
export default Header;
