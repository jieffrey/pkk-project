import { FaHandHoldingUsd } from "react-icons/fa";
import { MdVerified } from 'react-icons/md';
import { FaBoxesPacking } from 'react-icons/fa6';

export default function CategorySection() {
    return (
        <section className="py-12 text-center bg-white md:h-[300px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:max-w-7xl md:gap-20 mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center p-10 rounded-xl shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <FaHandHoldingUsd className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Affordable Price</h3>
                    <p className="text-xs text-gray-500 font-bold">Craft Mart sells various products at affordable prices for its customers.</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <MdVerified className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Guaranteed Quality</h3>
                    <p className="text-xs text-gray-500 font-bold">Craft Mart has been tested to meet standards and quality.</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100 col-span-2 md:col-span-1">
                    <FaBoxesPacking className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Wide Range Of Product</h3>
                    <p className="text-xs text-gray-500 font-bold">Craft Mart offers a variety of categories to meet all your needs.</p>
                </div>
            </div>
        </section>
    );
}
