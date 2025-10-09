import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function TrendingSection() {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
                Currently Trending
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="w-full h-48 relative bg-gray-100">
                        <Image
                            src="/images/product1.jpg"
                            alt="Dried Flower Glass Frame"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-sm font-medium text-gray-800 mb-2">
                            Dried Flower Glass Frame
                        </h3>
                        <p className="text-xs text-gray-400 line-through">IDR 96.000</p>
                        <p className="text-sm font-bold text-black mb-2">IDR 62.567</p>
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-900 transition">
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="w-full h-48 relative bg-gray-100">
                        <Image
                            src="/images/product2.jpg"
                            alt="DIY Resin Keychain Set"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-sm font-medium text-gray-800 mb-2">
                            DIY Resin Keychain Set
                        </h3>
                        <p className="text-xs text-gray-400 line-through">IDR 289.000</p>
                        <p className="text-sm font-bold text-black mb-2">IDR 250.000</p>
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-900 transition">
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="w-full h-48 relative bg-gray-100">
                        <Image
                            src="/images/product3.jpg"
                            alt="Cat Activity Tree"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-sm font-medium text-gray-800 mb-2">
                            RioAndMe Cat Activity Tree and Scratching Post
                        </h3>
                        <p className="text-xs text-gray-400 line-through">IDR 2.000.000</p>
                        <p className="text-sm font-bold text-black mb-2">IDR 1.250.000</p>
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-900 transition">
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="w-full h-48 relative bg-gray-100">
                        <Image
                            src="/images/product4.jpg"
                            alt="Dog Food"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-sm font-medium text-gray-800 mb-2">
                            Authority Healthy Weight Adult Dog Food
                        </h3>
                        <p className="text-xs text-gray-400 line-through">IDR 599.999</p>
                        <p className="text-sm font-bold text-black mb-2">IDR 500.000</p>
                        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-900 transition">
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
