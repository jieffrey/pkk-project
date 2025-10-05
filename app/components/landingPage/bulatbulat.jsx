import { FaHandHoldingUsd } from "react-icons/fa";

export default function Circle() {
    return (
        <section className="py-12 text-center bg-white md:h-[500px]">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Choose your Category
            </h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base">
                Each creation is a piece of someone’s passion.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:max-w-5xl md:gap-20 mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center p-10 rounded-full shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <FaHandHoldingUsd className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Affordable Price</h3>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center p-6 rounded-full shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <FaHandHoldingUsd className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Guaranteed Quality</h3>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center p-6 rounded-full shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100 col-span-2 md:col-span-1">
                    <FaHandHoldingUsd className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Wide Range Of Product</h3>
                </div>
                
                {/* Card 4 */}
                <div className="flex flex-col items-center justify-center p-6 rounded-full shadow-md hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100 col-span-2 md:col-span-1">
                    <FaHandHoldingUsd className="w-10 h-10 text-[#5D6B6B] mb-3" />
                    <h3 className="font-semibold text-[#262D63] text-lg">Wide Range Of Product</h3>
                </div>
            </div>
        </section>
    );
}
