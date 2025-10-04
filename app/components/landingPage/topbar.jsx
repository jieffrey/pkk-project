import Image from "next/image";

export default function Topbar() {
  return (
    <header>
        {/* Topbar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 bg-[#EBF1F1] py-2">
        <div className="flex-1 flex justify-center mb-2 md:mb-0">
            <p className="text-xs md:text-sm text-black text-center md:text-left">
            Free Standard Delivery & 7 Day Free Returns
            </p>
        </div>
        <div className="flex gap-3 md:gap-5">
            <button className="px-4 py-2 bg-white rounded-lg border border-black text-xs md:text-sm text-black font-bold hover:bg-[#262D63] hover:text-white transition">
            LOGIN
            </button>
            <button className="px-4 py-2 bg-white rounded-lg border border-black text-xs md:text-sm text-black font-bold hover:bg-[#262D63] hover:text-white transition">
            REGISTER
            </button>
        </div>
        </div>

      {/* Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white shadow gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
            <p className="text-lg md:text-xl text-black font-black">Craft</p>
            <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="inline-block w-10 h-10 md:w-16 md:h-16"
            />
            <p className="text-lg md:text-xl text-black font-black">Mart</p>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-black font-medium">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Trending</a>
            <a href="#">Contact</a>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-3 md:gap-4 text-black">
            <button className="text-sm md:text-base">untuk searh icon</button>
            <button className="text-sm md:text-base">untuk cart icon</button>
        </div>
        </div>
    </header>
    );
}
