import { Dispatch, SetStateAction } from "react";

interface ToogleProps {
  setPageType: Dispatch<string>;
  pageType: string;
}

function Toogle({ setPageType, pageType }: ToogleProps) {
  return (
    <>
      <div className="p-[1px] items-center rounded-3xl bg-[#F5F5F7] w-[400px] h-[40px] flex flex-row justify-between text-[#6A7385]">
        <button
          className={`w-[198px] h-[38px] px-[58px] py-[7px] rounded-3xl transition-colors text-xs font-bold hover:cursor-pointer ${
            pageType === "BeforePayment" ? "bg-white text-[#000000]" : ""
          }`}
          onClick={() => {
            setPageType("BeforePayment");
          }}
        >
          Payment page
        </button>
        <button
          className={`font-bold w-[198px] h-[38px] px-[58px] py-[7px] rounded-full transition-colors text-xs hover:cursor-pointer ${
            pageType === "AfterPayment" ? "bg-white text-[#000000]" : ""
          }`}
          onClick={() => {
            setPageType("AfterPayment");
          }}
        >
          After payment
        </button>
      </div>
    </>
  );
}

export default Toogle;
