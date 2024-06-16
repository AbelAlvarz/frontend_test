import Carousel from "@/components/Coursel";
import NewLetter from "@/components/Newsletter";
import StoreProvider from "@/store/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <div className="h-[80px] w-[90%] m-auto  flex justify-between bg-opacity-100 items-center">
        <h1 className=" text-black font-bold text-4xl">CAROUSEL</h1>
      </div>
      <Carousel />
      <NewLetter />
    </StoreProvider>
  );
}