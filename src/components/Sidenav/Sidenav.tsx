import Image from "next/image";
import classNames from "classnames";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Input } from "../ui/input";
interface NavLinks {
  title: string;
  icon: string;
  commingSoon?: boolean;
}

function Sidenav() {
  const [active, setActive] = useState("Payment links");
  const sideNavLinks: Array<NavLinks> = [
    {
      title: "Home",
      icon: "/icons/Checkout/home.svg",
    },
    {
      title: "Payments",
      icon: "/icons/Checkout/payments.svg",
    },
    {
      title: "Payment links",
      icon: "/icons/Checkout/paymentsLink.svg",
    },
    {
      title: "Billing",
      icon: "/icons/Checkout/billing.svg",
      commingSoon: true,
    },
    {
      title: "Invoices",
      icon: "/icons/Checkout/invoices.svg",
      commingSoon: true,
    },
    {
      title: "Developer",
      icon: "/icons/Checkout/developer.svg",
    },
    {
      title: "Settings",
      icon: "/icons/Checkout/settings.svg",
    },
  ];
  return (
    <>
      <div className="h-[90%] mx-[12px] w-[220px] pt-[12px] flex flex-col justify-between">
        <div>
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

        <div className="mb-4">
          <Image
            src={"/icons/Checkout/profile.svg"}
            alt="profile"
            width={38}
            height={38}
          />
        </div>
      </div>
    </>
  );
}

export default Sidenav;
