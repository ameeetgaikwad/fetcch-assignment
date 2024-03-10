import Payment from "@/components/PaymentLink/Payment";
import Sidenav from "@/components/Sidenav/Sidenav";

function Home() {
  return (
    <>
      <div className="bg-[#F9F9F9] h-screen flex flex-row">
        <Sidenav />
        <Payment />
      </div>
    </>
  );
}

export default Home;
//
