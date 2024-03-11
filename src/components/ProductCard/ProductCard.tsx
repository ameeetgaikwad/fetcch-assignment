import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
}

function ProductCard({ title, price }: ProductCardProps) {
  return (
    <>
      <button className="flex flex-row justify-between w-[347px] sm:w-[400px] items-center border-2 border-[#E0E0E0] rounded-lg h-[68px] py-2">
        <div className="flex flex-row items-center justify-center">
          <div className="bg-[#F7F7F7] h-11 w-11 flex flex-row justify-center items-center rounded-md m-3">
            <Image
              src={"/icons/Checkout/Product/product.svg"}
              alt="cross"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-semibold">{title}</p>
            <p>{price}</p>
          </div>
        </div>

        <Image
          src={"/icons/Checkout/Product/menu.svg"}
          alt="cross"
          width={24}
          height={24}
          className="mx-3"
        />
      </button>
    </>
  );
}

export default ProductCard;
