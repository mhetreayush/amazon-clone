import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md"
          />
          <AiOutlineSearch className="p-3 h-12 w-12" />
        </div>

        <div className="text-white flex items-center text-xs gap-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Ayush Mhetre</p>
            <p className="font-bold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Accounts</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <AiOutlineShoppingCart className="h-10 w-10" />
            <p className="font-bold md:text-sm hidden md:inline mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="p-2 pl-6 flex space-x-3 items-center bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <AiOutlineMenu className="h-6 w-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
