import Image from "next/image";
import classNames from "classnames";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Input } from "../ui/input";
import { sideNavLinks } from "@/utils/constants";
function Sidenav() {
  const [active, setActive] = useState("Payment links");

  return (
    <>
      <div className="h-full mx-[12px] w-[220px] pt-[12px] flex flex-col justify-between">
        <div className="flex flex-col gap-y-[24px]">
          <div className="relative">
            <Input
              className="bg-[#F1F1F1] focus:border-0 rounded-xl pl-8 h-[40px] w-[236px]"
              placeholder="Search"
            />
            <Image
              src={"/icons/Checkout/search.svg"}
              alt="search"
              width={16}
              height={16}
              className="absolute top-[30%] left-2"
            />
            <p className="bg-white w-[24px] h-[24px] flex flex-row justify-center absolute top-[20%] right-0 font-extralight">
              /
            </p>
          </div>
          <div className="text-[#6A7385] flex flex-col gap-y-2">
            {sideNavLinks.map((link, index) => (
              <div
                key={index}
                className={classNames({
                  "flex flex-row gap-x-2 h-[40px] w-[220px] items-center px-3":
                    true,
                  "text-[#3461ff] border-2 border-[#BECCFF] rounded-lg":
                    active == link.title,
                })}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={16}
                  height={16}
                  className=""
                />
                <button
                  className=""
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  {link.title}
                </button>
                {link.commingSoon && (
                  <Badge className="bg-gradient-to-b from-[#85A0FF] to-[#577CFF] rounded-xl h-6 font-normal">
                    comming soon
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-row justify-between bg-white rounded-lg w-[236px] h-14">
          <Image
            src={"/icons/Checkout/profile.svg"}
            alt="profile"
            width={38}
            height={38}
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm">Shivam</p>
            <p className="text-[10px]">Shivamgmahale@xyz.com</p>
          </div>
          <button>
            <Image
              src={"/icons/Checkout/menu.svg"}
              alt="menu"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
