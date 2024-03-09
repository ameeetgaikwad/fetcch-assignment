import Image from "next/image";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between bg-[#FFFFFF] items-center h-[68px] shadow">
        <p className="font-semibold px-[30px] py-[23px]">Checkout</p>

        <div className="flex flex-row gap-x-2 px-[54px] py-[25px]">
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
