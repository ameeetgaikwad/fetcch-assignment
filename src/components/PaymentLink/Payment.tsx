import Image from "next/image";
import { useState } from "react";
import LinkComponent from "../LinkType/LinkType";
import Toogle from "../Toggle/Toggle";
import { linkType, products, addons } from "@/utils/constants";
import ProductCard from "../ProductCard/ProductCard";
import { Accordion } from "@/components/ui/accordion";
import { RadioGroup } from "@/components/ui/radio-group";
import AccordionComponent from "@/components/Accordion/Accordion";
import Confirmation from "../Confirmation/Confirmation";
import Preview from "../Preview/Preview";

enum PageEnum {
  BeforePayment = "BeforePayment",
  AfterPayment = "AfterPayment",
}
export enum LinkEnum {
  Product = "Products or Subscriptions",
  Customer = "Customers choose what to pay",
}

function Payment() {
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const [pageType, setPageType] = useState<string>(PageEnum.BeforePayment);
  const [link, setLink] = useState<string>(LinkEnum.Product);
  console.log(showPreview);
  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
  }
  return (
    <>
      <div className="flex flex-col h-[96%] w-[97%] md:w-[85%] bg-white mx-[12px] mt-[12px] mb-[32px] border-2 rounded-[20px] border-[#EBEBEB] overflow-x-hidden">
        <div className="flex flex-row justify-between h-[72px] border-b-2 border-[#EBEBEB]">
          <div className="flex flex-row items-center px-[24px] py-[20px]">
            <Image
              src={"/icons/Checkout/PaymentLink/cross.svg"}
              alt="cross"
              width={24}
              height={24}
            />
            <p className="font-semibold text-xl">Create Payment Link</p>
          </div>
          <div className="p-[20px]">
            <button className="bg-gradient-to-b from-[#6A8BFF] to-[#3461FF] text-white rounded-lg w-[99px] h-[32px] text-sm font-normal">
              Create Link
            </button>
          </div>
        </div>
        <div className={`m-8 flex flex-row justify-center gap-x-4`}>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-4">
              <div>
                <p className="font-semibold text-2xl h-[29px]">
                  Choose Link Type
                </p>
              </div>

              <LinkComponent checked={link} handleChange={handleLinkChange} />
            </div>
            <Toogle setPageType={setPageType} pageType={pageType} />
            {link === LinkEnum.Product &&
              pageType == PageEnum.BeforePayment && (
                <div className="flex flex-col gap-y-4">
                  <p className="font-semibold text-2xl">Product</p>
                  {products.map((product, index) => (
                    <ProductCard
                      key={index}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
                  <div className="text-semibold font-2xl flex flex-row justify-center">
                    <button className="bg-[#EBF0FF] text-[#3461FF] text-xs font-semibold rounded-3xl border-[0.83px] border-[#3461FF] h-[24px] w-[148px] py-[5px] flex flex-row items-center justify-center">
                      Add new Product +
                    </button>
                  </div>
                </div>
              )}

            {pageType == PageEnum.BeforePayment && (
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col"
              >
                {addons.map((addon, index) => (
                  <AccordionComponent title={addon.title} />
                ))}
              </Accordion>
            )}
            {pageType == PageEnum.AfterPayment && (
              <div>
                <p className="font-semibold text-2xl mb-3">
                  Show confirmation page.
                </p>
                <Confirmation />
              </div>
            )}
          </div>
          <div className="pb-0 mb-0 hidden xl:flex relative">
            {!showPreview ? (
              <button
                className={`bg-white relative left-[150%] flex flex-row font-semibold text-[10px] w-[118px] h-[30px] justify-center items-center rounded-[8px] border-[1px] border[#CDCDCD]`}
                onClick={() => {
                  setShowPreview(!showPreview);
                  console.log(showPreview);
                }}
              >
                <p>{"Show Preview"}</p>

                <Image
                  src={"/icons/Preview/hide.svg"}
                  alt="hide"
                  width={12}
                  height={12}
                />
              </button>
            ) : (
              <Preview
                link={link}
                setShowPreview={setShowPreview}
                showPreview={showPreview}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
