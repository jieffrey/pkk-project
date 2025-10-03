import Image from "next/image"

export default function Topbar() {
    return(
    <header>
        {/* topbar */}
        <div className="flex justify-between items-center px-8 bg-[#EBF1F1]">
            <div className="flex-1 flex justify-center">        
                <p className="text-sm text-black">
                    Free Standard Delivery & 7 Day Free Returns
                </p>
            </div>
            <div className="flex gap-5 py-4">
                <button className="py-2 px-13 bg-white rounded-xl border border-black text-sm text-black font-bold hover:bg-[#262D63] transform">
                    LOGIN
                </button>
                <button className="py-2 px-13 bg-white rounded-xl border border-black text-sm text-black font-bold">
                    REGISTER
                </button>
            </div>
            <div className="flex justify-start">
                <div className="">
                    01
                </div>
            </div>
        </div>

        {/* navbar */}
        <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="flex items-center justify-center gap-2">
                <p className="text-xl text-black font-black">Craft</p>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className="inline-block"
                />
                <p className="text-xl text-black font-black">Mart</p>
            </div>

            <nav className="hidden md:flex gap-6 text-sm text-black font-medium">
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">Trending</a>
                <a href="#">nda tahu</a>
            </nav>

            <div className="flex items-center gap-4 text-black">
                <button>bwat search</button>
                <button>untuk cart</button>
            </div>
        </div>
    </header>
    )
}