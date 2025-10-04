import { Bagel_Fat_One } from "next/font/google";
import { FaSearch } from 'react-icons/fa';

const bagelFatone = Bagel_Fat_One({
    variable: "--font-bagel",
    weight: "400",
    subsets: ["latin"],
});

export default function Topbar() {
    return (
    <header>
        {/* Topbar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 bg-[#EBF1F1] py-2">
        <div className="flex-1 flex justify-center mb-2 md:mb-0">
            <p className="text-xs md:text-sm     text-black text-center md:text-center">
            Free Standard Delivery & 7 Day Free Returns
            </p>
        </div>
        <div className="flex gap-3 md:gap-5">
            <button className="px-8 py-2  bg-white rounded-lg border border-black text-xs md:text-sm text-black font-bold hover:bg-[#262D63] hover:text-white transition">
            LOGIN
            </button>
            <button className="px-8 py-2 bg-white rounded-lg border border-black text-xs md:text-sm text-black font-bold hover:bg-[#262D63] hover:text-white transition">
            REGISTER
            </button>
        </div>
        </div>

      {/* Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white shadow gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex items-center justify-center">
            <p className={`text-lg md:text-xl text-[#262D63] ${bagelFatone.className}`}>Craft</p>
            <p className={`text-lg md:text-xl text-[#8D88C3] ${bagelFatone.className}`}>Mart</p>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-black font-bold">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Trending</a>
            <a href="#">Contact</a>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-3 md:gap-4 text-black">
            <FaSearch className=""/>
        </div>
        </div>
    </header>
    );
}
