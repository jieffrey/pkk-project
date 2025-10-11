import { FaFacebookF, FaInstagram, FaShopify } from "react-icons/fa";
import { Bagel_Fat_One } from "next/font/google";

const bagelFatone = Bagel_Fat_One({
    variable: "--font-bagel",
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-purple-100 to-blue-100 py-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
                {/* Left Section */}
                <div>
                    <h2 className={`text-2xl font-extrabold text-blue-900 ${bagelFatone.className}`}>CraftMart</h2>
                    <p className="mt-3 text-sm">
                        If you have any question, please contact us at <br />
                        <span className="font-medium">CraftMart@gmail.com</span> or get in
                        touch via social media.
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaShopify className="cursor-pointer hover:text-green-600" />
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Categories</li>
                        <li>Best Sellers</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Categories</li>
                        <li>Best Sellers</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>

                {/* Help & Information */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Help & Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Categories</li>
                        <li>Best Sellers</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
