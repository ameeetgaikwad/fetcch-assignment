import Image from "next/image";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between px-[30px] py-[23px] bg-[#FFFFFF]">
        <p className="font-semibold">Checkout</p>

        <div className="flex flex-row gap-x-2">
          <Image
            src={"/icons/Checkout/helpSupport.svg"}
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
