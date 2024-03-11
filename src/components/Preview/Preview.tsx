import Image from "next/image";
import { previewItems } from "@/utils/constants";
import { LinkEnum } from "../PaymentLink/Payment";
import { Input } from "../ui/input";
import { Dispatch } from "react";
function Preview({
  link,
  setShowPreview,
  showPreview,
}: {
  link: string;
  setShowPreview: Dispatch<boolean>;
  showPreview: boolean;
}) {
  return (
    <>
      <div
        className={`w-[100%] h-[756px] bg-[#F5F5F5] rounded-[10.55px] border-[0.96px] border-[#D0D0D0] flex flex-col justify-center items-center ${
          showPreview === false ? "hidden " : ""
        }`}
      >
        <button
          className={`bg-white relative bottom-[15%] flex flex-row font-semibold text-[10px] w-[118px] h-[30px] justify-center items-center rounded-[8px] border-[1px] border[#CDCDCD] ${
            showPreview === false
              ? "-translate-x-[350%] transition duration-500 ease-in-out"
              : "transition duration-500 ease-in-out"
          }`}
          onClick={() => {
            setShowPreview(!showPreview);
            console.log(showPreview);
          }}
        >
          <p>{showPreview === true ? "Hide Preview" : "Show Preview"}</p>

          <Image
            src={"/icons/Preview/hide.svg"}
            alt="hide"
            width={12}
            height={12}
          />
        </button>
        <div
          className={`bg-white w-[98%] h-[447.3px] rounded-b-[7.14px] flex flex-col items-center justify-center shadow-3xl`}
        >
          <div>
            <Image
              src={"/icons/Preview/navbar.svg"}
              alt="navigation"
              width={171}
              height={6}
              className="w-[684px] h-[25px]"
            />
          </div>

          <div className="bg-[#F8F8F8] rounded-[3.92px] w-[98.5%] h-[415px] flex flex-row gap-x-8 justify-between">
            <div className="flex flex-col mt-[42px] ml-[56.7px] gap-x-16">
              <div className="flex flex-row mb-[9.82px]">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={"/icons/Preview/arrow.svg"}
                    alt="arrow"
                    width={3}
                    height={3}
                    className="h-[10.72px] w-[10.72px] mr-[5.36px]"
                  />
                  <div className="flex flex-row w-[85%] h-[21.43px] bg-white justify-center items-center rounded-[18.75px]">
                    <Image
                      src={"/icons/Preview/profile.svg"}
                      alt="profile"
                      width={3}
                      height={3}
                      className="w-[14.29px] h-[14.29px]"
                    />
                    <p className="text-[7.14px] font-medium ml-1">
                      Shivam Studios
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[10.72px] font-medium text-[#A2A2A2] mb-[7px]">
                  Pay
                </p>
                {link === LinkEnum.Product ? (
                  <p className="text-[22.32px] font-[510px] mb-[8.72px] ">
                    $1399
                  </p>
                ) : (
                  <Input placeholder="$0.00" />
                )}
                {link === LinkEnum.Product && (
                  <p className="text-[10.72px] font-medium text-[#A2A2A2] mb-[10.65px]">
                    Items
                  </p>
                )}
                {link === LinkEnum.Product && (
                  <div>
                    {previewItems.map((item, index) => (
                      <div className="flex flex-row justify-between w-[100%]">
                        <div className="flex flex-row justify-center items-center gap-x-2">
                          <Image
                            src={item.icon}
                            alt="numbering"
                            width={25}
                            height={25}
                            className="w-[18px] h-[18px]"
                          />
                          <p className="font-medium text-[8.93px]">
                            {item.title}
                          </p>
                        </div>
                        <p className="font-medium text-[8.93px]">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <Image
                src={"/icons/Preview/paymentdetails.svg"}
                alt="payment"
                width={2}
                height={2}
                className="w-[100%] h-[420.58px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
